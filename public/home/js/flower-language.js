
$(function(){
    // 自动滚动
    
    // 送货知识图文滚动模块
    // 右边点击事件
    $(".jianto_yido2").click(function(){nextscroll()})
    function nextscroll(){
        var vcon = $(".mr_frul ");
        var offset = ($(".mr_frul li").innerWidth())*-1;
        vcon.stop().animate({left:offset},"normal",function(){
            var firstItem = $(".mr_frul ul li").first();
            vcon.find("ul").append(firstItem);
            $(this).css("left","0px");
        });
    }
    // 左边点击事件
    $(".jianto_yido1").click(function(){
        var vcon = $(".mr_frul ");
        var offset = ($(".mr_frul li").width()*-1);
        var lastItem = $(".mr_frul ul li").last();
        vcon.find("ul").prepend(lastItem);
        vcon.css("left",offset);
        vcon.animate({left:"0px"},"normal")
    });
    // 送花知识模块放上去事件
    $(".mr_frul").mouseleave(function(){
        timer= setInterval(function(){
            $(".jianto_yido2").click();
        },5000)
    })
    $(".mr_frul").mouseenter(function(){
        clearInterval(timer)
    })
    // 按钮放上去事件
    $(".jianto_yido2").mouseleave(function(){
        timer= setInterval(function(){
            $(".jianto_yido2").click();
        },5000)
    })
    $(".jianto_yido2").mouseenter(function(){
        clearInterval(timer)
    })


    $(".jianto_yido1").mouseleave(function(){
        timer= setInterval(function(){
            $(".jianto_yido1").click();
        },5000)
    })
    $(".jianto_yido1").mouseenter(function(){
        clearInterval(timer)
    })
    
    timer= setInterval(function(){
        $(".next").click();
    },5000)
    
})
