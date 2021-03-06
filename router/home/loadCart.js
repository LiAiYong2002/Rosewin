const {Cart}=require("../../model/cart");
module.exports=async(req,res,next)=>{
  let totalPrice=0
    let user=req.session.user
    if (user) {
      // 商品详情页添加购物车实现数据库添加和商品总价加载
        let {cartId,id}=req.query
        let resUser= await Cart.findOne({uid:id,cartId:cartId})
        if (cartId) {
          if (!resUser) {
            await (await Cart.findOne({cartId:cartId})).updateOne({
              uid:id
            })
          }else{
            let carNum = resUser.cartCount
            carNum++
            await (await Cart.findOne({cartId:cartId})).updateOne({
              cartCount:carNum
            })
          }
           
        }
          let resultCart=await Cart.find({uid:user._id})
          resultCart.forEach((item,index) => {
            let subtotal=item.subtotal
            let cartCount=item.cartCount
            totalPrice+=subtotal*cartCount
          });
          let shopLength=resultCart.length;
          res.send({resultCart,isok:true,shopLength,totalPrice})
    }else{
        res.send({message:"请先登录，再添加购物车",isok:false})
    }
}