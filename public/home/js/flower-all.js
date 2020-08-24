$(function (){
    // var dianji = $(".dianji");
    // for (let i = 0; i < diajji.length;  i++) {
    //     var dainji2 =  dianji{i};
    //     for (let y = 0; y < dainji2.length; y++) {
    //         let dianji3 = dainji2[y]
    //         dianji3.click(function(){
    //             $(this).css()
    //         })
    //     } 
        
    // }

    $(".danji2").click(function(){
        let index = $(this).index();
        $(".dianji").eq(index).siblings().hide()
        $(".dianji").eq(index).show();
        console.log(index);
        
       

        
        // $(this).show();
    })


})