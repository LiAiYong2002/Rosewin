const mongoose= require("mongoose");
mongoose.connect("mongodb://49.234.73.88:27017/Rosewin",{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{console.log("数据库连接成功");})
.catch((err=>{console.log("数据库连接失败"+err);}))