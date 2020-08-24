$(function(){
// 电梯导航模块
const $rosewin_nav=$(".rosewin_nav")
const $hz_hot_goods=$(".hz_hot_goods")
const $double_img=$(".double_img")
// 节流阀
let flag = true;
// 窗体滚动
$(window).scroll(function(){
    let sTop=$(document).scrollTop();
    if (sTop>=$hz_hot_goods.offset().top) {
        $rosewin_nav.fadeIn();
    }else{
        $rosewin_nav.fadeOut();
    }
    // 导航内容选中内容
  if (flag) {
    $(".go_item").each(function(i, v) {
        if (sTop >= $(v).offset().top) {
            $(".rosewin_nav li").eq(i).addClass("nav_current");
            $(".rosewin_nav li").eq(i).siblings("li").removeClass("nav_current");
        }
    })
  }

})
// 返回顶部
$(".goback").click(function() {
    flag = false;
    $("body,html").animate({
        scrollTop: 0
    }, function() {
        flag = true;
    })
})

$(".rosewin_nav li").click(function(){
    flag=false;
    let $this = $(this);
    let index=$this.index();
    let top=  $(".go_item").eq(index).offset().top;
    $("body,html").animate({
        scrollTop: top
    },function(){
        flag=true;
    })
    $this.addClass("nav_current");
	$this.siblings("li").removeClass("nav_current")
})



// 送货知识图文滚动模块
// 右边点击事件
$(".next").click(function(){nextscroll()})
function nextscroll(){
    var vcon = $(".tempWrap ");
    var offset = ($(".tempWrap li").innerWidth())*-1;
    vcon.stop().animate({left:offset},"slow",function(){
        var firstItem = $(".tempWrap ul li").first();
        vcon.find("ul").append(firstItem);
        $(this).css("left","0px");
    });
}
// 左边点击事件
$(".prev").click(function(){
    var vcon = $(".tempWrap ");
    var offset = ($(".tempWrap li").width()*-1);
    var lastItem = $(".tempWrap ul li").last();
    vcon.find("ul").prepend(lastItem);
    vcon.css("left",offset);
    vcon.animate({left:"0px"},"slow")
});
// 送花知识模块放上去事件
$(".tempWrap").mouseleave(function(){
    timer= setInterval(function(){
        $(".next").click();
    },2000)
})
$(".tempWrap").mouseenter(function(){
    clearInterval(timer)
})
// 按钮放上去事件
$(".next").mouseleave(function(){
    timer= setInterval(function(){
        $(".next").click();
    },2000)
})
$(".next").mouseenter(function(){
    clearInterval(timer)
})
$(".prev").mouseleave(function(){
    timer= setInterval(function(){
        $(".next").click();
    },2000)
})
$(".prev").mouseenter(function(){
    clearInterval(timer)
})

// 自动滚动
timer= setInterval(function(){
    $(".next").click();
},2000)

});