{ name: '', href: '', title: '' }


Ant Design Mobile - 蚂蚁金服研发的移动端组件库，支持 React
Mand Mobile 	  - 滴滴研发的面向金融场景的 UI 组件库，支持 Vue3


框架

SvelteKit (Svelte)

Astro (Any)

Svelte
  https://www.sveltejs.cn/
  
  Svelte 是一种全新的构建用户界面的方法。传统框架如 React 和 Vue 在浏览器中需要做大量的工作，而 Svelte 将这些工作放到构建应用程序的编译阶段来处理。
  与使用虚拟（virtual）DOM 差异对比不同。Svelte 编写的代码在应用程序的状态更改时就能像做外科手术一样更新 DOM。
  Svelte 组件构建在 HTML 之上。然后只需添加数据即可。
  <script>
    let name = 'world';
  </script>
  <h1>Hello {name}!</h1>

Ember
  https://emberjs.com/

  Ember 是另一个重要的 JavaScript 框架，最初发布于 2011 年，用于开发 Web 应用程序并使用 MVC（模型 - 视图 - 控制器）架构模式。
  
  <script type="text/x-handlebars">
    <h1>Hello {{App.name}}!</h1>
  </script>
  <script type="text/javascript">
    App = Ember.Application.create();
    App.name= 'world';
  </script>
