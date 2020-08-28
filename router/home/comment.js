
const {Comment}=require("../../model/comment")
module.exports=async(req,res,next)=>{
    let {content,aid,uid}=req.body
    if (content) {
        await Comment.create({
            cid:aid,
            uid:uid,
            time:new Date(),
            content:content
        })
    }
    let comments=await Comment.find({cid:aid}).populate("uid")
    res.send(comments)
}