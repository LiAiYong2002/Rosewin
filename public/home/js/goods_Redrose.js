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
			alert("发表内容不能为空");
			return;
		}

		do
		var  out = Math.floor(Math.random() * 10000);
		while (out < 1000)
		var _out = ""
	    out	=String(out)
		var outLength = out.length ;
		if(outLength > 2){
			var outLength = outLength - 2;
			while (outLength > 0) {
			_out += "*";
			outLength--;
			}
			out = out.substr(0, 1) + _out + out.substr(out.length - 1, out.length);
		}
			
		var arr = textareaText.substring(0,textareaText.indexOf(" "))
		var wba = textareaText.substring(textareaText.indexOf(" "))
		var $li = $(
			'<li>\
					<div class="nr">\
						<div class="nr-titl">\
                        <img src="'+path+'" alt="">\
							<div class="fl">\
								<span>'+out+'</span>\
								<p>' +
			daydate + '</p>\
							</div>\
						</div>\
						<p><span class="aite">'+arr+'</span>' +
			wba +
			'</p>\
						<div class="nr-foor">\
							<img src="./img/goods_Redrose/点赞.png" class="dianzhan">\
							<span class="cout">1</span>\
							<a href="JavaScript:" class="btn-shanchu">删除</a>\
						</div>\
					</div>\
				</li>'
		)
		// $("ul").append($li)
		$(".babiao_list").prepend($li)
		$li.slideDown();
		$("textarea").val("")
    })
	// 点赞
	$("ul").on("click", ".dianzhan", function() {
		var count = $(this).siblings(".cout").text();
		// const conunt1 =Number(count);
		// if(count > conunt1+1){
		// 	alert("今日次数已用完");
		// 	return;
		// }
		var that=$(this)[0];
		count++;
		if(count>=1){
			that.src="./img/goods_Redrose/red.png";
		}
		
		$(this).siblings(".cout").text(count)
	})
	// 删除
	$(".babiao_list").on("click", "a", function() {
		var $this = $(this);
		$this.parents("li").slideUp(500, function() {
			$(this).remove();
		})
	})
	
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
