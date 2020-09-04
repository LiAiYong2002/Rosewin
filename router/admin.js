const express= require("express");
const admin=express.Router()
admin.get("/goodslist",require("./admin/goodslist"));
admin.get("/goodsAdd",require("./admin/goodsAdd"));
admin.get("/deletegoods",require("./admin/deletegoods"));
admin.post("/Addgoods",require("./admin/Addgoods"))
admin.post("/updaategoods",require("./admin/updaategoods"))

admin.get("/userlist",require("./admin/userlist"));
admin.get("/userUpdate",require("./admin/userUpdate"));

admin.post("/updateUser",require("./admin/updateUser"))
admin.get("/deleteUser",require("./admin/deleteUser"))

admin.get("/Searchgoods",require("./admin/Searchgoods"))
admin.get("/Searchuser",require("./admin/Searchuser"))

admin.get("/details",require("./admin/details"))
admin.post("/updatedetails",require("./admin/updatedetails"))
admin.post("/Adddetails",require("./admin/Adddetails"))

module.exports=admin;