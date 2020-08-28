// 引入express框架
const express= require("express");
const home=express.Router()

home.get("/huazan",require("./home/huazanPage"));
home.get("/birthdayflower",require("./home/birthdayflowerPage"));
home.get("/flower",require("./home/flowerPage"));
home.get("/flowerall",require("./home/flowerallPage"));
home.get("/flowerbirthday",require("./home/flowerbirthdayPage"));
home.get("/flowerdetai",require("./home/flowerdetaiPage"));
home.get("/flowerlanguage",require("./home/flowerlanguage"));
home.get("/goodsRedrose",require("./home/goodsRedrosePage"));
home.get("/huazanmore",require("./home/huazanmorePage"));
home.get("/login",require("./home/loginPage"));
home.get("/loveflower",require("./home/loveflowerPage"));
home.get("/register",require("./home/registerPage"));
home.get("/Shoppingcart",require("./home/ShoppingcartPage"));

home.post("/registerUser",require("./home/registerUser"))
home.post("/checkEmail",require("./home/checkEmail"))

home.post("/loginUser",require("./home/loginUser"));
home.post("/checkLogin",require("./home/checkLogin"))

home.get("/logout",require("./home/logout"))


home.get("/delete",require("./home/delete"))
home.get("/loadCart",require("./home/loadCart"))
home.get("/deleteAll",require("./home/deleteAll"))
home.get("/addPrice",require("./home/addPrice"))
home.get("/reducePrice",require("./home/reducePrice"))

home.post("/comment",require("./home/comment"))
home.get("/deleteComment",require("./home/deleteComment"))

module.exports=home;
