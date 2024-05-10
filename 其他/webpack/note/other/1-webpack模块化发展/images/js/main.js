$(function () {
  //基本设定
  $("ul").hide().addClass("tree");
  $("body>ul").show().removeClass("tree").addClass("treeRoot").attr({ "state": "1" });

  //添加链接
  $("li").each(function () {
    if ($(this)[0].childNodes.length > 1 && $("ul", this).size() > 0) {
      $($(this)[0].childNodes[0]).wrap("<a href='#'></a>");

    }
  });
  //点击展开/关闭
  $("li > a").click(function () {
    $(this).nextAll("ul").toggle(500);
    $(this).css({ "text-decoration": "underline" });
    return false;
  });

  //全部展开/全部收起
  // $(".treeRoot").dblclick(function(){
  // 	if($(this).attr("state") == "1"){
  // 		$(".tree").show();
  // 		$(this).attr({"state":"0"});
  // 	}
  // 	else{
  // 		$(".tree").hide();
  // 		$(this).attr({"state":"1"})
  // 	}
  // }); 


  //处理图片显示与动画处理：
  $("img").each(function (i) {
    var h = 0;
    //$(this).height();			//第一次做法：错
    //h = this.naturalHeight;	//第二次做法：不兼容
    //$(this).attr("realHeight",h);
    getImgNaturalDimensions(this, setWandH);	//第三次做法：good
    $(this).css({ 'height': "20px", border: 'solid 1px red' });
    $(this).css({ 'cursor': "zoom-in" });
  });
  $("img").toggle(
    function () {
      var h = null;
      //h = $(this).get(0).naturalHeight;
      if (!h) {
        h = $(this).attr("realHeight");
      }
      $(this).animate({ 'height': h + "px" });
      $(this).css({ 'cursor': "zoom-out" });
    },
    function () {
      $(this).animate({ 'height': "20px" });
      $(this).css({ 'cursor': "zoom-in" });
    }
  );

});
function getImgNaturalDimensions (img, callback) {
  var nWidth, nHeight;
  if (img.naturalWidth) { // 现代浏览器
    //return [img.naturalWidth, img.naturalHeight];
    callback(img, img.naturalWidth, img.naturalHeight);
  }
  else { // IE6/7/8
    var image = new Image();
    image.src = img.src
    image.onload = function () {
      callback(img, image.width, image.height);
      //nHeight = image.width;
      //nHeight = image.height
    }
  }
}
function setWandH (img, w, h) {
  $(img).attr("realWidth", w);
  $(img).attr("realHeight", h);
}