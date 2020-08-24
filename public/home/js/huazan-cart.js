$(function(){
 // 判断是否有商品

 // 加减
 $(".count-add,.count-remove").click(function(){
    var clasName = $(this).prop("class");
    var cshu = $(this).parent().siblings(".num").val()
    if(clasName == "count-add"){
        cshu++;
    }else{
        if(cshu == 1){
            return false;
        }
        cshu--;
    }
    $(this).parent().siblings(".num").val(cshu)
//    let dianjia = parseFloat($(this).parents(".p-number").siblings(".p-oper").find(".price").text().substr(1))
//    let tatopice =Number((dianjia * cshu));
//     $(this).parents(".mc").siblings(".mb").find(".tato_p").text(tatopice);
LOadData()
})

var totelLoad_price=0
function LOadData(){
  $(".mc>ul").children("li").each(function(i,v){
      var $v=$(v);
      var load_count=$v.find(".num").val();
      var  loadPrice=$v.find(".price").text().substr(1)
     totelLoad_price+=loadPrice*load_count
     console.log(loadPrice);
     console.log(load_count);
  })


if ($(".mc ul").children("li").length>=1) {
    $(".settleup-content").show();
    $(".prompt").hide();
}else{
   $(".settleup-content").hide();
   $(".prompt").show();
}
    // 商品数量
    $(".count_shop").text($(".mc ul").children("li").length);
    $(".tato_p").text(totelLoad_price.toFixed(2))
    $(".cart_num").text($(".mc ul").children("li").length)
    totelLoad_price=0
}

let flag=true
let cid=$(".remove").attr("data-id");
                $(".remove").on("click",function(){
                    if (flag) {
                        flag=false;
                        $.ajax({
                            type:'get',
                            url:'http://localhost/home/delete?cid='+cid,
                            success:function(data){
                                flag=true
                            }
                            })
                    }
                })


	// // 单个删除
	$(".p-oper>a").click(function(){
            $(this).parent().parent().slideUp(500, function() {
                $(this).remove();
                    LOadData()
            });
	})
    
LOadData();
})