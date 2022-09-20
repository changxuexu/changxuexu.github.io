_isIE() ? createbrowserhappy() : initprogram()

//初始化
function initprogram() {

	/* 
		document.onreadystatechange 页面加载状态改变时的事件
		document.readyState         返回当前文档的状态
			1.uninitialized - 还未开始载入
			2.loading       - 载入中
			3.interactive   - 已加载，文档与用户可以开始交互
			4.complete      - 载入完成
	*/
	var loadingdom = document.createElement('div')
	loadingdom.classList.add('loadingbox')
	loadingdom.innerHTML = '<div class="loadinginside"><svg class="gear" style="width:64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path id="p" fill="#fdb" d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"></path></svg><svg class="gear" style="width:64px;margin:64px 0 0 -12px;animation-direction:reverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><use href="#p"></use></svg><h1 class="text-tit"> ￡AP︶ㄣOL◢◤LO </h1><div class="text-muted">website is now loading ...</div></div>'
	document.body.appendChild(loadingdom)
	document.onreadystatechange = function () {
		if (document.readyState == "complete") {
			loadingdom.remove()
		}
	}

	/* 
		滚动到具体楼层: vue-scrollto.js
		favico  : favico.js
		tooltip : popper.js / tippy.js
		typeit  : typed.js
	*/
	var arrJs = ['./static/js/vue3.js', './static/js/vue-scrollto.js', './static/js/favico.js', './static/js/popper.js', './static/js/tippy.js', './static/js/typed.js', './static/js/data.js', './static/js/page.js']
	_asyncLoadJs(arrJs, function () {
		console.log('动态加载js文件完成');
	})

}

// 升级提示
function createbrowserhappy() {
	var browserhappydom = document.createElement('div')
	browserhappydom.classList.add('browserhappy')
	browserhappydom.innerHTML = '<p>此站点不支持IE浏览器，请升级您的浏览器</p><a href="https://browsehappy.com/" target="_blank">立即更新</a>'
	document.body.appendChild(browserhappydom)

	var appdom = document.getElementById('app')
	appdom.parentNode.removeChild(appdom); //ie不支持remove()
}

// 动态加载js:以数组的形式加载多个js文件
function _asyncLoadJs(urlArr, callback) {
	var cb = callback || function () { };
	for (var i = 0, len = urlArr.length; i < len; i++) {
		var createScript = document.createElement("script");
		createScript.type = 'text/javascript';
		// 使用document.createElement('script')来动态的创建脚本,它的属性async为true,默认为异步加载；若需按顺序加载，设置为false
		createScript.async = false;
		// 判断最后一个文件加载
		if (i == len - 1) {
			if (createScript.readyState) {
				// IE浏览器,js加载完成执行回调 
				createScript.onreadystatechange = function () { // IE 加载完成
					if (createScript.readyState == 'loaded' || createScript.readyState == 'complete') {
						createScript.onreadystatechange = null;
						cb();
					}
				};
			} else {
				//其他浏览器,js加载完成执行回调
				createScript.onload = function () { cb() };
			}
		}
		createScript.src = urlArr[i];
		document.body.appendChild(createScript)
	}
}

// 判断是否是IE浏览器
function _isIE() {
	var ua = window.navigator.userAgent;
	var old_ie = ua.indexOf('MSIE ');
	var new_ie = ua.indexOf('Trident/')
	if ((old_ie > -1) || (new_ie > -1)) {
		return true //IE
	} else {
		return false //其他浏览器
	}
}
