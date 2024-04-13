# svg零高容器实战
```
大纲介绍
	视窗与视野回顾
	零高容器
	实战
```

# (1)视窗与视野回顾
```
概念：
  视窗（viewport）：
    浏览器上可视区域，由width和height控制；即SVG元素在浏览器中所占据的实际渲染区域大小。这个区域大小,就是视窗。

  视野（viewbox）：
    是SVG内容的虚拟空间，可以被看作是一个自定义的坐标系统，包含了SVG图形的所有内容，并且允许您定义一个相对于这个坐标系统的裁剪区域。
    viewBox属性以四个数值的形式定义：viewBox="x y width height"，分别表示虚拟坐标系的左上角横坐标、纵坐标以及宽高。当设置了viewBox后，SVG引擎会根据这个坐标区域内的内容按比例缩放，以便适应视窗的大小。同时属性preserveAspectRatio用来在视窗中如何显示viewBox的内容，如viewBox如何缩放适应视窗的大小，同时viewBox在视窗中的位置如何对齐

视窗与视野关系：
  1.如果没有设置viewBox，那么SVG的内容会直接按照视窗的大小进行绘制，所有图形将填满整个视窗。

  2.当设置了viewBox时，SVG内容会被映射到视窗内，不论视窗大小如何变化，viewBox内的内容始终保持其相对比例。
    此外，还可以通过preserveAspectRatio属性来控制视野内容在视窗内如何对齐和填充。若svg标签未设置preserveAspectRatio，则其默认值preserveAspectRatio="xMidYMid meet"。其中xMidYMid表示如何对齐；meet是如何填充，表示保持“宽高比”并将视野viewBox缩放为适合视窗viewport的大小；
    preserveAspectRatio具体说明见以前笔记！！！

案例：视窗与视野关系
<!--
没有设置viewBox,视野上的内容会直接按照视窗的大小进行绘制，所有图形将填满整个视窗。
-->
<svg width="100" height="200" style="background:red;"></svg>
等价于
<svg width="100" height="200" viewBox="0 0 100 200" style="background:red;"></svg>
等价于
<div style="width:100px;height:200px">
    <svg viewBox="0 0 100 200" style="background:red;"></svg>
</div>

<!-- 
表现：浏览器控制台查看svg的height为100，视野的内容相对视窗是“缩小”展示的，以适应视窗
原因：设置viewBox，视窗与视野保持宽高比，因此height为100 
-->
<svg width="50"  viewBox="0 0 100 200" style="background:red;"></svg>

<!-- 
表现：浏览器控制台查看svg的height为200，视野的内容相对视窗是“正常”展示的，以适应视窗
原因：设置viewBox，视窗与视野保持宽高比，因此height为200
-->
<svg width="100" viewBox="0 0 100 200" style="background:red;"></svg>

<!-- 
表现：浏览器控制台查看svg的height为400，视野的内容相对视窗是“放大”展示的，以适应视窗
原因：设置viewBox，视窗与视野保持宽高比，因此height为400
-->
<svg width="200" viewBox="0 0 100 200" style="background:red;"></svg>

<!-- 
【重点】
表现：浏览器控制台查看 svg若没设置width、height, 仅设置了viewBox="0 0 100 200", svg的宽高比始终是1/2
原因：设置viewBox，视窗与视野保持宽高比

在移动端由于设备宽度是有限值的，因此svg在这种场景下相当于【默认】设置了svg的width=100%，可省略不写
-->
<svg viewBox="0 0 100 200" style="background:red;"></svg>
<svg viewBox="0 0 100 200" width="100%" style="background:red;"></svg>
<div style="width:100%">
    <svg viewBox="0 0 100 200" style="background:red;"></svg>
</div>
```

# (2)零高容器

## 零高容器基本结构
```html
<section style="overflow: hidden;">
  <!-- 
    1.零高容器部分 
    特点：style="height:0px;"
  -->
  <section id="dom1" style="height:0px;">
    <section style="height:300px;background-color:rgba(0,0,0,0.3);font-size:20px;font-weight:bold;">
      零高容器内容...
    </section>
  </section>
  <!-- 
    2.展开部分
    特点：
      // transform会触发BFC;BFC一块独立的渲染区域，可以将BFC看成是元素的一种属性，拥有了这种属性的元素就会使他的子元素与世隔绝，不会影响到外部其他元素;
      若是svg、img等标签元素撑开也可以不设置transform css属性
      transform:scale(1);
      // 零高容器部分内容多高就可设置多高
      height: 500px; 
  -->
  <div id="dom2" style="transform:scale(1); height: 500px;background-color:rgba(255,0,0,0.7);">
    <div style="position: absolute;bottom:0;left:0;right:0;font-size:14px">
      <p>表现：通过背景颜色可以看到,dom2是在dom1层级之上的，dom1盒子内容是由dom2盒子撑开</p>
    </div>
  </div>

  <!-- 若是svg、img等标签元素撑开也可以不设置transform css属性 -->
  <!-- <img src="./1.gif" style="height:500px;margin:0 auto;display:block;"> -->
</section>
```

## 零高容器与svg动画结合
```html
<section style="width: 345px;margin: 0px auto;">
  <section style="overflow: hidden;">
    <!-- 1.零高容器部分 -->
    <section style="height: 0px;">
      <section style="width:100%;height:500px;border-top: 1px solid red;">
        1.零高容器内容部分...
      </section>
      <section style="width:100%;height:500px;border-top: 1px solid red;">
        2.零高容器内容部分...
      </section>
    </section>
    <!-- 2.展开部分 -->
    <svg 
      style="background:red;cursor:pointer;"
      viewBox="0 0 345 40" 
      xmlns="http://www.w3.org/2000/svg">
      <!-- 将svg背景色去除,零高容器便于查看内容 -->
      <animate attributeName="opacity" from="1" to="0" fill="freeze" dur="0.01s" begin="click"></animate>
      <!-- 方式一动画：瞬间展开 -->
      <!-- <set attributeName="height" from="40" to="1000" restart="never" fill="freeze" begin="click+0.1s"></set> -->

      <!--  方式二动画：线性展开 -->
      <!-- 
        参数说明：
          1.values="参数1; 参数2; 参数3; ..."
            定义动画的多个关键帧，而from 和to来只能定义参数的起始和结束。
          2.keyTimes="参数1; 参数2; 参数3; ..."
            keytimes 在默认的状态下，第一个时间值为0，最后一个时间值为1；是values对应区间的时间分配比。
          3.dur="5s"
            动画的持续时间5s
          
        案例说明：
          svg高度从 40 到 150 动画分配时间为   3*0.15 = 0.45s；
                从 150 到 450 动画分配时间为   3*(0.4-0.15) = 3*0.25 = 0.75s;
                从 450 到 1000 动画分配时间为  3*(1-0.4) = 3*0.6 = 1.8s;
                验证：dur = 0.45s + 0.75s + 1.8s = 3s
      -->
      
      <animate attributeName="height" 
        values="40;150;450;1000" keyTimes="0;0.15;0.4;1" dur="3s"
        fill="freeze" restart="never" begin="click+0.1s">
      </animate> 

      <!-- 
      拓展
        其实上面就是匀速动画calcMode="linear"；相当于
          <animate attributeName="height" 
            calcMode="linear"
            values="40;150;450;1000" keyTimes="0;0.15;0.4;1" dur="3s"
            fill="freeze" restart="never" begin="click+0.1s">
          </animate>
        
        calcMode指的时keyTimes对应values值之间动画运行时的速度控制属性；
        有时候我们我们看到animate元素上设置calcMode="spline"，表示自定义(手动)设置keyTimes对应values值之间的动画速度；
        calcMode="spline"属性值需要和keySplines 属性搭配使用；
        keySplines 属性用于定义各个动画过渡效果的easing函数，其属性值时一组和keyTimes列表值对应的三次贝兹曲线控制点。

        keySplines设置参考：https://cubic-bezier.com
        
        <animate attributeName="height" 
          values="40;150;450;1000" keyTimes="0;0.15;0.4;1" dur="3s"
          calcMode="spline" keySplines=".42,0,1,1; .56,.12,.84,.36; .25,.1,.25,1"
          fill="freeze" restart="never" begin="click+0.1s">
        </animate>
      -->
    </svg>
  </section>
</section>
```

## 零高容器_宽度自适应【重点】

###  基本案例
```html
<style type="text/css">
*{margin:0;padding:0;}
.rich_media_content{overflow:hidden;color:#333;font-size:17px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;text-align:justify;position:relative;z-index:0;}
.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important;}
</style>

<div class="rich_media_content" style="visibility: visible;">
  <section style="font-size: 0;line-height: 0;">
    <!-- 1.零高容器部分 -->
    <section style="height: 0;">
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
    </section>
    <!-- 2.展开部分 -->
    <svg 
      viewBox="0 0 880 800" 
      style="pointer-events: visible; display: block;
      max-width: none!important;margin-top: -1px;user-select: none;-webkit-tap-highlight-color: transparent;">
      <!-- 
        线性动画
        特征：attributeName="width" values="100%;50%;500%;500%"
		自适应宽度，变化的是 attributeName="width"
      -->
      <animate attributeName="width" values="100%;50%;500%;500%" keyTimes="0;0.15;0.4;1" dur="5s" calcMode="spline" keySplines=".42,0,1,1;.42,0,1,1;.42,0,1,1" begin="click" fill="freeze"></animate>
      <!-- 让svg隐藏,可给svg设置background-color: red;然后查看去除set元素或设置set元素的效果 -->
      <set attributeName="visibility" from="visible" to="hidden" restart="never" fill="freeze" begin="click"></set>
    </svg>
  </section>
</div>
```
### 案例原理
```
特征：attributeName="width" values="100%;50%;500%;500%"

解释为什么改变的是svg的width属性，且最终值为500%？
	1.对于“零高容器”的视野(viewBox="0 0 880 800")内容viewBox-height为 5*800=4000; viewBox-width=880；

	2.对于“展开部分”的视野(viewBox="0 0 880 800")内容viewBox-height为 800; viewBox-width=880；

    3.由于最终达到的目的是将零高容器内容完全显示出来，那么就需要“展开部分” 视窗高度height和宽度width与“零高容器”视窗高度一致
      现在“零高容器”与“展开部分”的viewBox-width都为880，“零高容器”的viewBox-height=4000，而“展开部分” viewBox-height=800；
      “零高容器”的viewBox-height是“展开部分”viewBox-height 的5倍；
      那么相当于“展开部分”视窗的高度height需要增加5倍；

    4.由于“展开部分”的svg视窗与视野的宽高比一致（提示:若不理解，见视窗与视野回顾章节！）；
      当“展开部分”视窗的高度height需要增加5倍；那么视窗的宽度width也需要增加5倍；

      由于“展开部分”的svg元素没有显式设置宽度，则浏览器会根据上下文来决定这个百分比的实际大小。即移动设备的宽度；为100%；
      当“展开部分”视窗的宽度增加了5倍,那么最终值就为500%


注意：微信公众号环境下，需要解除最大宽度限制。即max-width: none!important
  	<svg viewBox="0 0 100 100" style="max-width: none!important;background:red"></svg>
```
### 拓展：pointer-events
```
pointer-events是一个css属性，用于事件穿透场景。常见值如下：
    (1)auto
      默认值，效果和没有定义pointer-events属性相同，鼠标不会穿透当前层。

    (2)none
      元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素(即有穿透功能能力)。
    
    (3)visiblePainted
      只适用于 SVG。元素只有在以下情况才会成为鼠标事件的目标：
      visibility属性值为visible，且鼠标指针在元素内部，且fill属性指定了none之外的值
      visibility属性值为visible，鼠标指针在元素边界上，且stroke属性指定了none之外的值

    (4)visibleFill
      只适用于 SVG。只有在元素visibility属性值为visible，且鼠标指针在元素内部时，元素才会成为鼠标事件的目标，fill属性的值不影响事件处理。

    (5)visibleStroke
      只适用于 SVG。只有在元素visibility属性值为visible，且鼠标指针在元素边界时，元素才会成为鼠标事件的目标，stroke属性的值不影响事件处理。

    (6)visible
      只适用于 SVG。只有在元素visibility属性值为visible，且鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，fill和stroke属性的值不影响事件处理。

    (7)painted
      只适用于 SVG。元素只有在以下情况才会成为鼠标事件的目标：

      鼠标指针在元素内部，且fill属性指定了none之外的值
      鼠标指针在元素边界上，且stroke属性指定了none之外的值
      visibility属性的值不影响事件处理。

    (8)fill
      只适用于 SVG。只有鼠标指针在元素内部时，元素才会成为鼠标事件的目标，fill和visibility属性的值不影响事件处理。

    (9)stroke
      只适用于 SVG。只有鼠标指针在元素边界上时，元素才会成为鼠标事件的目标，stroke和visibility属性的值不影响事件处理。

    (10)all
      只适用于 SVG。只有鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，fill、stroke和visibility属性的值不影响事件处理。
```

**案例一：元素不再是鼠标事件的目标**
```
<ul>
	<li><a href="http://www.baidu.com">可以点击的链接</a></li>
	<li><a href="http://www.baidu.com" style="pointer-events:none">不能点击的链接,且不展示点击手形</a></li>
</ul>
```

**案例二：鼠标不再监听当前层而去监听下面的层中的元素**
```
<style>
  .top { width: 200px;height: 90px;position: absolute;top: 0;left: 0px;background: yellow;opacity: 0.5;}
</style>
<!-- style="pointer-events:none;"增加或删除查看效果 -->
<div style="pointer-events:none;" data-top="上方黄色div" class="top"></div>
<ul>
  <li style="pointer-events:none;"><a href="http://www.baidu.com">百度</a></li>
  <li><a href="http://www.baidu.com">www.baidu.com</a></li>
</ul>
```

**案例三：pointer-events在svg中应用**
```
<style type="text/css">
*{margin:0;padding:0;}
.rich_media_content{overflow:hidden;color:#333;font-size:17px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;text-align:justify;position:relative;z-index:0;}
.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important;}
</style>

<div class="rich_media_content" style="visibility: visible;">
  <section style="font-size: 0;line-height: 0;">
    <section style="height: 0;">
      <!-- 
        设置 pointer-events: visible; 或 pointer-events: none; 查看效果
      -->
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;
        pointer-events: visible;user-select: none;-webkit-tap-highlight-color: transparent;">
        <rect x="10" y="10" rx="5" ry="5" width="150" height="100" fill="red" stroke="red">
          <set attributeName="visibility" from="visible" to="hidden" restart="never" fill="freeze" begin="click"></set>
        </rect>
      </svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
    </section>
    <svg 
      viewBox="0 0 880 800" 
      style="pointer-events: visible; display: block;
      max-width: none!important;margin-top: -1px;user-select: none;-webkit-tap-highlight-color: transparent;">
      <animate attributeName="width" values="100%;50%;500%;500%" keyTimes="0;0.15;0.4;1" dur="5s" calcMode="spline" keySplines=".42,0,1,1;.42,0,1,1;.42,0,1,1" begin="click" fill="freeze"></animate>
      <set attributeName="visibility" from="visible" to="hidden" restart="never" fill="freeze" begin="click"></set>
    </svg>
  </section>
</div>
```
## 零高容器_宽度固定【重点】
```
<style type="text/css">
*{margin:0;padding:0;}
.rich_media_content{overflow:hidden;color:#333;font-size:17px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;text-align:justify;position:relative;z-index:0;}
.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important;}
</style>

<div class="rich_media_content" style="visibility: visible;">
  <section style="width: 340px;margin: 0 auto; font-size: 0;line-height: 0;">
    <!-- 1.零高容器部分 -->
    <section style="height: 0;">
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
      <svg viewBox="0 0 880 800" style="display: block;margin-top: -1px;background: url(./1.gif) 0 0 / 100% auto no-repeat;pointer-events: none;user-select: none;-webkit-tap-highlight-color: transparent;"></svg>
    </section>
    <!-- 2.展开部分 -->
    <!-- 
      问题：展开部分与零高容器部分物理空间如何实现高度一致？
        由于移动端适配问题，宽度不固定，导致svg的高度也不固定；因此固定最外层盒子宽度为width: 340px;
        由于宽度固定，不同设备上高度也就固定了;

        由于视图于视野保持宽高比关系；那么展开部分svg初始高度为：
          svg的宽度为340px；340/svg高 = 880/800 => svg的初始物理空间高度height = 309.09; 即from="309.09" 
        
          零高容器部分高度：
            340/svg高 = 880/(800*5)  => svg高=1,545.4545 => to="1,545.4545"
        
        可通过浏览器调试查看！！
    -->
    <svg 
      viewBox="0 0 880 800" 
      style="pointer-events: visible; display: block;
      max-width: none!important;margin-top: -1px;user-select: none;-webkit-tap-highlight-color: transparent;">
      <!-- 线性动画: 固定宽度，变化的是 attributeName="height" -->
      <animate calcMode="spline" attributeName="height" values="309.09;1545.45;1545.45" dur="4s" keyTimes="0;0.8;1" keySplines=".42,0,1,1;.42,0,1,1" begin="click" fill="freeze"></animate>
      <!-- 让svg隐藏,可给svg设置background-color: red;然后查看去除set元素或设置set元素的效果 -->
      <set attributeName="visibility" from="visible" to="hidden" restart="never" fill="freeze" begin="click"></set>
    </svg>
  </section>
</div>
```

# (3)实战案例
## 基本结构
```
根据页面dom结构推断出其是 【宽度自适应的零高容器】；根据原理推理：
	<svg viewBox="0 0 1125 1360"></svg> “视野”默认展开高度是1360；
    由于零高容器的内容“视野”宽度都相等是1125，总高度是20151；视野高度比就是20151/1360=14.8169倍数;
    那么展开部分的“视窗”宽度就是
      <set attributeName="width" from="100%" to="1482%" restart="never" fill="freeze" begin="click"></set>
      
      
思考：零高容器的宽度固定如何理解？
```

## 展开部分说明
```
（a）验证svg保持宽高比；通过查看浏览器控制台验证
	1.假设设备宽度为320,那么初始渲染区域高度为：
		h/320 =  1360/1125 -> h=(320*1360)/1125 = 386.8444444444444
				
	2.执行第一个动画svg宽度增大2.64倍，那么320*2.64 = 844.8；
    	由于需要实现宽高比一致，高度也需要增大2.64倍数，386.84*2.64= 1021.2576；
    	
	3.依次推断....

（b）动画
	begin="-2"意味着动画将在文档加载完成后的“2秒前”启动。
    后续begin属性规律
    	1.5 + 10 = 11.5 + 2
    	13.5 + 9 = 22.5 + 2
    	24.5 + 15 = 39.5 + 2
    	....
```

## 零高容器部分
```
<section style="overflow: hidden;">
  <section id="dom1" style="height:0px;">
    <section style="height:300px;background-color:rgba(0,0,0,0.3);font-size:20px;font-weight:bold;">
      零高容器内容...
    </section>
  </section>

  <div id="dom3" style="transform:scale(1); height:0px;">
      <div style="height:400px;background-color:rgba(255,255,0,0.8)">
          dom3
      </div>
  </div>
  
  <div id="dom2" style="transform:scale(1); height: 500px;background-color:rgba(255,0,0,0.7);">
    <div style="position: absolute;bottom:0;left:0;right:0;font-size:14px">
      <p>表现：通过背景颜色可以看到,dom2是在dom1层级之上的，dom1盒子内容是由dom2盒子撑开</p>
    </div>
  </div>
</section>
```