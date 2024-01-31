function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj, false)[attr];
}
// startMove(运动dom对象,{运动属性attr:目标值iTarget},回调函数fn)
function startMove(obj, json, fn){
	obj.timer && clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		// bStop用于判断所有属性运动是否停止
		var bStop=true;
		for(var attr in json){
			//1.取当前的值
			var iCur=0;
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur=parseInt(getStyle(obj, attr));
			}
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
			//3.检测停止,所有属性改变完成才停止动画
			if(iCur!=json[attr]){
				bStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			fn && fn();
		}
	}, 30)
}