'use strict';

class SCView extends HTMLElement {

  constructor() {
    super();
    this._view = null;
    this._isRemote = (this.getAttribute('remote') !== null);
  }

  get route () {
    return this.getAttribute('route') || null;
  }

  _hideSpinner () {
    this.classList.remove('pending');
  }

  _showSpinner () {
    this.classList.add('pending');
  }

  _loadView (data) {
    // 等待半秒后显示加载指示器
    const spinnerTimeout = setTimeout(_ => this._showSpinner(), 500);
    
    this._view = new DocumentFragment();

    const xhr = new XMLHttpRequest();

    xhr.onload = evt => {
      const newDoc = evt.target.response;

      const newView = newDoc.querySelector('sc-view.visible');
      // 从父节点中复制子节点
      while(newView.firstChild) {
        this._view.appendChild(newView.firstChild);
      }
      // 将片段添加到页面上
      this.appendChild(this._view);
      // 移除指示器
      clearTimeout(spinnerTimeout);
      this._hideSpinner();
    };
    xhr.responseType = 'document';
    xhr.open('GET', `${data[0]}`);
    xhr.send();
  }

  in (data) {
    if (this._isRemote && !this._view) {
      this._loadView(data);
    }

    return new Promise((resolve, reject) => {
      const onTransitionEnd = () => {
        this.removeEventListener('transitionend', onTransitionEnd);
        resolve();
      };

      this.classList.add('visible');
      this.addEventListener('transitionend', onTransitionEnd);
    });
  }

  out () {
    return new Promise((resolve, reject) => {
      const onTransitionEnd = () => {
        this.removeEventListener('transitionend', onTransitionEnd);
        resolve();
      };

      this.classList.remove('visible');
      this.addEventListener('transitionend', onTransitionEnd);
    });
  }

  update () {
    return Promise.resolve();
  }
}

window.customElements.define('sc-view', SCView);
