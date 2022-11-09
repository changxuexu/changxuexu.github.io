var data_daily = {
  super_tit: '日常',
  super_child: [
    {
      second_tit: '搜索/翻译',
      second_child: [
        { name: '百度搜索', href: 'https://www.baidu.com', title: '' },
        { name: '头条搜索', href: 'https://www.toutiao.com', title: '' },
        { name: '搜猫搜索', href: 'https://www.soumao.cc', title: '' },
        { name: '谷歌搜索', href: 'https://www.google.com', title: '' },
        { name: '开发百度搜索', href: 'https://kaifa.baidu.com', title: '' },
        { name: 'libraryMirror', href: 'https://jia110.github.io', href_spare1: 'https://www.library.ac.cn', title: '' },
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
        { name: 'Stack Overflow', href: 'https://stackoverflow.com', title: '' },
        { name: 'segmentfault', href: 'https://segmentfault.com/', title: '' },
        { name: 'node_modules包大小查询', href: 'https://bundlephobia.com', title: '查询node_modules安装包大小' }
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
        { name: '菜鸟工具', href: 'https://c.runoob.com/', title: '' },
        { name: '程序猿在线工具', href: 'http://www.ofmonkey.com/format/css', title: '' },
        { name: '前端导航', href: 'http://uyi2.com/bus', title: '' },
        { name: '开发综合文档', href: 'https://devdocs.io', title: '' },
        { name: '开发语言学习资源', href: 'https://learn-anything.xyz/learn-anything', title: '以思维导图形式提供各种学习资源' },
        { name: 'roadmap.sh', href: 'https://roadmap.sh/', title: '给初学开发者提供参考的语言学习路径与资料' },
        { name: 'Chrome开发者工具中文文档', href: 'https://www.html.cn/doc/chrome-devtools', title: '' },
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
        { name: 'Vue2到Vue3项目升级指南', href: 'https://gogocode.io/zh/docs/vue/vue2-to-vue3', title: '' },
        { name: 'petite-vue', href: 'https://github.com/vuejs/petite-vue', title: '非构建工程化,在页面直接使用' },
        { name: 'NuxtJS', href: 'https://v3.nuxtjs.org', title: '' },
        { name: 'SSR', href: 'http://doc.ssr-fc.com/', title: '面向 Serverless，同时支持 React，Vue2，Vue3的 SSR 框架' },
        { name: 'VueUse', href: 'https://vueuse.org', title: '工具型组合式函数集合' },
        { name: 'Gridsome', href: 'https://gridsome.org', title: '构建默认快速的静态生成网站' },
        { name: 'VitePress', href: 'https://vitepress.vuejs.org', title: '极简静态网站生成器Vite' },
        { name: 'VuePress', href: 'https://www.vuepress.cn', title: '极简静态网站生成器webpack' }
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
        { name: 'TDesign', href: 'https://tdesign.tencent.com/', title: 'Vue3 桌面端/移动端/小程序' },
        { name: 'Muse UI', href: 'https://muse-ui.org/#/zh-CN', title: '' },
        { name: 'we-vue', href: 'https://github.com/tianyong90/we-vue', title: '是一套基于 Vue.js 的移动关组件库，结合 weui 官方样式库，封装了一系列组件，适合微信公众号等移动端开发' },
        { name: 'Mand Mobile', href: 'https://didi.github.io/mand-mobile/#/zh-CN/home', title: '滴滴研发的面向金融场景的 UI 组件库，支持 Vue3' },
        { name: 'Varlet', href: 'https://varlet.gitee.io/varlet-ui', title: 'Vue3 开发的 Material 风格移动端组件库，由社区的小伙伴开发和维护' },
      ]
    },
    {
      second_tit: '组件库P',
      second_child: [
        { name: 'Element2', href: 'https://element.eleme.cn/#/zh-CN/component/installation', title: '' },
        { name: 'Element3', href: 'https://element-plus.gitee.io/zh-CN/', title: '' },
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
        { name: 'fantastic-admin', href: 'https://hooray.gitee.io/fantastic-admin/', title: 'Vite + Vue3 + Vue-router + Pinia + Element Plus' },
        { name: 'BuildAdmin', href: 'https://wonderful-code.gitee.io/', title: 'Vue3+Element Plus' },
        { name: 'vue-element-admin', href: 'https://panjiachen.github.io/vue-element-admin-site/zh', title: '' },
        { name: 'iview-admin', href: 'https://github.com/iview/iview-admin', title: '' },
        { name: 'iview-admin文档', href: 'https://lison16.github.io/iview-admin-doc', title: '' },
        { name: 'xboot', href: 'http://xboot.exrick.cn/home', title: '' },
        { name: 'Vue Bulma', href: 'https://github.com/vue-bulma/vue-admin', title: '基于Vue和Bulma的控制面板' },
        { name: 'likeadmin', href: 'https://www.likeadmin.cn', title: '基于Vue3、elementPlus' } 
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
        { name: 'React菜鸟教程', href: 'https://www.runoob.com/react/react-tutorial.html', title: '' },
        { name: 'Preact', href: 'https://preactjs.com/', title: 'React 的轻量级替代方案，体积仅有 3kB，并且拥有与 React 相同的 API' }
      ]
    },
    {
      second_tit: '应用框架',
      second_child: [
        { name: 'Next.js', href: 'https://www.nextjs.cn', title: '轻量级的 React 服务端渲染应用框架' },
        { name: 'Remix', href: 'https://remix.run', title: '服务端渲染应用框架' },
        { name: 'Gatsby', href: 'https://www.gatsbyjs.cn', title: '预渲染页面' }
      ]
    },
    {
      second_tit: '组件库P',
      second_child: [
        { name: 'Ant Design', href: 'https://ant.design/docs/react/introduce-cn', title: '' },
        { name: 'Ant Design Mobile', href: 'https://antd-mobile.gitee.io/zh', title: '' },
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

var data_svelte = {
  super_tit: 'Svelte',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'Svelte文档', href: 'https://www.sveltejs.cn/', title: '传统框架如 React 和 Vue 在浏览器中需要做大量的工作，而 Svelte 在 构建/编译阶段 将你的应用程序转换为理想的 JavaScript 应用，而不是在 运行阶段 解释应用程序的代码' },
        { name: '初识Svelte', href: 'https://www.cnblogs.com/sucls/articles/16094552.html', title: '' },
      ]
    }
  ]
}

var data_ember = {
  super_tit: 'Ember',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'Ember文档', href: 'https://emberjs.com/', title: 'MVC(模型-视图-控制器)架构模式' },
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
        { name: 'jquery官网', href: 'https://jquery.com', title: '' },
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
        { name: 'jquery之家', href: 'http://www.htmleaf.com', title: '' }
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
        { name: 'fastify', href: 'https://www.fastify.io', title: '' },
        { name: 'NestJs', href: 'https://nestjs.com', title: '用于构建高效、可靠和可扩展的服务器端应用程序的渐进式 Node.js 框架' },
      ]
    },
    {
      second_tit: '其他',
      second_child: [
        { name: 'jwt', href: 'https://jwt.io', title: 'json网络令牌,进行解码,显示有效负载' }
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
        { name: 'redis源码', href: 'https://github.com/redis/redis', title: '' }
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

var data_Linux = {
  super_tit: 'Linux',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: '命令手册', href: 'https://www.linuxcool.com', title: '' },
        { name: '菜鸟教程', href: 'https://www.runoob.com/linux/linux-tutorial.html', title: '' },
        { name: '在线入门教程', href: 'http://c.biancheng.net/linux_tutorial', title: '' },
        { name: '慕课网视频教程', href: 'https://www.imooc.com/learn/175', title: '' },
        { name: '网易云视频教程', href: 'https://study.163.com/course/introduction.htm?courseId=232007#/courseDetail?tab=1', title: '' }
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
        { name: '微信公众平台接口调试工具', href: 'https://mp.weixin.qq.com/debug', title: '' },
        { name: '腾讯开放平台', href: 'https://open.tencent.com', title: '' }
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
        { name: '抖音开放平台', href: 'https://open.douyin.com/platform', title: '' }
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
        { name: 'Ionic', href: 'https://tauri.app/zh/', title: '使用Web技术构建高性能、高质量的移动和桌面应用程序，并集成了Angular、React和Vue等流行框架' },
        { name: 'Quasar', href: 'https://quasar.dev/', title: '用同一套代码同时开发桌面端和移动端应用' },
        { name: 'Chameleon 变色龙', href: 'https://cml.js.org/', title: '滴滴开放Native端/小程序/快应用' },
        { name: 'Hippy', href: 'https://hippyjs.org/', title: '腾讯开放支持iOS、Android、Web,支持react/vue' },
        { name: 'Electron', href: 'https://www.electronjs.org/', title: '使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序' },
        { name: 'electron-vue', href: 'https://simulatedgreg.gitbooks.io/electron-vue/content/cn', title: '' },
        { name: 'Tauri', href: 'https://tauri.app/zh/', title: '构建桌面应用' }
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
        { name: '墨刀', href: 'https://modao.cc', title: '' },
        { name: 'chainco', href: 'http://www.chainco.cn', title: 'UI设计交互演示' },
        { name: '犸良', href: 'https://design.alipay.com/emotion', title: '素材动效制作' },
        { name: '鹿班', href: 'https://luban.taobao.com', title: '海报/商品图文/直播间背景' }
      ]
    },
    {
      second_tit: '思维导图',
      second_child: [
        { name: 'GitMind', href: 'https://gitmind.cn', title: '' },
        { name: 'ProcessOn', href: 'https://www.processon.com', title: '' }
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
      second_tit: 'svg优化器',
      second_child: [
        { name: 'SVGOMG', href: 'https://jakearchibald.github.io/svgomg', title: '' },
        { name: 'SVG Optimizers', href: 'https://online-converting.com/svg-optimizer', title: '' },
        { name: 'Snap.svg', href: 'http://snapsvg.io', title: '' },
        { name: 'SVG Path Visualizer', href: 'https://svg-path-visualizer.netlify.app', title: '通过输入 SVG 路径数据来快速直观地查看 SVG 图像,方便了解如何创建基本的 SVG 形状，如直线、曲线、三角形...' }
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
    },
    {
      second_tit: '测试',
      second_child: [
        { name: '测试教程', href: 'http://lemon.ke.qq.com/#category=15380424295395507&tab=1', title: '' },
        { name: 'LambdaTest', href: 'https://www.lambdatest.com/', title: '跨浏览器测试平台：提供不同的浏览器、操作系统和设备去测试你的应用' },
        { name: 'Jest', href: 'https://www.jestjs.cn', title: 'JavaScript测试框架,可使用在Babel、TypeScript、Node、React、Angular、Vue等等!' },
        { name: 'mocha', href: 'https://mochajs.org/', github_href: 'https://github.com/mochajs/mocha', title: 'JavaScript 测试框架，运行在Node.js和浏览器中，让异步测试变得简单有趣' },
        { name: 'Vitest', href: 'https://cn.vitest.dev/', title: '由 Vite 提供支持的极速单元测试框架' }
      ]
    },
    {
      second_tit: '其他',
      second_child: [
        { name: '转转大师', href: 'https://pdftoword.55.la/', title: '办公软件转换' },
        { name: '蛙蛙工具', href: 'https://www.iamwawa.cn', title: '' },
        { name: 'VSCode插件开发教程', href: 'https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html', title: '' },
        { name: 'vscode官网', href: 'https://code.visualstudio.com/', title: '' },
        { name: 'Quicker', href: 'http://getquicker.net/', title: '快捷启动软件,内置的动作指令，完全可以替代大部分的常用软件' }
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
        { name: '技术胖', href: 'https://jspang.com', title: '' },
        { name: '慕课网', href: 'https://www.imooc.com', title: '' },
        { name: '腾讯课堂', href: 'https://ke.qq.com', title: '' },
        { name: '腾讯产业互联网学堂', href: 'https://cloud.tencent.com/edu', title: '' },
        { name: '开课吧', href: 'https://www.kaikeba.com', title: '' },
        { name: '网易云课堂', href: 'https://study.163.com', title: '' },
        { name: '尚硅谷', href: 'https://www.gulixueyuan.com/', title: '' },
        { name: 'php中文网', href: 'https://www.php.cn/', title: '' },
        { name: 'html中文网', href: 'https://www.html.cn', title: '' }
      ]
    },
    {
      second_tit: '团队',
      second_child: [
        { name: '饿了么', href: 'https://zhuanlan.zhihu.com/ElemeFE', title: '' },
        { name: '有赞技术团队', href: 'https://tech.youzan.com', title: '' },
        { name: '腾讯Alloyteam', href: 'http://www.alloyteam.com', title: '' },
        { name: '腾讯IMWeb', href: 'https://www.imweb.io', title: '' },
        { name: '百度FEX', href: 'http://fex.baidu.com', title: '' },
        { name: '百度EFE', href: 'https://efe.baidu.com', title: '' }
      ]
    },
    {
      second_tit: '博客',
      second_child: [
        { name: 'daily.dev', href: 'https://docs.daily.dev/', title: '汇聚各类平台的优秀技术文章，可安装浏览器插件便于阅读' },
        { name: '掘金', href: 'https://juejin.im', title: '' },
        { name: '慕课网手记', href: 'https://www.imooc.com/article', title: '' },
        { name: '廖雪峰', href: 'https://www.liaoxuefeng.com', title: '' },
        { name: '张鑫旭', href: 'https://www.zhangxinxu.com/', title: '' },
        { name: 'w3cplus', href: 'https://www.w3cplus.com', title: '' },
        { name: '印记中文', href: 'https://docschina.org/', title: '' },
        { name: 'oschina开源软件', href: 'https://www.oschina.net/project', title: '' }
      ]
    },
    {
      second_tit: '个人',
      second_child: [
        { name: '尤雨溪', href: 'https://github.com/yyx990803', title: '' },
        { name: 'Nicholas C.Zakas', href: 'https://humanwhocodes.com', title: 'ESLint开源项目' },
        { name: 'Addy Osmani', href: 'https://github.com/addyosmani', title: '' },
        { name: 'Lea Verou', href: 'https://github.com/LeaVerou', title: '' },
        { name: 'Axel Rauschmayer', href: 'https://2ality.com/index.html', title: '' },
        { name: 'Ben Alman', href: 'https://github.com/cowboy', title: 'http://benalman.com' },
        { name: 'Haorooms', href: 'https://www.haorooms.com', title: '' },
        { name: '龙恩0707', href: 'https://www.cnblogs.com/tugenhua0707/', title: '' },
        { name: 'alili前端大爆炸', href: 'https://alili.tech', title: '' },
        { name: 'ifrontend', href: 'https://www.ifrontend.net/index.php', title: '' },
        { name: 'Shymean', href: 'http://shymean.com', title: '' },
        { name: 'imqianduan', href: 'https://www.imqianduan.com', title: '' },
        { name: '0x98k’s', href: 'https://0x98k.com', title: '' },
        { name: '爱码网', href: 'https://www.likecs.com', title: '' },
        { name: '芋道源码', href: 'http://www.iocoder.cn', title: '' },
        { name: 'w3cplus', href: 'http://caibaojian.com/w3cplus', title: '' },
        { name: 'fly63', href: 'http://www.fly63.com', title: '' }
      ]
    },
    {
      second_tit: '面试',
      second_child: [
        { name: '木易杨前端进阶', href: 'https://muyiy.cn', title: '' },
        { name: 'Daily-Interview-Question', href: 'https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md', title: '' },
        { name: '合格前端系列', href: 'https://zhuanlan.zhihu.com/p/32911022', title: '' },
        { name: '饥人谷 2019', href: 'https://zhuanlan.zhihu.com/p/59707202', title: '' },
        { name: 'Interview Book', href: 'https://mountain-buzhou.github.io/Interview-Book/guide', title: '' }
      ]
    },
    {
      second_tit: '运维',
      second_child: [
        { name: '运维派', href: 'http://www.yunweipai.com', title: '' },
        { name: '阿汤运维', href: 'https://www.amd5.cn', title: '' }
      ]
    },
    {
      second_tit: '源码',
      second_child: [
        { name: 'tricks', href: 'https://www.html5tricks.com', title: '' },
        { name: '源码世界', href: 'https://www.ym4j.com', title: 'h5、网页游戏、vue等' },
        { name: 'F2EX', href: 'http://f2ex.cn', title: '' }
      ]
    },
    {
      second_tit: '业务参考',
      second_child: [
        { name: '意象商城系统', href: 'https://gitee.com/guchengwuyue', title: '' },
        { name: 'likeshop', href: 'https://www.likeshop.cn', title: '' },
        { name: '鲁班H5', href: 'https://github.com/ly525/luban-h5', title: '类似易企秀Maka百度 H5等平台,通过拖拽快速生成页面的平台' }
      ]
    }
  ]
}

var data_javascript = {
  super_tit: 'Javascript',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'es6入门教程', href: 'http://es6.ruanyifeng.com', title: '' },
        { name: 'es5入门手册', href: 'https://wangdoc.com', title: '' },
        { name: 'js知识体系', href: 'https://github.com/yzsunlei/awesome-web-tutorial', title: '' }
      ]
    },
    {
      second_tit: '工具函数',
      second_child: [
        { name: 'Lodash', href: 'https://www.lodashjs.com', title: 'javascript工具库' },
        { name: 'babel', href: 'https://www.babeljs.cn', title: 'js语法兼容降级处理' },
        { name: 'JavaScript代码片段', href: 'https://www.html.cn/30-seconds-of-code', title: '' }
      ]
    },
    {
      second_tit: '构建工具',
      second_child: [
        { name: 'Webpack', href: 'https://webpack.docschina.org',href_spare1:'https://www.webpackjs.com/concepts', title: '' },
        { name: 'gulpjs', href: 'https://www.gulpjs.com.cn', title: '' },
      ]
    }
  ]
}

var data_typeScript = {
  super_tit: 'TypeScript',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'TypeScript官网', href: 'https://www.typescriptlang.org/docs/handbook/intro.html', title: '' }
      ]
    },
  ]
}

var data_jsplug = {
  super_tit: 'Js插件库',
  super_child: [
    {
      second_tit: 'Vue常用',
      second_child: [
        { name: 'Axios', href: 'https://www.kancloud.cn/yunye/axios/234845', title: '' },
        { name: 'BetterScroll', href: 'https://better-scroll.github.io/docs/zh-CN/guide', title: '类似于Gridster的栅格布局系统,可拖拽、可调整大小' },
        { name: 'vuedraggable', href: 'https://www.npmjs.com/package/vuedraggable', title: '拖拽排序(v2)' },
        { name: 'sortablejs', href: 'https://www.npmjs.com/package/sortablejs', title: '拖拽排序' },
        { name: 'NProgress', href: 'https://www.npmjs.com/package/nprogress', title: '页面顶部加载进度条' },
        { name: 'mescroll.js', href: 'https://github.com/mescroll/mescroll', title: 'h5端运行的下拉刷新和上拉加载插件,主要用于列表分页、刷新等场景' },
        { name: '滑动极校验', href: 'https://gitee.com/monoplasty/vue-monoplasty-slide-verify', title: '' },
        { name: 'v-org-tree', href: 'https://github.com/lison16/v-org-tree', title: '组织结构树' },
        { name: 'mhtml-to-word', href: 'https://www.npmjs.com/package/mhtml-to-word', title: '将html模板字符串通过模板引擎转换并导出word文件' },
        { name: 'Vue Grid Layout', href: 'https://jbaysolutions.github.io/vue-grid-layout/zh/', title: '' },
        { name: 'vue-easytable', href: 'https://github.com/Happy-Coding-Clans/vue-easytable', title: '表格组件：虚拟滚动、列固定、标题固定、标题分组、过滤器、排序、单元格省略号、行扩展、行复选框等' },
        { name: 'FormKit', href: 'https://formkit.com/', title: 'Vue 表单的一站式解决方案:包括您需要的一切——标签、帮助文本、主题支持、验证、从 JSON 生成表单、可访问性、国际化等等！' },
        { name: 'vee-validate', href: 'https://github.com/logaretm/vee-validate', title: '表单验证库:允许验证输入并以熟悉的声明样式或使用组合函数构建更好的表单UI' },
        { name: 'vuex-persist', href: 'https://www.npmjs.com/package/vuex-persist', title: '使vuex状态持久存储,解决刷新丢失问题' },
        { name: 'vue-meta', href: 'https://www.npmjs.com/package/vue-meta', title: '使用 SSR 支持管理 Vue.js 组件中的 HTML 元数据' },
        { name: 'element-china-area-data', href: 'https://www.npmjs.com/package/element-china-area-data', title: '基于element UI的省市区级联数据' },
        { name: 'v-charts', href: 'https://github.com/ElemeFE/v-charts', title: '基于 Vue2.0 和 echarts 封装的 v-charts 图表组件' },
        { name: 'Trois', href: 'https://github.com/troisjs/trois', title: '基于ThreeJS的Vue3可视化库创建3D效果' },
        { name: 'Vue Dropzone', href: 'https://rowanwins.github.io/vue-dropzone/docs/dist/#/demo', title: '拖放文件上传库' },
        { name: 'VueJS DatePicker', href: 'https://github.com/charliekassel/vuejs-datepicker', title: '' },
        { name: 'Vue Switches', href: 'https://github.com/drewjbartlett/vue-switches', title: '' },
        { name: 'Vue Color', href: 'https://github.com/xiaokaike/vue-color', title: '选择颜色添加' },
        { name: 'vue-circle-slider', href: 'https://github.com/devstark-com/vue-circle-slider', title: '线性滑块输入：支持触摸控制，允许你设置最大值/最小值，甚至你还可以控制滑块的步长' },
        { name: 'Vue Phone Number', href: 'https://github.com/LouisMazel/vue-phone-number-input', title: '电话号码：有效的国家/地区代码、主题和颜色、电话号码格式' },
        { name: '二维码vue', href: 'https://link-to-qr.com', title: '' }
      ]
    },
    {
      second_tit: '编辑器',
      second_child: [
        { name: 'wangEditor', href: 'https://github.com/wangeditor-team/wangEditor', title: '' },
        { name: 'CKEditor5', href: 'https://github.com/ckeditor', title: '功能强大，具有 MVC 架构、自定义数据模型和虚拟 DOM' },
        { name: 'UEditor', href: 'http://fex.baidu.com/ueditor', title: '' },
        { name: 'tinymce', href: 'https://github.com/tinymce/tinymce', title: '' },
        { name: 'ckeditor', href: 'https://github.com/galetahub/ckeditor', title: '老牌富文本' },
        { name: 'squire', href: 'https://github.com/neilj/Squire', title: '轻量富文本' },
        { name: 'slate', href: 'https://github.com/ianstormtaylor/slate', title: '完全可定制富文本' },
        { name: 'medium-editor', href: 'https://github.com/yabwe/medium-editor', title: '' },
        { name: 'quill', href: 'https://github.com/quilljs/quill', title: '对图片的各种操作不友善' },
        { name: 'tui.editor', href: 'https://github.com/nhn/tui.editor', title: '在网页中编辑 Markdown 文档的文本或所见即所得' }
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
        { name: 'super-tcplayer', href: 'https://www.npmjs.com/package/super-tcplayer', title: '基于腾讯web超级播放器封装的vue播放器组件' },
        { name: 'flv.js', href: 'https://github.com/Bilibili/flv.js', title: '用纯JavaScript编写的HTML5 Flash视频（FLV）播放器，无Flash' }
      ]
    },
    {
      second_tit: '动画',
      second_child: [
        { name: 'vue-kinesis', href: 'https://www.npmjs.com/package/vue-kinesis', title: '支持使用的 Vue.js 组件来创建交互式动画，其支持Vue3' },
        { name: 'Popmotion', href: 'https://popmotion.io/', href_spare1: 'https://jellykaiser.github.io/popmotion.doc/', title: '原生dom支持:CSS、SVG路径、dom属性；支持数字、颜色和复杂字符串的关键帧、弹簧和惯性动画' },
        { name: 'Three.js', href: 'https://threejs.org', title: '3Djs库，canvas、svg、css3d、webgl' },
        { name: 'Anime.js', href: 'https://animejs.com', title: '轻量级,强大API' },
        { name: 'Tweenmax', href: 'https://www.tweenmax.com.cn', title: '' },
        { name: 'greensock', href: 'https://greensock.com', git_href: 'https://www.npmjs.com/package/gsap', title: '对html元素进行动画处理，用于创建高性能、零依赖性、跨游览器动画' },
        { name: 'Mo.js', href: 'https://mojs.github.io', title: '模块化,流畅' },
        { name: 'particlesJS', href: 'https://github.com/VincentGarreau/particles.js', title: '粒子背景：粒子的密度、颜色、不透明度、形状和大小' },
        { name: 'Velocity.js', href: 'https://www.npmjs.com/package/velocity-animate', title: '' },
        { name: 'Kute.js', href: 'https://github.com/thednp/kute.js', title: '' },
        { name: 'Lottie', href: 'https://github.com/airbnb/lottie-web', title: 'Lottie for Web, Android, iOS, React Native, and Windows' }
      ]
    },
    {
      second_tit: 'svg动画',
      second_child: [
        { name: 'SVGA动画', href: 'http://svga.io/index.html', title: '跨平台的开源动画方案' },
        { name: 'Vivus.js', href: 'https://github.com/maxwellito/vivus', title: '在 SVG 上绘制动画' }
      ]
    },
    {
      second_tit: '滚动',
      second_child: [
        { name: 'Pagepiling.js', href: 'https://github.com/alvarotrigo/pagePiling.js', title: '全屏一页滚动' },
        { name: 'One page scroll', href: 'https://github.com/peachananr/onepage-scroll', title: '全屏一页滚动' },
        { name: 'fullPage.js', href: 'https://alvarotrigo.com/fullPage/zh/', title: '全屏滚动' },
        { name: 'Multiscroll.js', href: 'https://github.com/alvarotrigo/multiscroll.js', title: '两列垂直滚动面板创建拆分页面,反向滚动' },
        { name: 'Animate on scroll', href: 'https://github.com/michalsnik/aos', title: '滚动时页面元素展现动画' },
        { name: 'Wow.js', href: 'https://github.com/graingert/WOW', title: '滚动时页面元素展现动画' },
        { name: 'parallax.js', 
          href: 'https://github.com/wagerfield/parallax', 
          href_spare1: 'https://github.com/wagerfield/parallax', 
          href_spare2: 'https://github.com/MobiusHorizons/parallax.js', 
          title: '视差引擎，对智能设备的方向作出反应。如果没有陀螺仪或运动检测硬件可用，则使用光标的位置' },
        { name: 'jInvertScroll', href: 'https://github.com/pixxelfactory/jInvertScroll', title: '视差滚动' },
        { name: 'simpleParallax.js', href: 'https://simpleparallax.com/', title: '为网站"图像"创建视差动画效果' },
        { name:'ScrollReveal' , href:'https://github.com/jlmakes/scrollreveal', title:'在元素滚动到视图中时制作它们的动画' }
      ]
    },
    {
      second_tit: '其他',
      second_child: [
        { name: 'iDangero', href: 'https://idangero.us', title: '轮播' },
        { name: 'swiper', href: 'https://www.swiper.com.cn/', title: '轮播' },
        { name: 'superslide2/TouchSlide', href: 'http://www.superslide2.com/index.html', title: '网站大部分特效展示' },
        { name: 'Keen-Slider', href: 'https://keen-slider.io', title: '创建触摸滑块组件' },
        { name: 'picker', href: 'http://ustbhuangyi.github.io/picker', title: 'ios风格选择器' },
        { name: 'masonry', href: 'https://masonry.desandro.com', title: '瀑布流' },
        { name: 'momentjs', href: 'http://momentjs.cn', title: '日期时间处理类库' },
        { name: 'Day.js', href: 'https://dayjs.gitee.io/zh-CN', title: '是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样' },
        { name: 'DHTMLX Scheduler', 
          href: 'https://www.npmjs.com/package/@ryancavanaugh/dhtmlxscheduler',
          href_spare:'https://dhtmlx.com', 
          href_spare:'https://www.jianshu.com/p/db8025f21ea5?utm_campaign=maleskine...&utm_content=note&utm_medium=seo_notes', 
          title: '日程安排控件，日历事件通过Ajax动态加载，支持通过拖放功能调整事件日期和时间，事件可以按天，周，月三个种视图显示' },
        { name: 'js-cookie', href: 'https://github.com/js-cookie/js-cookie', title: '轻量处理cookies的js API' },
        { name: 'html2canvas', href: 'http://html2canvas.hertzen.com', title: '对网页html屏幕截图,用于生成图片' },
        { name: 'Typeit.js', href: 'https://www.typeitjs.com', title: '打字机效果' },
        { name: 'Typed.js', href: 'https://github.com/mattboldt/typed.js', href_spare1: 'https://www.cnblogs.com/Aaxuan/p/14146418.html', title: '打字机效果' },
        { name: 'AlloyFinger', href: 'http://alloyteam.github.io/AlloyFinger', title: '手势插件' },
        { name: 'zTree', href: 'https://treejs.cn', title: '树插件' },
        { name: 'Shepherd', href: 'https://shepherdjs.dev/', title: '为应用创建新手引导' },
        { name: 'Vue Tour', href: 'https://www.npmjs.com/package/vue-tour', title: '与 Vue.js 一起使用的轻量级、简单且可定制的新手引导插件' },
        { name: 'favico.js', href: 'https://www.npmjs.com/package/favico.js', title: '动态 favicon' },
        { name: 'Keycode', href: 'https://www.npmjs.com/package/keycode-js', title: '获取键盘按键的 JavaScript keycode' },
        { name: 'Slideout.js', href: 'https://slideout.js.org/', title: '移动应用侧滑导航' },
        { name: 'highlight.js', href: 'https://highlightjs.org/', href_spare1: 'https://www.cnblogs.com/mmzuo-798/p/11325187.html', title: '自动检测代码类似编辑器内高亮展示' },
        { name: 'Dragdealer.js', href: 'http://skidding.github.io/dragdealer/', title: '炫酷拖拽' },
        { name: 'Barba.js', href: 'https://github.com/barbajs/barba', title: '在网站页面之间创建流畅流畅的过渡' },
        { name: 'Tippy.js', href: 'https://atomiks.github.io/tippyjs/', title: 'Tooltip提示插件' },
        { name: 'Nice select', href: 'https://jqueryniceselect.hernansartorio.com/', title: '' },
        { name: 'Typeahead.js', href: 'http://twitter.github.io/typeahead.js/', title: '自动匹配搜索' },
        { name: 'Handlebars.js', href: 'https://handlebarsjs.com/', title: 'js模板引擎,用于快速渲染数据' },
        { name: 'TwentyTwenty', href: 'https://zurb.com/playground/twentytwenty', title: '展示两个图像之间的视觉差异' },
        { name: 'Image Compare Viewer', href: 'https://image-compare-viewer.netlify.app', title: '展示两个图像之间的视觉差异' },
        { name: 'Krpano', href: 'https://github.com/ningbonb/nodeKrpano', title: '可方便快速的构建全景场景或全景视频' },
        { name: 'ztext.js', href: 'https://bennettfeely.com/ztext/', title: '为文本、 SVG、图像、表情符号等其他元素创建 3D 效果' },
        { name: 'Rough Notation', href: 'https://roughnotation.com', title: '为网页中的元素创建注释，具有许多漂亮的效果，例如下划线、框、圆圈、突出显示、括号...' },
        { name: 'Flip', href: 'https://pqina.nl/flip', title: '创建具有翻转效果的计数器,使用场景：创建活动计时器、促销活动或筹款活动' },
        { name: 'Print.js', href: 'https://printjs.crabbly.com', title: '直接在网页上打印文件，而无需重定向或使用嵌入' },
        { name: 'Docx.js', href: 'https://github.com/dolanmiu/docx', title: '通过JavaScript生成.docx文件的组件,可以同时被运用于Node端和浏览器端' },
        { name: 'Dinero.js', href: 'https://dinerojs.com', title: '使用JavaScript处理货币值的库' },
        { name: 'Tesseract.js', href: 'https://github.com/naptha/tesseract.js', title: 'OCR图片文字识别,在浏览器或使用NodeJS的服务器上运行' }
      ]
    },
    {
      second_tit: '数学库',
      second_child: [
        { name: 'MathJS', href: 'https://mathjs.org', title: 'JavaScript和Node.js的一个扩展数学库,可以灵活地计算和处理许多不同的数据类型，例如数字、大数、复数、分数、单位和矩阵' }
      ]
    },
    {
      second_tit: 'uni-app',
      second_child: [
        { name: 'mp-html', href: 'https://github.com/jin-yufeng/mp-html', href_spare:'', title: '一个强大的小程序富文本组件' },
        { name: 'parser-audio', href: 'https://github.com/woxiaoyao81/parser-audio', title: '完善jyf-parser的audio插件' },
        { name: 'uView', href: 'https://www.uviewui.com', href_spare:'', title: '全面兼容nvue的uni-app生态框架' }
      ]
    },
  ]
}

var data_css = {
  super_tit: 'Html/Css',
  super_child: [
    {
      second_tit: '文档资料',
      second_child: [
        { name: 'CSS菜鸟参考手册', href: 'https://www.runoob.com/cssref/css-reference.html', title: '' },
        { name: 'CSS3菜鸟参考教程', href: 'https://www.runoob.com/css3/css3-tutorial.html', title: '' },
        { name: 'Flex教程', href: 'https://www.webhek.com/post/flexbox-playground.html', title: '' },
        { name: 'sass文档', href: 'https://sass.bootcss.com', title: '' },
        { name: 'less文档', href: 'https://less.bootcss.com', title: '' },
        { name: 'Css Values', href: 'https://cssvalues.com', title: '快速查找css属性的值' },
        { name: 'CSSReference.io', href: 'https://cssreference.io', title: '通过说明性示例可视化的方式展示css属性的作用' }
      ]
    },
    {
      second_tit: 'css库',
      second_child: [
        { name: 'loading动画', href: 'https://loading.io', title: '' },
        { name: 'Animate.css', href: 'https://animate.style/', spare_href: 'https://www.dowebok.com/demo/2014/98/', title: '' },
        { name: 'Magic Animations', href: 'https://github.com/miniMAC/magic', title: '' },
        { name: 'CSShake', href: 'https://github.com/elrumordelaluz/csshake', title: '' },
        { name: 'Hover.css', href: 'http://ianlunn.github.io/Hover', title: '按钮悬浮效果' },
        { name: '数学公式css', href: 'https://github.com/parsegon/math-css', title: 'math-css' }
      ]
    },
    {
      second_tit: 'css工具',
      second_child: [
        { name: 'CSS-Tricks', href: 'https://css-tricks.com', title: '学习各类css技巧，开发更加漂亮的web应用' },
        { name: 'CSS3动画生成器', href: 'https://www.w3cways.com/css3-animation-tool', title: '' },
        { name: 'Animista动画生成器', href: 'https://animista.net/', title: '' },
        { name: 'Transition.css', href: 'https://www.transition.style/', title: '' },
        { name: 'css3样式在线兼容', href: 'https://autoprefixer.github.io', title: '' },
        { name: 'CSS3 Developer', href: 'http://css3developer.com/', title: 'css3样式生成器' },
        { name: 'css在线三角形生成器', href: 'https://www.jiangweishan.com/tool/sanjx/index.html', title: '' },
        { name: 'CSS3 clip-path生成器', href: 'https://www.html.cn/tool/css-clip-path', title: '' },
        { name: 'ColorSpace', href: 'https://mycolor.space/', title: '调色板或css颜色渐变生成器' },
        { name: 'CSS Gradient', href: 'https://cssgradient.io/', title: '在线编辑css渐变色背景' },
        { name: 'Button Generator', href: 'https://cssbuttongenerator.com/', title: '按钮生成器' },
        { name: '边框阴影生成器', href: 'https://neumorphism.io/', title: '' },
        { name: 'Smooth Shadow', href: 'https://shadows.brumm.af/', title: '生成多个分层阴影，可以自定义颜色' },
        { name: 'fancy-border-radius', href: 'https://9elements.github.io/fancy-border-radius/', title: '个性化的圆角生成' },
        { name: '波浪效果生成器', href: 'https://getwaves.io/', title: '在线生成编辑波浪效果的SVG格式' },
        { name: 'CSS Grid Generator', href: 'https://cssgrid-generator.netlify.app/', title: '可以设置行和列的数字还有单位，生成一个 CSS Grid 网格布局' },
        { name: '零代码工具箱', href: 'https://www.lingdaima.com/', title: '' },
        { name: 'loading', href: 'https://cssload.net', title: 'CSS 3D加载效果' } 
      ]
    },
    {
      second_tit: '贝塞尔曲线',
      second_child: [
        { name: 'cubic-bezier', href: 'https://cubic-bezier.com', title: '' },
        { name: 'cubic-bezier', href: 'https://xuanfengge.com/easeing/ceaser', title: '' },
        { name: '缓存函数速查表', href: 'https://www.xuanfengge.com/easeing/easeing', title: '' }
      ]
    },
    {
      second_tit: 'html',
      second_child: [
        { name: 'head标签', href: 'https://github.com/joshbuchea/HEAD', title: 'head标签的所有内容列表' },
        { name: '50projects50days', href: 'https://github.com/bradtraversy/50projects50days', title: '入门练习案例' }
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
        { name: '电视家', href: 'https://www.tvapk.net/', title: '' },
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
    },
    {
      second_tit: '在线书籍',
      second_child: [
        { name: '微信读书', href: 'https://weread.qq.com/web/category/700002', title: '' },
        { name: '清华大学开放书籍', href: 'https://lib-nuanxin.wqxuetang.com/#/', title: '' },
        { name: '清北浙大计算机教程', href: 'https://github.com/lib-pku/libpku', title: '' },
        { name: '国家中小学网络云平台', href: 'https://ykt.eduyun.cn', title: '' },
        { name: '国家教育资源公共服务平台', href: 'https://www.eduyun.cn', title: '' },
        { name: '皖教云', href: 'http://www.ahedu.cn/#/', title: '' },
        { name: '国家终身教育平台', href: 'https://le.ouchn.cn', title: '' }
      ]
    }
  ]
}

var arr_data = [
  data_daily,
  data_vue,
  data_React,
  data_Angular,
  data_svelte,
  data_ember,
  data_Crossplatform,
  data_jquery,
  data_javascript,
  data_typeScript,
  data_css,
  data_Node,
  data_Redis,
  data_Nginx,
  data_Docker,
  data_Linux,
  data_WeChat,
  data_Alipay,
  data_Tiktok,
  data_jsplug,
  data_tool,
  data_study,
  data_other
]