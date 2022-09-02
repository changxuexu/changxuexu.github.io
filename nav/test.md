加载进度
	https://zhuanlan.zhihu.com/p/66672090
	$(function(){
		var $window = $(window);
		var $progress = $('.progress');
		var sHeight = $('body').height() - $window.height();
		$window.on('scroll', function() {
			window.requestAnimationFrame(function(){
				var value = Math.max(0, Math.min(1, $window.scrollTop() / sHeight));
				updateProgressBar(value);
			});
		});

		function updateProgressBar(value) {
			$progress.css({width: value * 100 + '%'});
		}
	});
	
	function scrollBar() {
		let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
		let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
		let scrollAvail = pageHeight - windowHeight; //滚动总高度
		window.onscroll = function () {
		  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  document.querySelector('.scrollBar').style.width = (scrollTop/scrollAvail)*100   '%';
		  滚动高度/滚动总高度
		};
	}

	var self = this,
	hWin = $(window).height(), //window高度
	wWin = $(window).width(),  //宽度
	hDoc = $(document).height(), //文档的高度
	scrollValue = $(window).scrollTop(), //滚动高度
	wBack, hBack, wFront, hFront, scrollineVal, wRef;


	//默认 (滚动高度+window高度)为总滚动高度
  scrollineVal = (scrollValue + hWin) * wWin / hDoc;