// pc端展示
// pc端显示二维码
var p = navigator.userAgent.toLowerCase(),
    g = navigator.userAgent,
    platform = {
        isMobile: /iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(p) && !/pc=1/.test(location.search),
        isWeiXin: "micromessenger" == p.match(/MicroMessenger/i),
        isWeiBo: "weibo" == p.match(/WeiBo/i),
        isNewsApp: "newsapp" == p.match(/newsapp/i),
        isQQ: "qq" == p.match(/QQ/i),
        isAndroid: -1 < g.indexOf("Android") || -1 < g.indexOf("Adr"),
        isiOS: !!g.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        isiphoneX: /iphone/gi.test(g) && (812 == screen.height && 375 == screen.width || 896 == screen.height && 414 == screen.width)
    };

if(!platform.isMobile){
// pc端
    $(".common-container").html(" ").css({ background: "#fff" })
    $(".common-container").append('<div class="pc_qr_code" style="padding-top: 200px;"></div>')
    setTimeout(function(){
        new QRCode($(".pc_qr_code")[0],{
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.L
        }).makeCode(window.location.href)
        $(".common-container").css({ width: "100%"})
        $(".pc_qr_code img").css({ border: "2px solid #fff",margin: "0 auto" })
        $(".pc_qr_code").append("<p style='display:block;color:#333;text-align:center;font-size:20px;margin-top:50px;'>为了更好的体验，请使用手机扫描二维码浏览</p>")
    },100)
}else{
// 移动端
var M, 
    T = PIXI.Container, 
    k = (PIXI.autoDetectRenderer,PIXI.loader), 
    L = k.resources, 
    R = (PIXI.Texture,PIXI.Text,PIXI.Sprite), 
    B = (PIXI.Rectangle,PIXI.Graphics,window.innerWidth), 
    D = window.innerHeight, 
    J = (Math.PI,new T), 
    W = new T;

    window.onload = function() {
      B = window.innerWidth
      D = window.innerHeight
      M = new PIXI.CanvasRenderer(B,D,{
          transparent: !0,
          antialias: !0,
          resolution: 1
      })
      $("#main").append(M.view)
      k.add(q).add(P).on("progress", X).load(Y)
  }

  // 滚动图片资源
  for (var q = [], N = 0; N < 2; N++)
    q.push("./images/bg_" + N + ".jpg");
    var Q, P = './js/main_2.json';
    
    // 加载进度过程
    function X(e, n) {
        var t = parseInt(e.progress), 
            i = parseInt(t % 10),
            o = Math.floor(t / 10);
        $(".loading_num .num").eq(1).removeClass().addClass("num").addClass("n" + o),
        $(".loading_num .num").eq(2).removeClass().addClass("num").addClass("n" + i),
        100 === t && ($(".loading_num .num").eq(0).css({display: "inline-block"}),
        $(".loading_num .num").eq(1).removeClass().addClass("num").addClass("n0"),
        $(".loading_num .num").eq(2).removeClass().addClass("num").addClass("n0"))
    }

  // 加载图片完成后过程
  function Y() {
    //loading处理
    $(".loading_num .num").eq(0).css({ display: "inline-block" }),
    $(".loading_num .num").eq(1).removeClass().addClass("num").addClass("n0"),
    $(".loading_num .num").eq(2).removeClass().addClass("num").addClass("n0"),
    $("#loading").fadeOut(function() {
        $("#loading").hide(),
        K = "start"
    }),
    // 生成手机端二维码
    new QRCode($(".save_box .qrcode")[0],{
        width: 106,
        height: 106,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L
    }).makeCode(window.location.href);

    // 背景图片
    (function() {
        Q = new T;
        for (var e = 0, n = 0; n < q.length; n++) {
        var t = new R(k.resources[q[n]].texture);
        t.y = e,
        Q.addChild(t),
        e += t.height
        }
        W.addChild(Q);
        // 移动
        Q.move = function(e) {
        Q.y = -e
        };
        
        // 左右滑动长图提示加入进去
        var i = new T, 
            o = H("guide_text.png"), 
            a = H("circle.png");
        
        a.position.set(101, 42)
        
        //指引动画
        position = {y: 42},
        new TWEEN.Tween(position)
        .to({y: 275},1000)
        .onUpdate(function() {
            a.y = position.y 
        }).repeat(1 / 0).yoyo(!0).start()
        animate()
        

        i.addChild(o, a),
        i.position.set(201, 495),
        Q.addChild(i),

        O = e - D,
        
        (function(e) {
            var i = e.box, 
            n = e.scrollHeight;
            i.interactive = !0,
            i.buttonMode = !0,
            i.on("touchstart", function(e) {
                $("#bgm")[0].paused && $("#bgm")[0].play();
                i.isDragging = !0;
                var n = e.data.originalEvent;
                s.doTouchStart(n.touches, n.timeStamp),
                z = !1
            }).on("touchmove", function(e) {
                if (!i.isDragging)
                    return;
                var n = e.data.originalEvent;
                s.doTouchMove(n.touches, n.timeStamp, n.scale)
            }).on("touchend", function(e) {
                if (!i.isDragging)
                    return;
                i.isDragging = !1;
                var n = e.data.originalEvent;
                s.doTouchEnd(n.timeStamp)
            }),
            i.isDragging = !1;
            var o = 0, 
                a = 0, 
                // 滚动插件
                s = i._scroller = new Scroller(function(e, n, t) {
                if (a = n - o,o = n,!i.isDragging && !z) {
                    if (U <= 0)
                        return z = !(U = 0),
                        void s.scrollTo(0, 5e4, !1);
                    if (O <= U)
                        return U = O,
                        z = !0,
                        void s.scrollTo(0, 5e4, !1);
                    if (Math.abs(a) < F)
                        return z = !0,
                        void s.scrollTo(0, 5e4, !1);
                    U += a
                }
                i.isDragging && (U += a) <= 0 && (U = 0)
            },{
                zooming: !1,
                animating: !0,
                bouncing: !1,
                animationDuration: 250
            });
            s.scrollTo(0, 5e4, !1),
            s.setDimensions(750, D, 750, n)

        }({box: W,scrollHeight: 1e5}))

    }()),

    // 其他
    G();

    var t = W.camera = H("camera.png");
    W.camera.visible = !1,
    t.position.set(78, D - 284),
    t.interactive = !0,
    t.buttonMode = !0,
    W.addChild(t),


    t.on("touchstart", function(e) {
        var n = e.data.originalEvent;
        t.moved = !1,
        t.isTouching = !0,
        t.startY = t.moveY = n.touches[0].pageY
    }).on("touchmove", function(e) {
        if (t.isTouching) {
            var n = e.data.originalEvent;
            t.moveY = n.touches[0].pageY,
            10 < Math.abs(t.moveY - t.startY) && (t.moved = !0)
        }
    }).on("touchend", function() {
        t.isTouching && (t.moved || t.click())
    }),

    t.click = function() {
        $("#camera")[0].play(),
        // 自执行
        function() {
            K = "end",
            W.camera.visible = !1,
            M.render(J);
            var e = $("#main canvas")[0],n = new Image;
            n.src = e.toDataURL("image/png"),
            $(n).css({"transform-origin": "0 0",transform: "rotate(-90deg) translate3d(-750px,0px,0)"}),
            $(".save_img").append(n);
            var t = new Image;
            t.src = e.toDataURL("image/png"),
            $("#end .bottom_show_img").append(t),
            $(".return,.notice").hide(),
            $("#end").show(),
            $("#end .bottom_show_img").css({opacity: 0}),
            setTimeout(function() {
                $("#end .bottom_show_img").fadeIn(1e3),
                $(".return,.notice").fadeIn(1e3)
            }, 200),
            
            // html2canvas
            html2canvas($(".save_box")[0],{
                useCORS: !0,
                scale: 1.25
            }).then(function(e) {
                $(".save_canvas").append(e);
                var n = $(".save_canvas canvas")[0],t=new Image;
                t.src = n.toDataURL("image/png"),
                $(".tap_save").append(t)
            })

        }()

    };

    // 相机
    var n = W.review = H("review.png");
    n.position.set(649, D - 220),
    n.visible = !1,
    W.addChild(n),
    n.interactive = !0,
    n.buttonMode = !0,
    n.on("tap", function() {
        $("#click")[0].play(),
        U = 0,
        Q.move(0)
    }),
    J.addChild(W),
    

    // 继续浏览
    $(".return").bind("click", function() {
        $("#click")[0].play(),
        K = "start",
        W.camera.visible = !0,
        $(".save_img").html(" "),
        $("#end .bottom_show .bottom_show_img").html(" "),
        $(".tap_save").html(" "),
        $(".save_canvas").html(" "),
        $("#end").hide()
    }),

    $(".save_box").css({ width:D, display: "block" })
  }

  var O, z = !0, U = 0, F = 1.8, K = "first";

  function H(e, n) {
    return new R(L[n || P].textures[e])
  }
  
  function G() {
      M.render(J),
      // f.default.update(), ----
      function() {
          if ("start" === K) {
              z && Q && (U += F),
              O <= U ? (U = O,
              W.camera && (W.review.visible = !0),
              W.camera && (W.camera.visible = !1)) : (W.camera && (W.review.visible = !1),
              W.camera && (W.camera.visible = !0),
              U <= 1e3 && (U <= 200 ? (W.camera.visible = !1,
              W.camera.alpha = 0) : U <= 300 ? (W.camera.visible = !0,
              W.camera.alpha = (U - 200) / 100) : (W.camera.visible = !0,
              W.camera.alpha = 1))),
              Q && Q.move && Q.move(U);
          }
      }(),
      requestAnimationFrame(G)
  }

  function animate( time ) {
    requestAnimationFrame( animate );
    TWEEN.update( time );
  }

  /* function h() {
    var r = this
      , e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
      , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
    !function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }(this, h),
    this.baseUrl = e,
    this.progress = 0,
    this.loading = !1,
    this.defaultQueryString = "",
    this._beforeMiddleware = [],
    this._afterMiddleware = [],
    this._resourcesParsing = [],
    this._boundLoadResource = function(e, t) {
        return r._loadResource(e, t)
    }
    ,
    this._queue = A.queue(this._boundLoadResource, t),
    this._queue.pause(),
    this.resources = {},
    this.onProgress = new o.default,
    this.onError = new o.default,
    this.onLoad = new o.default,
    this.onStart = new o.default,
    this.onComplete = new o.default;
    for (var n = 0; n < h._defaultBeforeMiddleware.length; ++n)
        this.pre(h._defaultBeforeMiddleware[n]);
    for (var i = 0; i < h._defaultAfterMiddleware.length; ++i)
        this.use(h._defaultAfterMiddleware[i])
    } */

}