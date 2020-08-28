const {Comment}=require("../../model/comment")
module.exports=async(req,res,next)=>{
    let {id,uid}=req.query;
    let user=req.session.user
  let del= await Comment.findOneAndDelete({_id:id,uid:user._id})
  if(del==null){
    res.send({isok:false})
  }else{
      res.send({isok:true})
  }

    
}