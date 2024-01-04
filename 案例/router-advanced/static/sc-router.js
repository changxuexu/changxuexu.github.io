'use strict';

class SCRouter extends HTMLElement {
  constructor() {
    super();

    this._onChanged = this._onChanged.bind(this);
    this._routes = new Map();
    /* 
    // 在这里添加自定义元素的 DOM 结构和逻辑
    this.attachShadow({ mode: 'open' }); 
    // 创建 Shadow DOM 树
    const shadowRoot = this.shadowRoot;
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 8px;
          background-color: lightblue;
        }
      </style>
      <h2>Hello, I'm a custom element!</h2>
      <p>My content goes here...</p>
    `; 
    */
  }

  _onChanged () {
    const path = window.location.pathname;
    const routes = Array.from(this._routes.keys());
    const route = routes.find(r => r.test(path)); //当前页面正则
    const data = route.exec(path);

    if (!route) {
      return;
    }

    // _newView 存储当前前往的新页面
    this._newView = this._routes.get(route);

    // 我们不想在离场视图动画中创建更多的Promise对象，因为这样一来会导致很多Promise挂起无法及时解决。
    // 因此，我们在这里添加了一个布尔标志，以便在已有过渡动画正在进行时停止创建新的Promise。
    if (this._isTransitioningBetweenViews) {
      return Promise.resolve();
    }
    this._isTransitioningBetweenViews = true;

    // 假设不需要进行离场动画。
    let outViewPromise = Promise.resolve();

    // _currentView 当前页面
    if (this._currentView) {
      if (this._currentView === this._newView) {
        // 当前页面与前往的新页面相同，无需过渡效果，因此移除布尔标志。
        this._isTransitioningBetweenViews = false;

        return this._currentView.update(data);
      }

      // 否则进行动画淡出，并以视图生成的Promise作为视图已完成的指示。
      outViewPromise = this._currentView.out(data);
    }

    // 每当离场动画完成（如果没有离场动画，则可能立即完成时），更新对当前视图的引用，并允许离场动画继续进行。
    return outViewPromise.then(_ => {
        this._currentView = this._newView;
        this._isTransitioningBetweenViews = false;
        return this._newView.in(data);
      });
  }

  go (url) {
    window.history.pushState(null, null, url);
    return this._onChanged();
  }

  /* 
    route: "^/misc/(.*)" , 
    view: <sc-view remote="" class="view-contact" route="^/contact/(.*)"></sc-view> 
  */
  addRoute (route, view) {
    if (this._routes.has(route))
      return console.warn(`Route already exists: ${route}`);
    this._routes.set(route, view);
  }

  _addRoutes () {
    let views = Array.from(document.querySelectorAll('sc-view'));
    views.forEach(view => {
      if (!view.route)
        return;
      this.addRoute(new RegExp(view.route, 'i'), view);
    }, this);
  }

  _removeRoute (route) {
    this._routes.delete(route);
  }

  _clearRoutes () {
    this._routes.clear();
  }

  // 生命周期钩子
  // 早期：createdCallback attachedCallback detachedCallback
  // 目前：constructor、connectedCallback、disconnectedCallback
  // DOM挂载完成
  connectedCallback () {
    window.addEventListener('popstate', this._onChanged);
    this._clearRoutes();
    this._addRoutes();
    this._onChanged();
  }

  // DOM移除完成
  disconnectedCallback () {
    window.removeEventListener('popstate', this._onChanged);
  }
}

window.customElements.define('sc-router', SCRouter)
