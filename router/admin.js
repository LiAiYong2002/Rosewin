const express= require("express");
const admin=express.Router()
admin.get("/goodslist",require("./admin/goodslist"));
admin.get("/goodsAdd",require("./admin/goodsAdd"));
admin.get("/userlist",require("./admin/userlist"));
admin.get("/userUpdate",require("./admin/userUpdate"));
<<<<<<< HEAD

admin.post("/updateUser",require("./admin/updateUser"))
admin.get("/deleteUser",require("./admin/deleteUser"))
=======
admin.get("/deletegoods",require("./admin/Deletegoods"));

admin.post("/Addgoods",require("./admin/Addgoods"))
<<<<<<< HEAD
admin.post("/updaategoods",require("./admin/updaategoods"))
=======
>>>>>>> 2658ec01ae3ac9e332cbf50030f9724f602f78a3
>>>>>>> e653c6d0f32b510a8800052b4827032a52fb9b5b
module.exports=admin;