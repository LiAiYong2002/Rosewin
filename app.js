// 引入express框架
const express= require("express");
// 创建服务器
const app =express();
// 引入路径
const path =require("path");
// 引入post请求参数
const bodyParser=require("body-parser");
// 引入数据库连接
require("./model/server")
// 引入session
const session= require("express-session");
// 引入template
const template = require('art-template')
// 时间格式
const dateFormat = require('dateformat')
template.defaults.imports.dateFormat = dateFormat;

// 配置session
app.use(session({secret:'liaiyong'}))

// 配置post请求
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
// 设置静态资源
app.use(express.static(path.join(__dirname,"public")));
// 设置模板引擎
app.engine("art",require("express-art-template"));
// 设置模板根目录
app.set("views",path.join(__dirname,"views"));
// 设置模板后缀名
app.set("view engine","art");

app.locals.SelectMen = 'user'

// 登录拦截
app.use('/admin',require('./middleware/loginGrand'))


// 配置路由
app.use("/home",require("./router/home"));
app.use("/admin",require("./router/admin"));


// 拦截错误信息
app.use((err,req,res,next)=>{
    res.send(err.message)
})


// 设置监听端口
app.listen(80);
console.log("服务器开启成功");