$(function() {
        var proTab = document.querySelector(".proTab");
        var pro_main = document.querySelector(".pro_main");
        var pro_main1 = document.querySelector(".pro_main1");
        var proTab_btn = document.querySelector('.proTab_btn');
		var proTab_box = document.querySelector('.proTab_box');
		// 商品详情和商品评论模块fiexd定位
        document.addEventListener("scroll",function(){
			if(window.pageYOffset >= proTab_box.offsetTop){
				proTab.style.position = "fixed"
                proTab.style.top = "-20px"
                proTab_btn.style.display = "block"
			}else{
				proTab.style.position = "static"
				proTab_btn.style.display = "none"
			}
        })
   
		var imgXiao=document.querySelector(".imgXiao")
		var path=imgXiao.src

    // 切换商品详情
    $('.details_btn').click(function(){
        $(".details").show()
        $(".comment").hide()
        $(this).addClass('current')
        $('.comment_btn').removeClass('current')
    })
    // 切换商品评论
    $('.comment_btn').click(function(){
        $(".comment").show()
        $(".details").hide()
        $(this).addClass('current')
        $('.details_btn').removeClass('current')
    })


    var textareaText;
    // 发表
	$(".btn_a").on("click", function() {
		var date = new Date();
		var Year = date.getFullYear();
		var month = date.getMonth() + 1;
		month = month < 10 ? '0' + month : month
		var day = date.getDate();
		day = day < 10 ? '0' + day : day;
		var daydate = Year + "-" + month + "-" + day

		textareaText = $("textarea").val()
		if (textareaText == "") {
			// alert("发表内容不能为空");
			return;
		}
    })
	// 点赞
	$("ul").on("click", ".dianzhan", function() {
		var count = $(this).siblings(".cout").text();
		
		var that=$(this)[0];
		count++;
		if(count>=1){
			that.src="./img/goods_Redrose/red.png";
		}
		
		$(this).siblings(".cout").text(count)
	})
	// 删除
	// $(".babiao_list").on("click", "a", function() {
	// 	var $this = $(this);
	// 	$this.parents("li").slideUp(500, function() {
	// 		$(this).remove();
	// 	})
	// })
	
	// 添加内容
	// 加入购物车
	$(".btn_buy_now").click(function(){
		$('.loading-mask').show()
		$('.cart_num').text(input_val)
		// $('.saleP').text(input_val)
	})
	// 关闭
	$('.close').click(function(){
		$('.loading-mask').hide()
	})
	// 继续购物
	$('.btn_close_addcart').click(function(){
		$('.loading-mask').hide()
	})
	// 加减数量
	var input_val
	$('.plus_btn,.reduce_btn').click(function(){
		var clasName = $(this).prop("class");
		input_val = $(this).parents('.a_btn').siblings('.buy_num').val();
		if(clasName == "plus_btn"){
			input_val++;
		}else{
			if(input_val == 1){
				return false;
			}
			input_val--;
		}
		$(this).parents('.a_btn').siblings('.buy_num').val(input_val)
	})
})
