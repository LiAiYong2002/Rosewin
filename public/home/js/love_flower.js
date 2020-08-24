// 电梯导航模块
const $rosewin_nav=$(".nav")
const $jxlist=$(".jxlist")
const $double_img=$(".double_img")
// 节流阀
// let flag = true;

console.log($rosewin_nav)
// 窗体滚动,电梯导航显示隐藏
$(window).scroll(function(){
    let sTop=$(document).scrollTop();
    if (sTop>=$jxlist.offset().top) {
       $rosewin_nav.show();
    }else{
		 $rosewin_nav.hide();
	}
})


// 返回顶部
$(".li4").click(function() {
    // flag = false;
    $("body,html").animate({
        scrollTop: 0
    }, function() {
        flag = true;
    })
})

$(".nav li").click(function(){
    flag=false;
    let $this = $(this);
    let index = $this.index();
    let top = $(".jxlist").eq(index).offset().top;
    console.log(top);
    $("body,html").animate({
        scrollTop: top
    },function(){
        flag=true;
    })

})