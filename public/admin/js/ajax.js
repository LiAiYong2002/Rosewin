function ajax(options) {
    let defaults={
        type:'get',
        url:'',
        data:{},
        header:{'content-type':'application/json'},
        success:function(){},
        error:function(){}
    }
    // 使用options覆盖defaults
    Object.assign(defaults,options)
    // 创建ajax对象
    let xhr = new XMLHttpRequest();
    let dataArr=[];

    // 循环data
    for (let key in defaults.data) {
        dataArr.push(`${key}=${defaults.data[key]}`)
    }
    let params=dataArr.join('&');
    // 如果是get请求
    if (defaults.type=='get') {
        defaults.url=defaults.url+'?'+params
    }
    // 给ajax赋值请求地址和请求方式
    xhr.open(defaults.type,defaults.url);
    if (defaults.type=='post') {
        xhr.setRequestHeader("Content-Type",defaults.header['content-type'])
        xhr.send(JSON.stringify(defaults.data));
    }else{
        // 发送请求
        xhr.send();
    }
   
    // 获取请求数据
    xhr.onreadystatechange = function () {
        //请求完成并且成功的时候，才调用success
        if (xhr.readyState == 4 && xhr.status == 200) {
            let result =xhr.responseText;
            //判断响应的头部类型，如果是json格式，则转换成json返回给success
            let header=xhr.getResponseHeader('Content-Type')
            if (header.includes('application/json')) {
                result=JSON.parse(result)
            }
            options.success && options.success(result)
        }else if(xhr.readyState==4 && xhr.status!=200){
            options.error && options.error(xhr.status,xhr)
        }
    }
}