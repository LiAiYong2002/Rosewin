
const {Flowervirgo} = require('../../model/flowervirgo')
module.exports=async(req,res,next)=>{
    let flowervirgo = await Flowervirgo.find();
    res.render("home/birthdayflower",{
        flowervirgo
    })
}