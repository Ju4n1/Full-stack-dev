
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