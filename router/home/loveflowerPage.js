const {loveflower} = require("../../model/loveflower")
module.exports=async(req,res,next)=>{
    let Loveflower = await loveflower.find();
    res.render("home/loveflower",{
        Loveflower
    })

}