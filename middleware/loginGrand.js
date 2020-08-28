const loginGrand = (req,res,next)=>{
    if(req.url != '/login' && req.url != '/checklogin' && !req.session.user){
        res.render('admin/error',{
            msg:"当前未登录，请先登录"
        })
    }else{
        if(req.session.user.role == "normal"){
            res.render('admin/error',{
                msg:"当前账号不是管理员，无法访问"
            })
        }
        next()
    }
}
module.exports = loginGrand