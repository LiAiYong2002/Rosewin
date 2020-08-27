const {Cart}=require("../../model/cart")
module.exports=async(req,res,next)=>{
    let user=req.session.user
    if (user) {
        let {cartId}=req.query
        let resUser= await Cart.findOne({uid:user._id,cartId:cartId})
        let carNum = resUser.cartCount
        carNum++
        await Cart.find({uid:user._id,cartId:cartId}).updateOne({
            cartCount:carNum
        })
    }
    res.send('ok')
}