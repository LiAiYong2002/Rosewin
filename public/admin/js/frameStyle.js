function lodata(){
	
}
lodata()


window.addEventListener("load",function(){
	var close = document.querySelector(".close")
	var btnDefault = document.querySelector(".btn-default")
	
	var modal = document.querySelector(".modal")
	var modalLg = document.querySelector(".modal-lg")
	var shanchu = document.querySelector(".shanchu")
		shanchu.addEventListener('click',function(){
			modal.style.display = 'block'
			modalLg.style.display = 'block'
		})
		close.addEventListener('click',function(){
			modal.style.display = 'none'
			modalLg.style.display = 'none'
		})
		btnDefault.addEventListener('click',function(){
			modal.style.display = 'none'
			modalLg.style.display = 'none'
		})
})