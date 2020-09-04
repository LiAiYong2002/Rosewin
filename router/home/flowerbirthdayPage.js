const {Borthflower} = require('../../model/borthflower')
module.exports=async(req,res,next)=>{
    let borthflower = await Borthflower.find();
    res.render("home/flowerbirthday",{
        borthflower
    })
}