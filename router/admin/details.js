const {Detail} = require('../../model/detail')
module.exports=async(req,res,next)=>{
    let user=req.session.user
    let {flowerId} = req.query;
    let finddetails = await Detail.find()
    let flowerLegth = finddetails.length+1;
    let Details = await Detail.find({flowerId:flowerId})
    let details = Details[0]
    if(details){
        res.render("admin/details",{
            user,details,
            link:'/admin/updatedetails',
            btnText:'修改',
        })
    }else{
        res.render("admin/details",{
            user,details,
            link:'/admin/Adddetails',
            btnText:'新增',flowerLegth
        })
    }
    
}