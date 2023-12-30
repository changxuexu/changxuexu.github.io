node 8.9.1

适配总结(博客！！本文)
构建总结(配置5)

# 适配
```
基本概念：
    css像素=逻辑像素、设备像素、设备像素比= css像素/设备像素
    viewport、rem
      layout-viewport 实际UI
      visual-viewport 当前能看到的手机桌面
      https://www.jianshu.com/p/fb982ea8dce3

工作原理：
    利用viewport和设备像素比调整基准像素
    利用px2rem自动转换css单位

```

# 上线指导
```
(1)生产构建
  合并、抽取、压缩、调试；等操作基本利用构建工具配置来解决

  合并：style 、javascript

  抽取：样式要从javascript中抽取出来，生成一个单独的文件

  压缩：js、css都要压缩

  调试：开启sourceMap, 便于debug调试源码

(2)发布部署
  提交代码、部署、开启gzip压缩、更新CDN

```

# 构建工具
## 项目准备
```
1、创建目录

2、初始化
  npm init -> package.json

3、创建业务目录
  app -> js -> main,App.vue
  app -> css -> reset.scss
  app -> views -> index.html
```

## 创建配置文件
```
1、创建配置文件
  webpack.config.js

2、文件配置
  基础配置：
    entry(构建入口)
    module(配置loader，多个loader一起，从右到左解析)
    plugins(插件)
    output(构建输出)

  进阶配置：
    devServer(开启服务)
    
    resolve(配置模块如何解析,当在 ES2015 中调用 import 'lodash'，resolve 选项能够对 webpack 查找 'lodash' 的方式去做修改)

    devtool(开启sourceMap)

  技巧：配置细节查看文档(指南、配置)，边写边调试
```