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
    }
  ]
}

var data_vue = {
  super_tit: 'Vue',
  super_child: [
    {
      second_tit: '工具',
      second_child: [
        { name: 'xxx', href: '', title: '' }
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
      second_tit: 'pc组件库',
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
        { name: 'Bootstrap', href: 'https://www.bootcss.com', title: '' },
        { name: 'Bootstrap IE6 兼容库', href: 'http://www.bootcss.com/p/bsie', title: '' },
        { name: 'LuLu', href: 'https://www.zhangxinxu.com/sp/lulu/mockup/content/about/design.php', title: 'pc端' },
        { name: 'MZUI', href: 'http://zui.sexy/m/index.html', title: 'mobile端' },
        { name: 'layui文档', href: 'https://www.layuion.com', title: '' },
        { name: 'layui仓库', href: 'https://gitee.com/layui', title: '' },
        { name: 'layui教程', href: 'https://www.php.cn/code/30323.html', title: '' },
        { name: '', href: '', title: '' }
      ]
    },
    {
      second_tit: '管理框架',
      second_child: [
        { name: 'H+主题框架', href: 'http://618cj.com/ys/547/layouts.html', title: '' },
        { name: 'AdminLTE', href: 'https://github.com/almasaeed2010/AdminLTE', title: '基于 Bootstrap 3.x 的免费的后台 UI 框架' },
        { name: 'layuiAdmin', href: 'http://x.xuebingsi.com/index/index/more.html', title: '' },
        { name: '', href: '', title: '' }
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
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
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
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_tool = {
  super_tit: '辅助工具',
  super_child: [
    {
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_study = {
  super_tit: '学习网站',
  super_child: [
    {
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_javascript = {
  super_tit: 'Javascript',
  super_child: [
    {
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_css = {
  super_tit: 'Css',
  super_child: [
    {
      second_tit: '搜索',
      second_child: [
        { name: '', href: '', title: '' }
      ]
    }
  ]
}

var data_other = {
  super_tit: '其他',
  super_child: [
    {
      second_tit: '招聘',
      second_child: [
        { name: '', href: '', title: '' }
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
  data_tool,
  data_study,
  data_other
]