window.addEventListener("scroll" , function(){
	var menu = document.querySelector("nav");
	menu.classList.toggle("efecto" , window.scrollY >= 212);
})

//medidor temporal

window.addEventListener("scroll" , function(){
	window.scrollY >0;
	console.log(scrollY);
})

//boton ir arriba

window.addEventListener("scroll" , function(){
	var boton = document.querySelector(".ir-arriba");
	boton.classList.toggle("top" , window.scrollY >=212);
});

//menu responsive


function menuA(){
	var menuR = document.getElementById('menu');
	menuR.classList.toggle("activo")
	var botonM = document.querySelector('.menuA');
	botonM.classList.toggle("rotacion")
}

