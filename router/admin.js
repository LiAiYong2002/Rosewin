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
>>>>>>> 2658ec01ae3ac9e332cbf50030f9724f602f78a3
module.exports=admin;