var pro_top = document.querySelector('#content');
var goods = pro_top.querySelector(".pro_img");
var mask = goods.querySelector(".masks");
var bigPre = goods.querySelector(".big_pre")
var bigImg = goods.querySelector(".big_img")
// 悬浮显示
goods.addEventListener("mouseover",function() {
	mask.style.display = "block";
	bigPre.style.display = "block";
})
// 离开隐藏
goods.addEventListener("mouseleave",function() {
	mask.style.display = "none";
	bigPre.style.display = "none"
})
var box_x;
var box_y;
// 移动
goods.addEventListener("mousemove", function(e) {
	box_x = e.pageX - this.offsetLeft;
	box_y = e.pageY - this.offsetTop;
	var maskX = box_x - mask.offsetWidth / 2 
	var maskY = box_y - mask.offsetHeight / 2
	var maskMax = this.offsetWidth - mask.offsetWidth;
	var maskMaxY = this.offsetHeight - mask.offsetHeight;
	var bigMax =  bigImg.offsetWidth - bigPre.offsetWidth;
	if(maskX <= 0){
		maskX = 0;
	}
	if(maskY <= 0){
		maskY = 0;
	}
	if( maskX >=maskMax){
		maskX = maskMax;
	}
	if( maskY >=maskMaxY){
		maskY = maskMaxY;
	}
	mask.style.left = maskX + "px"
	mask.style.top = maskY + "px"
	var bigX = maskX * bigMax / maskMax
	var bigY = maskY * bigMax / maskMax
	bigImg.style.left = - bigX +"px"
	bigImg.style.top = - bigY +"px"
})
// 点击切换图片
var goods_list3 = document.querySelector(".goods_list3")
var lis = goods_list3.querySelectorAll("li")
var imgXiao = document.querySelector(".imgXiao")
// var items = document.querySelectorAll(".item");
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click',function(){
		var img = this.querySelector("img")
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.borderColor = "transparent"
		}
		this.style.borderColor = "#C60D1E"
		bigImg.src = img.src;
		imgXiao.src = img.src;
	})
	// lis[i].addEventListener("click", function() {
	// 	for (var i = 0; i < lis.length; i++) {
	// 		lis[i].style.borderColor = "transparent"
	// 	}
	// 	this.style.borderColor = "red"
	// 	var img = this.querySelector("img");
	// 	bigImg.src = img.src;
	// 	imgXiao.src = img.src;
		
	// })
}
