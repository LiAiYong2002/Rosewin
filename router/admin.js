const express= require("express");
const admin=express.Router()
admin.get("/goodslist",require("./admin/goodslist"));
admin.get("/goodsAdd",require("./admin/goodsAdd"));
admin.get("/deletegoods",require("./admin/Deletegoods"));
admin.post("/Addgoods",require("./admin/Addgoods"))
admin.post("/updaategoods",require("./admin/updaategoods"))

admin.get("/userlist",require("./admin/userlist"));
admin.get("/userUpdate",require("./admin/userUpdate"));
<<<<<<< HEAD

admin.post("/updateUser",require("./admin/updateUser"))
admin.get("/deleteUser",require("./admin/deleteUser"))
admin.get("/deletegoods",require("./admin/Deletegoods"));

admin.post("/Addgoods",require("./admin/Addgoods"))
=======
admin.post("/updateUser",require("./admin/updateUser"))
admin.get("/deleteUser",require("./admin/deleteUser"))

>>>>>>> 65bb96ea69ffed99216f38b494958a3336dad107
module.exports=admin;