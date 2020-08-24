const {Cart}=require("../../model/cart")
module.exports=async(req,res,next)=>{
    let user=req.session.user
    if (user) {
       await Cart.find({uid:user._id}).updateMany({
        uid:null,
        cartCount:1
       })
    }
    res.send('ok')
}