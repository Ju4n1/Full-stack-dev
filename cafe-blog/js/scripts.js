
//-----------------Query selector.

const heading=document.querySelector('.header__texto h2');//Retorna 0 o 1 elementos.
//console.log(heading);
heading.textContent="Nuevo heading";

const enlaces = document.querySelectorAll(".navegacion a");//De 0 a todos los que concuerden.
//console.log(enlaces[0]);

enlaces[0].textContent="Nuevo texto enlace";
//enlaces[0].href="https://www.google.com";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");


const heading2=document.getElementById("heading");
//console.log(heading2);

/////--------------- Crear codigo html desde JS

const nuevoEnlace=document.createElement("A");

//--Agrega href.
nuevoEnlace.href="nuevo-enlace.html";

//--Agrega texto.
nuevoEnlace.textContent="Un nuevo enlase";

//--Agrega clase.
nuevoEnlace.classList.add("navegacion__enlace");

//--Agregarlo al documento.

const nav =document.querySelector(".navegacion");

nav.appendChild(nuevoEnlace);

//Eventos

/*
console.log("1");

//Window es más quedocument, load espera que todo el archivo este listo para ejcutar
//function, descargue html,css,imagenes.
window.addEventListener("load",function(){
                    console.log("2");
});

//Equivalente alcodigo anterior.
window.onload=function(){
        console.log("3");
}
//Solamente espera que  se descargue el html
document.addEventListener("DOMContentLoaded",function(){
                console.log("4");
});

console.log("5");

//Otro ejeplo evento scroll.
window.onscroll=function(){
     console.log("scrolling");
}

*/

//Seleccionar un elemento y asociarle un evento.
/*
const btnEnviar=document.querySelector(".boton--primario");

btnEnviar.addEventListener("click",function(evento){
            console.log("click");
            evento.preventDefault();//Util forularios.
            //Validar formulario
            //...
            console.log("enviando formulario");
});*/



/**Capturar texto y validar. */

const datos={
        nombre:"",
        email:"",
        mensaje:""
}

const nombre=document.querySelector("#nombre");
const email=document.querySelector("#email");
const mensaje=document.querySelector("#mensaje");

nombre.addEventListener("input",leerTexto);
email.addEventListener("input",leerTexto);
mensaje.addEventListener("input",leerTexto);

function leerTexto(e){
        datos[e.target.id]=e.target.value;
        console.log(e.target.value);
        console.log(datos);
}


const formulario=document.querySelector(".formulario");
formulario.addEventListener("submit",function(e){
        e.preventDefault();
        //Validar formulario.
});

