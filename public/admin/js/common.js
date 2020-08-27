function arryToJson(form){
    let obj={};//创建一个空对象
    let resultArr=form.serializeArray();//返回一个数组
    for (let item in resultArr) {
        let oneObj=resultArr[item];
        obj[oneObj.name]=oneObj.value
    }
    return obj;
}