//funcion que muestre el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

/*---------- scroll reveal----------*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.bienvenido', { origin: 'top' });

ScrollReveal().reveal('.descripcion', { origin: 'buttom' });

ScrollReveal().reveal('.img', { origin: 'left' });

ScrollReveal().reveal('.proyecto', { origin: 'right' });

ScrollReveal().reveal('.pdf', { origin: 'left' });

ScrollReveal().reveal('.titulo-seccion', { origin: 'top' });

ScrollReveal().reveal('#titulo_certificado', { origin: 'top' });