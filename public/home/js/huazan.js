window.addEventListener("load",function(){
const banner=document.querySelector(".banner");
const banner_ul=document.querySelector(".banner ul");
const pager=document.querySelector(".pager");
const row_fl=document.querySelector(".row_fl");
const row_fr=document.querySelector(".row_fr");
// 定时器
let timer;
// 节流阀
var flag=true;
// 点状图
for (let i = 0; i < banner_ul.children.length; i++) {
    var li=document.createElement("li")
    li.setAttribute("data-index",i)
    li.addEventListener("click",function(){
       if (flag) {
           flag=false;
           for (let j = 0; j < pager.children.length; j++) {
            pager.children[j].className="";
        }
        this.className="ol_current";
        var index =this.getAttribute("data-index");
        page=circle=index;
        animate(banner_ul,-(index*banner.offsetWidth),function(){
                flag=true;
            })
       }
    })
    pager.appendChild(li);
}
pager.children[0].className="ol_current";


// 深度拷贝节点
var copyNode = banner_ul.children[0].cloneNode(true);
banner_ul.appendChild(copyNode);
// 索引
let page=0;
// 点状图索引
let circle=0;
// 右边点击事件
row_fr.addEventListener("click",function(){
   if (flag) {
       flag=false;
    if (page==banner_ul.children.length-1) {
        banner_ul.style.left=0+"px";
        page=0;
    }
    page++;
    circle++;
    if (circle>pager.children.length-1) {
        circle=0;
    }
        animate(banner_ul,-(page*banner.offsetWidth),function(){
            flag=true;
        });
        for (let j = 0; j < pager.children.length; j++) {
            pager.children[j].className="";
        }
        pager.children[circle].className="ol_current";
   }
})
// 左边事件
row_fl.addEventListener("click",function(){
    if (flag) {
        flag=false;
        if (page==0) {
            banner_ul.style.left= -(page * banner.offsetWidth)+"px";
            page=banner_ul.children.length-1;
        }
        page--;
        circle--;
      circle= circle<0? pager.children.length-1:circle;
        animate(banner_ul,-(page*banner.offsetWidth),function(){
            flag=true;
        });
        for (let j = 0; j < pager.children.length; j++) {
            pager.children[j].className="";
        }
        pager.children[circle].className="ol_current";
    }
})
// 鼠标放上去事件
banner.addEventListener("mouseenter",function(){
    clearInterval(timer);
})
// 鼠标离开事件
banner.addEventListener("mouseleave",function(){
    // 每隔2秒自动播放
timer=setInterval(function(){
    row_fr.click();
},2000)
})
// 每隔2秒自动播放
timer=setInterval(function(){
    row_fr.click();
},2000);

});