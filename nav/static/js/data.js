var data_daily = {
  super_tit: '日常',
  super_child: [
    {
      second_tit: '搜索/翻译',
      second_child: [
        { name: '百度搜索', href: 'https://www.baidu.com', title: '' },
        { name: '头条搜索', href: 'https://www.toutiao.com', title: '' },
        { name: '谷歌搜索', href: 'https://www.google.com', title: '' },
        { name: '百度翻译', href: 'https://fanyi.baidu.com', title: '' },
        { name: '火山翻译', href: 'https://translate.volcengine.com/translate', title: '' },
        { name: '谷歌翻译', href: 'https://translate.google.cn/?hl=zh-CN&tab=TT', title: '' }
      ]
    },
    {
      second_tit: 'js搜索',
      second_child: [
        { name: 'npm插件搜索', href: 'https://www.npmjs.com', title: '' },
        { name: 'MDN-developer', href: 'https://developer.mozilla.org/zh-CN', title: '' },
        { name: 'Can I use', href: 'https://www.caniuse.com', title: '' },
        { name: 'Stack Overflow', href: 'https://stackoverflow.com', title: '' }
      ]
    },
    {
      second_tit: 'git资料',
      second_child: [
        { name: '博客', href: 'https://www.cnblogs.com/changxue', title: 'self' },
        { name: 'github', href: 'https://github.com/changxuexu?tab=repositories', title: 'git仓库' },
        { name: 'gitee', href: 'https://gitee.com/changxuexu/projects', title: '码云' },
        { name: 'coding', href: 'https://coding.net', title: 'git仓库' }
      ]
    },
    {
      second_tit: '便利工具',
      second_child: [
        { name: '菜鸟工具', href: 'https://c.runoob.com/', title: '' }
      ]
    }
  ]
}

var data_vue = {
  super_tit: 'Vue',
  super_child: [
    {
      second_tit: 'Vue3',
      second_child: [
        { name: 'Vue3文档', href: 'https://cn.vuejs.org/guide/introduction.html', title: '' },
        { name: 'Vue Router', href: 'https://router.vuejs.org/zh/index.html', title: '' },
        { name: 'Pinia(状态管理)', href: 'https://pinia.vuejs.org/api/modules/pinia.html', title: '' },
        { name: 'vite', href: 'https://cn.vitejs.dev/guide', title: '' },
        { name: 'vue-cli', href: 'https://cli.vuejs.org/zh/guide', title: '' },
        { name: 'Vue3相比vue2新功能', href: 'https://v3-migration.vuejs.org', title: '' },
        { name: 'StackBlitz在线编辑', href: 'https://stackblitz.com', title: '代码在线构建工具' },
        { name: 'Vue2到Vue3项目升级指南', href: 'https://gogocode.io/zh/docs/vue/vue2-to-vue3', title: '' }
      ]
    },
    {
      second_tit: 'Vue2',
      second_child: [
        { name: 'Vue.js社区', href: 'https://forum.vuejs.org', title: '' },
        { name: 'Vue2文档', href: 'https://cn.vuejs.org/v2/guide', title: '' },
        { name: 'vue-loader', href: 'https://vue-loader.vuejs.org/zh', title: '' },
        { name: 'vuex', href: 'https://vuex.vuejs.org/zh', title: '' },
        { name: 'vue-cli', href: 'https://cli.vuejs.org/zh/config', title: '' },
        { name: 'Nuxt', href: 'https://nuxtjs.org/docs/get-started/installation', title: '' },
        { name: 'Nuxt中文', href: 'https://www.w3cschool.cn/nuxtjs', title: '' }
      ]
    },
    {
      second_tit: '组件库M',
      second_child: [
        { name: 'Vant2', href: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN', title: '有赞' },
        { name: 'Vant3', href: 'https://vant-contrib.gitee.io/vant/v3/#/zh-CN', title: '有赞' },
        { name: 'NutUI', href: 'https://nutui.jd.com/#/intro', title: '京东' },
        { name: 'Mint', href: 'http://mint-ui.github.io/#!/zh-cn', title: '饿了么' },
        { name: 'Cube UI', href: 'https://didi.github.io/cube-ui/#/zh-CN', title: '滴滴' },
        { name: 'Muse UI', href: 'https://muse-ui.org/#/zh-CN', title: '' },
        { name: 'we-vue', href: 'https://github.com/tianyong90/we-vue', title: '是一套基于 Vue.js 的移动关组件库，结合 weui 官方样式库，封装了一系列组件，适合微信公众号等移动端开发' }
      ]
    },
    {
      second_tit: '组件库P',
      second_child: [
        { name: 'Element2', href: 'https://element.eleme.cn/#/zh-CN/component/installation', title: '' },
        { name: 'Element3', href: 'https://element-plus.gitee.io/#/zh-CN/component/installation', title: '' },
        { name: 'iview2', href: 'http://v4.iviewui.com/docs/introduce', title: '' },
        { name: 'iview3', href: 'https://www.iviewui.com/view-ui-plus/guide/introduce', title: '' },
        { name: 'Ant Design Vue', href: 'https://www.antdv.com/docs/vue/introduce-cn', title: '' },
        { name: 'Arco Design', href: 'https://arco.design', title: '字节跳动，支持vue以及react' },
        { name: 'Naive UI', href: 'https://www.naiveui.com/zh-CN/light/docs/installation', title: '仅支持 Vue3' },
        { name: 'Vuetify', href: 'https://vuetifyjs.com/zh-Hans', title: '' }
      ]
    },
    {
      second_tit: '管理框架',
      second_child: [
        { name: 'vue-element-admin', href: 'https://panjiachen.github.io/vue-element-admin-site/zh', title: '' },
        { name: 'iview-admin', href: 'https://github.com/iview/iview-admin', title: '' },
        { name: 'iview-admin文档', href: 'https://lison16.github.io/iview-admin-doc', title: '' },
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_React = {
  super_tit: 'React',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'React', href: 'https://zh-hans.reactjs.org/', title: 'react_reactjs' },
        { name: 'React', href: 'https://reactjs.bootcss.com/', title: 'react_bootcss' },
        { name: 'React-native', href: 'https://www.react-native.cn/', title: '' },
        { name: 'React菜鸟教程', href: 'https://www.runoob.com/react/react-tutorial.html', title: '' }
      ]
    },
    {
      second_tit: '组件库P',
      second_child: [
        { name: 'Ant Design', href: 'https://ant.design/docs/react/introduce-cn', title: '' },
        { name: 'Semi Design', href: 'https://semi.design/zh-CN/', title: '抖音/UED' },
        { name: 'ZEIT UI', href: 'https://github.com/zeit-ui/react', title: '抖音/UED' },
      ]
    }
  ]
}

var data_Angular = {
  super_tit: 'Angular',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'Angular文档', href: 'https://www.angularjs.net.cn', title: '' }
      ]
    },
    {
      second_tit: '管理框架',
      second_child: [
        { name: 'ng2-admin', href: 'https://github.com/akveo/ngx-admin', title: '基于 Angular2、Bootstrap 4和Webpack的后台管理面板框架' },
        { name: 'blur-admin', href: 'https://github.com/akveo/blur-admin', title: '基于 Angular 和 Bootstrap 的后台管理面板框架' }
      ]
    }
  ]
}

var data_jquery = {
  super_tit: 'jquery/Zepto',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'jquery文档', href: 'http://jquery.cuishifeng.cn', title: '' },
        { name: 'zepto文档', href: 'https://www.html.cn/doc/zeptojs_api', title: '' }
      ]
    },
    {
      second_tit: '组件库',
      second_child: [
        { name: 'MZUI', href: 'http://zui.sexy/m/index.html', title: 'mobile端' },
        { name: 'WeUI', href: 'https://weui.io/', title: 'mobile端' },
        { name: 'Bootstrap', href: 'https://www.bootcss.com', title: '' },
        { name: 'Bootstrap IE6 兼容库', href: 'http://www.bootcss.com/p/bsie', title: '' },
        { name: 'LuLu', href: 'https://www.zhangxinxu.com/sp/lulu/mockup/content/about/design.php', title: 'pc端' },
        { name: 'layui文档', href: 'https://www.layuion.com', title: '' },
        { name: 'layui仓库', href: 'https://gitee.com/layui', title: '' },
        { name: 'layui教程', href: 'https://www.php.cn/code/30323.html', title: '' }
      ]
    },
    {
      second_tit: '管理框架',
      second_child: [
        { name: 'H+主题框架', href: 'http://618cj.com/ys/547/layouts.html', title: '' },
        { name: 'AdminLTE', href: 'https://github.com/almasaeed2010/AdminLTE', title: '基于 Bootstrap 3.x 的免费的后台 UI 框架' },
        { name: 'layuiAdmin', href: 'http://x.xuebingsi.com/index/index/more.html', title: '' },
        { name: 'Gentelella', href: 'https://github.com/ColorlibHQ/gentelella', title: 'Bootstarp 的免费的后台控制面板' },
        { name: 'material-dashboard', href: 'https://github.com/creativetimofficial/material-dashboard', title: '基于 Bootstrap 4 和 Material 风格的控制面板' }
      ]
    },
    {
      second_tit: '插件资源',
      second_child: [
        { name: 'jq22', href: 'http://www.jq22.com', title: '' },
        { name: 'jquery之家', href: 'http://www.htmleaf.com', title: '' },
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_Node = {
  super_tit: 'Node',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'nodejs官网', href: 'https://nodejs.org', title: '' },
        { name: 'nodejs中文文档', href: 'http://nodejs.cn', title: '' },
        { name: 'node社区', href: 'https://cnodejs.org', title: '' },
        { name: '五月君node教程', href: 'https://www.nodejs.red', title: '' },
      ]
    },
    {
      second_tit: '开发框架',
      second_child: [
        { name: 'express', href: 'https://www.expressjs.com.cn', title: '' },
        { name: 'koa', href: 'https://www.koajs.com.cn', title: '' },
        { name: 'egg', href: 'https://www.eggjs.org/zh-CN', title: '' },
        { name: 'fastify', href: 'https://www.fastify.io', title: '' }
      ]
    }
  ]
}

var data_Redis = {
  super_tit: 'Redis',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'redis官网', href: 'https://redis.io', title: '' },
        { name: 'redis菜鸟教程', href: 'https://www.runoob.com/redis/redis-tutorial.html', title: '' },
        { name: 'redis命令参考', href: 'http://doc.redisfans.com', title: '' },
        { name: '安装包下载', href: 'https://github.com/tporadowski/redis/releases', title: '' },
        { name: 'redis在线测试', href: 'https://try.redis.io', title: '' },
        { name: 'redis源码', href: 'https://github.com/redis/redis', title: '' },
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_Nginx = {
  super_tit: 'Nginx',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'nginx官网', href: 'http://nginx.org/', title: '' },
        { name: 'nginx下载', href: 'http://nginx.org/en/download.html', title: '' }
      ]
    }
  ]
}

var data_Docker = {
  super_tit: 'Docker',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'Docker菜鸟教程', href: 'https://www.runoob.com/docker/ubuntu-docker-install.html', title: '' },
        { name: 'YAML/YML在线编辑(校验)器', href: 'https://www.bejson.com/validators/yaml_editor', title: '' }
      ]
    }
  ]
}

var data_WeChat = {
  super_tit: '微应用',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: '微信开放文档', href: 'https://developers.weixin.qq.com/miniprogram/dev/framework', title: '' },
        { name: '微信公众平台', href: 'https://mp.weixin.qq.com', title: '' },
        { name: '开放服务类目', href: 'https://developers.weixin.qq.com/miniprogram/product/material', title: '开发之前要仔细考虑下该类目是否能审核通过,可在社区进行搜索' },
        { name: '微信开放社区', href: 'https://developers.weixin.qq.com/community/develop/mixflow', title: '' },
        { name: '小程序当前bug', href: 'https://developers.weixin.qq.com/community/develop/issueList?type=修复中&block=bug', title: '' },
        { name: '小程序官方案例', href: 'https://github.com/wechat-miniprogram/miniprogram-demo', title: '' },
        { name: '小程序开发教程', href: 'https://cloud.tencent.com/edu/paths/series/applet', title: '' },
        { name: '微信公众平台接口测试', href: 'https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login', title: '' },
        { name: '调试资料', href: 'https://www.cnblogs.com/yimiyan/p/6594205.html', title: '' },
        { name: '微信公众平台接口调试工具', href: 'https://mp.weixin.qq.com/debug', title: '' }
      ]
    },
    {
      second_tit: '组件库',
      second_child: [
        { name: 'Vant Weapp', href: 'https://youzan.github.io/vant-weapp/#/intro', title: '' },
        { name: 'wepy', href: 'https://wepyjs.github.io/wepy-docs', title: '' }
      ]
    },
    {
      second_tit: '插件库',
      second_child: [
        { name: '腾讯视频小程序播放器SDK', href: 'https://github.com/tvfe/txv-miniprogram-plugin', title: '' },
        { name: '智能对话', href: 'https://developers.weixin.qq.com/doc/aispeech/platform/INTRODUCTION.html', title: '' }
      ]
    }
  ]
}

var data_Alipay = {
  super_tit: '支付宝',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: '小程序/生活号', href: 'https://opendocs.alipay.com/mini/', title: '' }
      ]
    }
  ]
}

var data_Tiktok = {
  super_tit: '抖音',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: '字节小程序', href: 'https://microapp.bytedance.com/', title: '' },
        { name: '抖音开放平台', href: 'https://open.douyin.com/platform', title: '' },
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_Crossplatform = {
  super_tit: '跨平台',
  super_child: [
    {
      second_tit: 'Flutter',
      second_child: [
        { name: 'Flutter中文网', href: 'https://flutterchina.club', title: '' },
        { name: 'Dart库搜索', href: 'https://pub.flutter-io.cn/packages', title: '' },
        { name: 'Flutter掘金社区', href: 'https://juejin.im/tag/Flutter?utm_source=flutterchina&utm_medium=word&utm_content=btn&utm_campaign=q3_website', title: '' }
      ]
    },
    {
      second_tit: 'uni-app',
      second_child: [
        { name: 'uni-app文档', href: 'https://uniapp.dcloud.net.cn/', title: '' },
        { name: 'uni-app官网案例', href: 'https://hellouniapp.dcloud.net.cn/pages/component/view/view', title: '' },
        { name: 'uni-app视频教程', href: 'https://www.bilibili.com/video/av80616176/?p=1&share_source=qq&share_medium=iphone&bbid=ZF42B7FFBC689D40490794596C2AA393DD77&ts=1577338060', title: '' },
        { name: 'MUI', href: 'http://dev.dcloud.net.cn/mui', title: '' }
      ]
    },
    {
      second_tit: '其他',
      second_child: [
        { name: 'Taro', href: 'https://taro.jd.com/', title: 'Taro 是一个京东开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv等框架来开发小程序(微信/京东/百度/支付宝/字节跳动/QQ/飞书)/H5/RN 等应用' },
        { name: 'Chameleon 变色龙', href: 'https://cml.js.org/', title: '滴滴开放Native端/小程序/快应用' },
        { name: 'Hippy', href: 'https://hippyjs.org/', title: '腾讯开放支持iOS、Android、Web,支持react/vue' },
        { name: 'Electron', href: 'https://www.electronjs.org/', title: '使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序' },
        { name: 'Tauri', href: 'https://tauri.app/zh/', title: '构建桌面应用' },
      ]
    },
    {
      second_tit: '安卓',
      second_child: [
        { name: 'android开放平台', href: 'https://developer.android.google.cn/index.html', title: '' },
        { name: 'Android入门教程', href: 'https://www.runoob.com/w3cnote/android-tutorial-intro.html', title: '' },
        { name: 'AndroidDevTools开发工具', href: 'http://www.androiddevtools.cn', title: '' },
        { name: 'Android学习资源', href: 'https://github.com/coder-pig/Android-Storage-Box', title: '' }
      ]
    },
    {
      second_tit: 'IOS',
      second_child: [
        { name: 'IOS开放平台', href: 'https://developer.apple.com', title: '' },
      ]
    },
  ]
}

var data_tool = {
  super_tit: '辅助工具',
  super_child: [
    {
      second_tit: '产品设计',
      second_child: [
        { name: '在线PS', href: 'https://ps.gaoding.com/#/', title: '' },
        { name: 'tinypng图片压缩', href: 'https://tinypng.com', title: '' },
        { name: '阿里矢量图标库', href: 'https://www.iconfont.cn', title: '' },
        { name: '蓝湖', href: 'https://lanhuapp.com', title: '' },
        { name: 'chainco', href: 'http://www.chainco.cn', title: 'UI设计交互演示' },
        { name: '犸良', href: 'https://design.alipay.com/emotion', title: '素材动效制作' },
        { name: '鹿班', href: 'https://luban.taobao.com', title: '海报/商品图文/直播间背景' }
      ]
    },
    {
      second_tit: '第三方api',
      second_child: [
        { name: '快递100', href: 'http://api.kuaidi100.com/home', title: '' },
        { name: '快递鸟', href: 'http://www.kdniao.com', title: '' },
        { name: '腾讯ocr识别', href: 'https://cloud.tencent.com/document/product/866/45338', title: '' }
      ]
    },
    {
      second_tit: '接口管理',
      second_child: [
        { name: 'Apipost', href: 'https://www.apipost.cn', title: '' },
        { name: 'apizza', href: 'https://www.apizza.net', title: '' },
        { name: 'yapi', href: 'https://hellosean1025.github.io/yapi', title: '' },
        { name: 'eolinker', href: 'https://www.eolinker.com', title: '' },
        { name: 'mockjs', href: 'http://mockjs.com/examples.html', title: '接口数据模拟' }
      ]
    },
    {
      second_tit: 'Git',
      second_child: [
        { name: 'git文档', href: 'https://backlog.com/git-tutorial/cn/contents', title: '' },
        { name: 'git视屏教程', href: 'https://m.php.cn/code/7947.html', title: '' },
        { name: 'SourceTree教程', href: 'https://jingyan.baidu.com/article/dca1fa6f19c0abf1a5405246.html', title: '' },
        { name: '从零做一个前端开源项目', href: 'https://www.imooc.com/article/28240', title: '' }
      ]
    },
    {
      second_tit: 'webpack',
      second_child: [
        { name: 'Webpack中文', href: 'https://www.webpackjs.com/concepts', title: '' }
      ]
    },
    {
      second_tit: 'svg优化器',
      second_child: [
        { name: 'SVGOMG', href: 'https://jakearchibald.github.io/svgomg', title: '' },
        { name: 'SVG Optimizers', href: 'https://online-converting.com/svg-optimizer', title: '' }
      ]
    },
    {
      second_tit: '在线编辑',
      second_child: [
        { name: 'Stackblitz', href: 'https://stackblitz.com/', title: '' },
        { name: 'codepen', href: 'https://codepen.io', title: '' },
        { name: 'jsrun.net', href: 'http://jsrun.net', title: '' },
        { name: 'SoloLearn', href: 'https://www.sololearn.com/home', title: '' },
      ]
    },
    {
      second_tit: '内网穿透',
      second_child: [
        { name: 'Sunny-Ngrok', href: 'https://www.ngrok.cc', title: '' },
        { name: 'NATAPP', href: 'https://natapp.cn', title: '基于ngrok高速内网穿透' },
        { name: '花生壳', href: 'https://hsk.oray.com', title: '' },
        { name: 'ngrok', href: 'https://ngrok.com', title: '' }
      ]
    }
  ]
}

var data_study = {
  super_tit: '学习网站',
  super_child: [
    {
      second_tit: '课程',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    },
    {
      second_tit: '团队',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    },
    {
      second_tit: '博文',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    },
    {
      second_tit: '个人',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    },
  ]
}

var data_javascript = {
  super_tit: 'Javascript',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'es6入门教程', href: 'http://es6.ruanyifeng.com', title: '' },
        { name: 'es5入门手册', href: 'https://wangdoc.com', title: '' }
      ]
    }
  ]
}

var data_jsplug = {
  super_tit: 'Js插件库',
  super_child: [
    {
      second_tit: 'Vue常用',
      second_child: [
        { name: 'Axios', href: 'https://www.kancloud.cn/yunye/axios/234845', title: '' },
        { name: 'BetterScroll', href: 'https://better-scroll.github.io/docs/zh-CN/guide', title: '' },
        { name: 'vuedraggable', href: 'https://www.npmjs.com/package/vuedraggable', title: '拖拽排序(v2)' },
        { name: 'sortablejs', href: 'https://www.npmjs.com/package/sortablejs', title: '拖拽排序' },
        { name: 'NProgress', href: 'https://www.npmjs.com/package/nprogress', title: '页面顶部加载进度条' },
        { name: '滑动极校验', href: 'https://gitee.com/monoplasty/vue-monoplasty-slide-verify', title: '' },
        { name: 'v-org-tree', href: 'https://github.com/lison16/v-org-tree', title: '组织结构树' },
        { name: 'mhtml-to-word', href: 'https://www.npmjs.com/package/mhtml-to-word', title: '将html模板字符串通过模板引擎转换并导出word文件' },
        { name: 'v-charts', href: 'https://github.com/ElemeFE/v-charts', title: '基于 Vue2.0 和 echarts 封装的 v-charts 图表组件' }
      ]
    },
    {
      second_tit: '编辑器',
      second_child: [
        { name: 'wangEditor', href: 'https://github.com/wangeditor-team/wangEditor', title: '' },
        { name: 'UEditor', href: 'http://fex.baidu.com/ueditor', title: '' },
        { name: 'tinymce', href: 'https://github.com/tinymce/tinymce', title: '' },
        { name: 'ckeditor', href: 'https://github.com/galetahub/ckeditor', title: '老牌富文本' },
        { name: 'squire', href: 'https://github.com/neilj/Squire', title: '轻量富文本' },
        { name: 'slate', href: 'https://github.com/ianstormtaylor/slate', title: '完全可定制富文本' },
        { name: 'medium-editor', href: 'https://github.com/yabwe/medium-editor', title: '' },
        { name: 'quill', href: 'https://github.com/quilljs/quill', title: '对图片的各种操作不友善' }
      ]
    },
    {
      second_tit: '图表',
      second_child: [
        { name: 'ECharts', href: 'https://echarts.apache.org/zh/index.html', title: '' },
        { name: 'Antv', href: 'http://antv.antfin.com/zh-cn/index.html', title: '蚂蚁数据可视化' },
        { name: 'FusionCharts', href: 'https://www.fusioncharts.com/', title: '' },
        { name: '图扑软件', href: 'https://www.hightopo.com/index.html', title: '' }
      ]
    },
    {
      second_tit: '地图',
      second_child: [
        { name: '百度地图', href: 'https://lbsyun.baidu.com/', title: '' },
        { name: '高德地图', href: 'https://lbs.amap.com/', title: '' },
        { name: '腾讯地图', href: 'https://lbs.qq.com/', title: '' }
      ]
    },
    {
      second_tit: '播放器',
      second_child: [
        { name: 'ckplayer', href: 'http://www.ckplayer.com', title: '' },
        { name: 'DPlayer', href: 'https://github.com/MoePlayer/DPlayer', title: '' },
        { name: 'chimee-player', href: 'https://www.npmjs.com/package/chimee-player', title: '' },
        { name: 'Aliplayer', href: 'https://helpcdn.aliyun.com/document_detail/57314.html', title: '' },
        { name: 'TCPlayer', href: 'https://cloud.tencent.com/document/product/266/58772', title: '' },
        { name: 'H5同层播放器接入规范', href: 'https://x5.tencent.com/docs/video.html', title: '' },
        { name: 'super-tcplayer', href: 'https://www.npmjs.com/package/super-tcplayer', title: '基于腾讯web超级播放器封装的vue播放器组件' }
      ]
    },
    {
      second_tit: '动画',
      second_child: [
        { name: 'Three.js', href: 'https://threejs.org', title: '3Djs库，canvas、svg、css3d、webgl' },
        { name: 'Anime.js', href: 'https://animejs.com', title: '轻量级,强大API' },
        { name: 'GreenSock', href: 'https://www.tweenmax.com.cn', title: '' },
        { name: 'Mo.js', href: 'https://mojs.github.io', title: '模块化,流畅' },
        { name: 'particlesJS', href: 'https://github.com/VincentGarreau/particles.js', title: '粒子背景：粒子的密度、颜色、不透明度、形状和大小' }
      ]
    },
    {
      second_tit: '其他',
      second_child: [
        { name: 'iDangero', href: 'https://idangero.us', title: '轮播' },
        { name: 'swiper', href: 'https://www.swiper.com.cn/', title: '轮播' },
        { name: 'superslide2/TouchSlide', href: 'http://www.superslide2.com/index.html', title: '网站大部分特效展示' },
        { name: 'picker', href: 'http://ustbhuangyi.github.io/picker', title: 'ios风格选择器' },
        { name: 'masonry', href: 'https://masonry.desandro.com', title: '瀑布流' },
        { name: 'momentjs', href: 'http://momentjs.cn', title: '日期时间处理类库' },
        { name: 'html2canvas', href: 'http://html2canvas.hertzen.com', title: '对网页html屏幕截图,用于生成图片' },
        { name: 'Typed.js', href: 'https://www.typeitjs.com', title: '打字机效果' },
        { name: 'AlloyFinger', href: 'http://alloyteam.github.io/AlloyFinger', title: '手势插件' }
      ]
    }
  ]
}

var data_css = {
  super_tit: 'Css',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'CSS菜鸟参考手册', href: 'https://www.runoob.com/cssref/css-reference.html', title: '' },
        { name: 'CSS3菜鸟参考教程', href: 'https://www.runoob.com/css3/css3-tutorial.html', title: '' },
        { name: 'sass文档', href: 'https://sass.bootcss.com', title: '' },
        { name: 'less文档', href: 'https://less.bootcss.com', title: '' }
      ]
    },
    {
      second_tit: 'css库',
      second_child: [
        { name: 'loading动画', href: 'https://loading.io', title: '' },
        { name: 'Animate.css', href: 'https://www.dowebok.com/demo/2014/98/', title: '' },
        { name: 'Hover.css', href: 'http://ianlunn.github.io/Hover', title: '按钮悬浮效果' },
        { name: '数学公式css', href: 'https://github.com/parsegon/math-css', title: 'math-css' }
      ]
    },
    {
      second_tit: 'css工具',
      second_child: [
        { name: 'css3样式在线兼容', href: 'https://autoprefixer.github.io', title: '' },
        { name: 'CSS3动画生成器', href: 'https://www.w3cways.com/css3-animation-tool', title: '' },
        { name: 'CSS3 Developer', href: 'http://css3developer.com/', title: 'css3样式生成器' },
        { name: 'css在线三角形生成器', href: 'https://www.jiangweishan.com/tool/sanjx/index.html', title: '' },
        { name: 'CSS3 clip-path生成器', href: 'https://www.html.cn/tool/css-clip-path', title: '' }
      ]
    }
  ]
}

var data_other = {
  super_tit: '其他',
  super_child: [
    {
      second_tit: '生活日常',
      second_child: [
        { name: '合肥开发公司避坑论坛', href: 'https://bbs.diaozong.cn/p.html', title: '' },
        { name: '火车票', href: 'https://www.bypass.cn', title: '' },
      ]
    },
    {
      second_tit: 'IT外包',
      second_child: [
        { name: '程序员客栈', href: 'https://www.proginn.com', title: '' },
        { name: '开源众包', href: 'https://zb.oschina.net', title: '' },
        { name: 'fiverr', href: 'https://www.fiverr.com', title: '' },
        { name: 'upwork', href: 'https://www.upwork.com', title: '' },
        { name: '任务栈', href: 'http://www.renwuzhan.top', title: '' }
      ]
    },
    {
      second_tit: '电脑维护',
      second_child: [
        { name: '电脑店', href: 'https://u.diannaodian.com', title: '重装系统' },
        { name: '大白菜', href: 'http://dbc.trmfb.com/win10.html', title: '重装系统' },
        { name: '小熊', href: 'https://www.xiaoxiongxitong.com', title: '小熊一键重装系统' }
      ]
    }
  ]
}

var arr_data = [
  data_daily,
  data_vue,
  data_React,
  data_Angular,
  data_Crossplatform,
  data_jquery,
  data_javascript,
  data_css,
  data_Node,
  data_Redis,
  data_Nginx,
  data_Docker,
  data_WeChat,
  data_Alipay,
  data_Tiktok,
  data_jsplug,
  data_tool,
  data_study,
  data_other
]