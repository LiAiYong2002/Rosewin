const {Cart}=require("../../model/cart")
module.exports=async(req,res,next)=>{
    let user=req.session.user
    let carNum=0
    if (user) {
        let {cartId}=req.query
        let resUser= await Cart.findOne({uid:user._id,cartId:cartId})
        carNum = resUser.cartCount
        if (resUser.cartCount<2) {
            await Cart.find({uid:user._id,cartId:cartId}).updateOne({
                cartCount:1
            })
        }else{
            carNum--
            await Cart.find({uid:user._id,cartId:cartId}).updateOne({
                cartCount:carNum
            })
        }
        
        
    }
    res.send('ok')
}