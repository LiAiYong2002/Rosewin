const {Cart}=require("../../model/cart")
module.exports=async(req,res,next)=>{
    let user=req.session.user
    let {cid}=req.query;
        
    if (user) {
        await (await Cart.findOne({cartId:cid})).updateOne({
            uid:null,
            cartCount:1
        })
    }
    await Cart.find({uid:user._id})
    res.send("ok")
}