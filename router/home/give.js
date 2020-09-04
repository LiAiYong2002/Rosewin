const {Comment}=require("../../model/comment")
module.exports=async(req,res,next)=>{
    let {uid,id}=req.query
    let user=req.session.user
    let comments=await Comment.findOne({_id:id})
    let gives=comments.giveCount
    let comid=comments.stateId;
    let flag=false;
   if (comid=="") {
        comid.push(user._id);
        gives++
        flag=true 
   }else{
        flag=false
        let result=comid.some(function(item){return item==user._id})
        if (!result) {
            comid.push(user._id);
            gives++;
            flag=true 
    }else{
        flag=false
    }
    }
   
    if (flag) {
        await Comment.findOne({_id:id}).findOneAndUpdate({stateId:comid,giveCount:gives})
        res.send({isok:true})
    }else{
        res.send({isok:false})
    }

    
}
