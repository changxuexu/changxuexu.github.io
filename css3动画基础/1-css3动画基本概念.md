css动画
  https://www.w3cways.com/css3-animation-tool
  https://www.w3cways.com/css3-animation-guide
  

动画css3
《1》transform:变形
      1.变换函数：旋转rotate、缩放scale、移动translate、倾斜skew以及矩阵变形matrix。
      2.同时对一个对象进行多个变换函数，以空格分开
        skew()        倾斜
        matrix()      矩阵变形
        perspective() 透视

        matrix(a,c,e,b,d,f);
          a   c   e
          b   d   f
          0   0   1

          a表示scaleX()
          c表示skewY()
          e表示skewX()
          b表示scaleY()
          d表示translateX()
          f表示translateY()
      
《2》transition：过渡属性，过渡时间，过渡效果
      transition-property：过渡的css属性(all | 多个用“,”隔开)
      transition-duration：过渡时间（0 | 几秒）
      transition-delay：延迟时间（0 | ）
      transition-timing-function：过渡效果
          ease：缓解效果，等同于cubic-bezier(0.25,0.1,0.25,1.0)函数，既立方贝塞尔。
          linear：线性效果，等同于cubic-bezier(0.0,0.0,1.0,1.0)函数。
          ease-in：渐显效果，等同于cubic-bezier(0.42,0,1.0,1.0)函数。
          ease-out：渐隐效果，等同于cubic-bezier(0,0,0.58,1.0)函数。
          ease-in-out：渐显渐隐效果，等同于cubic-bezier(0.42,0,0.58,1.0)函数。
          cubic-bezier：特殊的立方贝塞尔曲线效果cubic-bezier(n,n,n,n),n可能的值是0至1之间的数值。
      
      简写顺序：
      transition：transition-property transition-duration transition-timing-function  transition-delay 
        eg: transition: width 2s ease, height 2s, transform 2s
  
《3》animation 动画

    animation-name：动画名称 ，多个用","隔开
    animation-duration：动画时间（0：不动画）
    animation-delay: 动画延迟（0：不延迟，立即执行）
    animation-iteration-count：播放次数
                        number：自定义动画执行次数，设置值可为0或正整数。
                        infinite：无限循环。

    animation-direction：播放方向
                        normal：正常方向。
                        reverse：动画反向运行,方向始终与normal相反。（FF14.0.1以下不支持）
                        alternate：动画会循环正反方向交替运动，奇数次（1、3、5……）会正常运动，偶数次（2、4、6……）会反向运动，即所有相关联的值都会反向。
                        alternate-reverse：动画从反向开始，再正反方向交替运动，运动方向始终与alternate定义的相反。（FF14.0.1以下不支持）

    animation-fill-mode：播放后的状态
                        none：默认值。不设置对象动画之外的状态
                        forwards：结束后保持动画结束时的状态，但当animation-direction为0，则动画不执行，持续保持动画开始时的状态
                        backwards：结束后返回动画开始时的状态
                        both：结束后可遵循forwards和backwards两个规则。

    animation-timing-function：播放方式
        ease：缓解效果，等同于cubic-bezier(0.25,0.1,0.25,1.0)函数，既立方贝塞尔。
        linear：线性效果，等同于cubic-bezier(0.0,0.0,1.0,1.0)函数。
        ease-in：渐显效果，等同于cubic-bezier(0.42,0,1.0,1.0)函数。
        ease-out：渐隐效果，等同于cubic-bezier(0,0,0.58,1.0)函数。
        ease-in-out：渐显渐隐效果，等同于cubic-bezier(0.42,0,0.58,1.0)函数。
        step-start：马上转跳到动画结束状态。
        step-end：保持动画开始状态，直到动画执行时间结束，马上转跳到动画结束状态。
        steps(<number>[, [ start | end ] ]?)：第一个参数number为指定的间隔数，即把动画分为n步阶段性展示，第二个参数默认为end，设置最后一步的状态，start为结束时的状态，end为开始时的状态，若设置与animation-fill-mode的效果冲突，而以animation-fill-mode的设置为动画结束的状态。
        cubic-bezier(<number>, <number>, <number>, <number>)：特殊的立方贝塞尔曲线效果。
    
    animation-play-state：检索或设置对象动画的状态。
        running：默认值。运动
        paused：暂停



    animation简写：
      animation：动画名称 执行时间 延迟时间 执行次数 过渡效果 播放方向 完成状态

      简单动画：
        @-webkit-keyframes demo{
          from{left:0;}
          to{left:400px;}
        }
      复杂动画：
        @-webkit-keyframes demo{
            0%{left:0;}
            50%{left:200px;}
            100%{left:400px;}
        }


其他：
  transform-origin：调整旋转中心
		percentage：用百分比指定坐标值。可以为负值。
		length：用长度值指定坐标值。可以为负值。
		left center right是水平方向取值，而top center bottom是垂直方向的取值。
		
		X轴：left 、center、right
		Y轴：top、center、bottom
		Z轴：length px
		
		
    
  perspective-origin:透视原点
      percentage：用百分比指定坐标值。可以为负值。
      length：用长度值指定坐标值。可以为负值。
      left,center right是水平方向取值，而top center bottom是垂直方向的取值。
    
  backface-visibility：隐藏内容的背面
      visible：默认值，旋转的时候背景可见。
      hidden：旋转的时候背景不可见。
    
  transform-style：3D呈现
      flat：所有子元素在 2D 平面呈现。
      preserve-3d：保留3D空间。
