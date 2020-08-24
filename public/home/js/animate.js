// 动画函数封装
function animate(ele, target, callback) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function() {
	var buShu = (target - ele.offsetLeft) / 10;
	buShu = buShu > 0 ? Math.ceil(buShu) : Math.floor(buShu);
		if (ele.offsetLeft == target) {
			clearInterval(ele.timer);
			if (callback) {
				callback();
			}
		} else {
			ele.style.left = ele.offsetLeft + buShu + "px";
		}
	}, 30)
}