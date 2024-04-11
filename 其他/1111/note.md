# 零高容器宽度自适应版

## 特点
```
<section style="font-size: 0;line-height: 0;overflow: hidden;">
  <section style="height: 0;">
    // 零高容器部分
    // 内容....
  </section>
  <svg viewBox="0 0 880 1000" style="display: block;max-width: none!important;margin-top: -1px;pointer-events: visible;user-select: none;-webkit-tap-highlight-color: transparent;">
    // 展开部分
    <set attributeName="width" from="100%" to="830%" restart="never" fill="freeze" begin="click"></set>
  </section>
</section>
```

## 通过宽高比适配原理：
```
视窗宽度一致(由于移动设备的宽度是有限值)，高度成比例，则零高容器所占高度空间和展开部分物理空间是一样的
```

## 具体实现：
```
1.svg标签若没设置width、height;仅设置了viewBox，那么svg的视口和视野宽高比一致
  <svg viewBox="0 0 100 100" style="background:red;"></svg>
  <svg viewBox="0 0 100 100" width="100" style="background:red;"></svg>

2.解除最大宽度限制（微信环境设置）max-width: none!important; 
  <svg viewBox="0 0 100 100" style="background:red;max-width: none!important;"></svg>

3.解释说明
  宽度自适应版的前提 viewBox="0 0 880 y" 中的宽度都相等，高度成比例就ok
  无缝长图总高度1660*5=8300 ；8300/1000=8.3倍数

  展开部分
    <svg viewBox="0 0 1125 1360"></svg> “视野”默认展开高度是1360；
    由于零高容器的内容“视野”宽度都相等是1125，总高度是22375；视野高度比就是22375/1360=16.45倍数;
    那么“视窗”的宽度就是
      <set attributeName="width" from="100%" to="1645%" restart="never" fill="freeze" begin="click"></set>
``` 