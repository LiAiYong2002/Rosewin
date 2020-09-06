$(function(){
    // 全选
	$(".checkall").change(function(){
		var flag = $(this).prop("checked");
		$(".j-checkbox").prop("checked",flag);
		$(".checkall").prop("checked",flag)
		LoadData()
    })
    // 单选
	$(".j-checkbox").change((function(){
		if($(this).prop("checked")){
			$(this).parents(".cart-item").addClass("check-cart-item");
		}else{
			$(this).parents(".cart-item").removeClass("check-cart-item");
		}
		var cnkCount = $(".j-checkbox:checked").length;
		if(cnkCount == $(".j-checkbox").length){
			$(".checkall").prop("checked",true)
		}else{
			$(".checkall").prop("checked",false)
		}
		LoadData()
    }))
    // // 加减
	// $(".increment,.decrement").click(function(){
    //     var clasName = $(this).prop("class");
	// 	var cshu = $(this).siblings(".itxt").val()
	// 	if(clasName == "increment"){
    //         cshu++;
	// 	}else{
	// 		if(cshu == 1){
	// 			return false;
	// 		}
	// 		cshu--;
    //     }
	// 	$(this).siblings(".itxt").val(cshu)
    //     var dianjia = $(this).parents(".p-num").siblings(".p-price").text().substr(1)
	// 	var tatopice = (dianjia * cshu).toFixed(2);
	// 	$(this).parents(".p-num").siblings(".p-sum").text("￥"+tatopice)
	// 	LoadData()
	// })
	// 更改input值触发
	$(".itxt").change(function(){
		var $this = $(this);
		var dianjian = $this.parents(".p-num").siblings(".p-price").text().substr(1);
		$this.parents(".p-num").siblings(".p-sum").text("￥"+($this.val()*dianjian).toFixed(2))
	})
	// 初始化
	function LoadData(){
		var number = $(".cartbox .ng_scope").length
		if(number > 0){
			$(".cart_warp").hide()
			$("#content").show()
			$("body").css("background","#fff")
		}else{
			$(".cart_warp").show()
			$("#content").hide()
			$("body").css("background","")
		}
		
		var totaPrice = 0;
		var Cout = document.querySelectorAll(".j-checkbox:checked").length; 
		$(".amount-sum").text(Cout);
		$(".j-checkbox:checked").each(function(i,v){
			var $v = $(v);
			totaPrice += parseFloat($v.parents(".ng_scope").children(".p-sum").text().substr(1));
		})
		$(".price-sum").text("￥"+totaPrice.toFixed(2))
	}

	$(".increment").on("click",function(){
        let pid=$(this).attr("data-pid")
        $.ajax({
            type:'get',
            url:'http://localhost/home/addPrice?cartId='+pid
        })
    })

    $(".decrement").on("click",function(){
        let pid=$(this).attr("data-pid")
        $.ajax({
            type:'get',
            url:'http://localhost/home/reducePrice?cartId='+pid
        })
    })

// 单个删除
// $(".p-action>a").click(function(){
// 	$(this).parent().parent().remove();
// 	LoadData()
// })

	// 删除选中的商品
	$(".remove-batch").click(function(){
		$(".j-checkbox:checked").parents(".ng_scope").remove()
		LoadData()
	})
	LoadData()
	
})