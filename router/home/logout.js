module.exports=(req,res,next)=>{
    req.session.destroy(()=>{
        // 同步清除cookie
        res.clearCookie("connect.sid");
        // 清除本地用户数据
        res.app.locals.user=null
        // 回到登录页面
        res.redirect("/home/login")
    })
}