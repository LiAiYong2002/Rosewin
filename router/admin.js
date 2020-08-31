const express= require("express");
const admin=express.Router()
admin.get("/goodslist",require("./admin/goodslist"));
admin.get("/goodsAdd",require("./admin/goodsAdd"));
admin.get("/deletegoods",require("./admin/Deletegoods"));
admin.post("/Addgoods",require("./admin/Addgoods"))
admin.post("/updaategoods",require("./admin/updaategoods"))

admin.get("/userlist",require("./admin/userlist"));
admin.get("/userUpdate",require("./admin/userUpdate"));
admin.post("/updateUser",require("./admin/updateUser"))
admin.get("/deleteUser",require("./admin/deleteUser"))

admin.post("/Searchgoods",require("./admin/Searchgoods"))
admin.post("/Searchuser",require("./admin/Searchuser"))
module.exports=admin;