const express= require("express");
const admin=express.Router()
admin.get("/goodslist",require("./admin/goodslist"));
admin.get("/goodsAdd",require("./admin/goodsAdd"));
admin.get("/userlist",require("./admin/userlist"));
admin.get("/userUpdate",require("./admin/userUpdate"));
module.exports=admin;