window.addEventListener("load",function(){

    const login_toggle=document.querySelectorAll(".login-switch li");
    const go_item=document.querySelectorAll(".go_item");
    // 注册邮箱
    const register_email=document.querySelector(".register_email");
    const email_img=document.querySelector(".email_img");
    //注册用户名
    const register_name=document.querySelector(".register_name")
    const name_img=document.querySelector(".name_img");
    // 注册密码
    const register_pwd=document.querySelector(".register_pwd")
    const pwd_img=document.querySelector(".pwd_img")
    // 注册验证码
    const yan=document.querySelector(".yan");
    const shuma=document.querySelector(".shuma");
    const ma=document.querySelector(".ma");
    // 注册按钮
    const register_btn=document.querySelector(".register_btn");
    // 注册协议
    const register_chk=document.querySelector(".register_chk")
    // 登录报错
    const err=document.querySelector(".err")

    // 登录注册切换
    for (let i = 0; i < login_toggle.length; i++) {
                    login_toggle[i].onclick=function(){
                       for (let j = 0; j < login_toggle.length; j++) {
                           login_toggle[j].className=""
                           go_item[j].style.display="none"
                       }
                        this.className="on";
                        go_item[i].style.display="block"
                    }
                }
// 登录验证


// //注册验证
// let email_rg;
let name_rg;
let pwd_rg;



// 用户名验证
register_name.addEventListener("blur",function(){
    if (this.value.trim()=="") {
        this.nextElementSibling.innerHTML = "请输入用户名";
        name_img.src="";
        this.nextElementSibling.className = "error";
        return;
    }else{
        name_rg = /^([a-zA-Z0-9_\u4e00-\u9fa5]{2,14})$/;
        if (name_rg.test(this.value)) {
            this.nextElementSibling.innerHTML = "验证成功";
            name_img.src="./img/login&register/true.jpg";
            this.nextElementSibling.className = "success";
        } else {
            this.nextElementSibling.innerHTML = "2-14位字母、数字、汉字、下划线";
            name_img.src="./img/login&register/false.jpg"
            this.nextElementSibling.className = "error";
        }
    }
})
// 密码验证
register_pwd.addEventListener("blur",function(){
    if (this.value.trim()=="") {
        this.nextElementSibling.innerHTML = "请输入密码";
        pwd_img.src="";
        this.nextElementSibling.className = "error";
        return;
    }else{
         pwd_rg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        if (pwd_rg.test(this.value)) {
            this.nextElementSibling.innerHTML = "验证成功";
            pwd_img.src="./img/login&register/true.jpg";
            this.nextElementSibling.className = "success";
        } else {
            this.nextElementSibling.innerHTML = "密码同时包含数字和字母，长度6-16";
            pwd_img.src="./img/login&register/false.jpg"
            this.nextElementSibling.className = "error";
        }
    }
})

do
var	out = Math.floor(Math.random() * 10000);
while (out < 1000)
ma.innerHTML = out;
var obj=sessionStorage.setItem("num",out)
// 随机数
function suiCount() {
    do
    var	out = Math.floor(Math.random() * 10000);
    while (out < 1000)
    ma.innerHTML = out;
    var obj=sessionStorage.setItem("num",out)
}
ma.addEventListener("click",function(){
    suiCount();
})
// 验证码验证
yan.addEventListener("blur",function(){
    let shu_value=ma.innerHTML;
    if (this.value.trim()=="") {
        shuma.innerHTML="请输入验证码";
        shuma.className="shuma error";
        return;
    }else{
        if (this.value.trim()==shu_value) {
            shuma.innerHTML="验证成功";
            shuma.className="shuma success";
        }else{
        shuma.innerHTML="验证失败";
        shuma.className="shuma error";
        }
    }
    
})

// 注册按钮
$("#registerform").submit(function(){
    if (register_email.value.trim()==""||register_name.value.trim()==""||register_pwd.value.trim()==""||yan.value.trim()=="") {
        $(".errText").html("内容均不能为空！")
        $(".err").fadeIn()
        setTimeout(() => {
            $(".err").fadeOut()
        }, 1500);
        return false
    }else if(register_chk.checked==false){
        $(".errText").html("请勾选协议")
        $(".err").fadeIn()
        setTimeout(() => {
            $(".err").fadeOut()
        }, 1500);
        return false
    }else{
        if(name_rg.test(register_name.value)&&pwd_rg.test(register_pwd.value)){
            if (yan.value.trim()==ma.innerHTML) {
                if (flag) {
                    // alert("注册成功")
                    return true
                }else{
                    $(".errText").html("注册失败，按格式填写")
                    $(".err").fadeIn()
                    setTimeout(() => {
                        $(".err").fadeOut()
                    }, 1500);
                    return false
                }
               
            }else{
                $(".errText").html("验证码不一致")
                    $(".err").fadeIn()
                    setTimeout(() => {
                        $(".err").fadeOut()
                    }, 1500);
                return false
            }
        }else{
             $(".errText").html("注册失败，按格式填写")
                    $(".err").fadeIn()
                    setTimeout(() => {
                        $(".err").fadeOut()
                    }, 1500);
            return false
        }

    }
})

 // 登录邮箱
    let login_email = document.querySelector(".login_email");
    let loginEmail_img=document.querySelector(".loginEmail_img")
    // 登录密码
    let login_password = document.querySelector(".login_password");
    let loginpwd_img=document.querySelector(".loginpwd_img")

// 登录按钮

// 登录ajax判断
login_email.addEventListener("blur",function(){
    let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (!emailReg.test(this.value)) {
        this.nextElementSibling.innerHTML = "邮箱错误，请重新填写";
        this.nextElementSibling.className = "error";
        loginEmail_img.src = "./img/login&register/false.jpg"
        return;
    }
   
})


     $("#loginFrom").submit(function(){
         let obj=arryToJson($(this));
         if(obj.email.trim()==""||obj.password.trim()==""){
            $(".errText").html("邮箱密码必填")
            $(".err").fadeIn()
            setTimeout(() => {
                $(".err").fadeOut()
            }, 1500);
            return false;
         }else{

            ajax({
                type:'post',
                url:'http://localhost/home/checkLogin',
                data:{
                    email:login_email.value,
                    password:login_password.value
                },
                success:function(data){
                    if (data.isok) {
                        login_email.nextElementSibling.className = "success";
                        loginEmail_img.src = "./img/login&register/true.jpg"
                    } else {
                        login_email.nextElementSibling.className = "error";
                        loginEmail_img.src = "./img/login&register/false.jpg";
                    }
                    if (data.pok) {
                        login_password.nextElementSibling.className = "success";
                        loginpwd_img.src = "./img/login&register/true.jpg"
                    } else {
                        login_password.nextElementSibling.className = "error";
                        loginpwd_img.src = "./img/login&register/false.jpg";
                    }
                    login_email.nextElementSibling.innerHTML = data.message;
                    login_password.nextElementSibling.innerHTML=data.pwd;

                    if (data.isok&&data.pok) {
                        window.location='./huazan'
                    } else {
                        return false;
                    }

                }
            })
            return false;
         }
     })

});