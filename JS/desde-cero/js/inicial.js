/*
Mensaje alerta
alert("hola");*/



/*-----------Variables------------*/


/* Ya no se usa tanto */

//var producto = "Hola"; //Está incializada, podria no estarlo, el ';'es opcional, el tipo se define por el valor que toma.

/*
Definir multiples variables.
var disponible=true,
    tipo="computadora",
    numero=10;*/


/* Mensaje consola */

//console.log("Holaaaaaaaaaaa"+producto);

//Variables con let como se usa actualmnte.

//let producto = "Hola"; //igual que con var

const pi=3.1416;// const no se puesde modificar, y siempre debe inicialiarse con un valor.

const prod="Monitor 20 pulgadas";//String por asignación 
const prod2=String('Monitor 30 pulgadas');//String por constructor.

//console.log(prod+prod2.length);//.length es longitud de e string.

//console.log(`Hola prod:${prod}${prod2}`); //Otra forma de concatenar que no es +.

//indexOf(String) posicion que ocupa una palabra dentro de un string, si sen negaivo no está.

//console.log("La palabra monitor está en la pos: "+prod.indexOf("Monitor"));


//console.log("La palabra monitor está?: "+prod.includes("Monitor")); //igual que indexof peroco verdadero o falso.

const numero1=100;
let numero2=Math.PI//math objeto metodos operaciones matematicas.


//console.log(Math.round(numero2));//redodeo.


//console.log(numero1++); //muestra después incrementa.
//console.log(++numero2); //incrementa después muestra.

/*------------------------Objeto------------------------*/
const producto={
    nombreProducto:"Monitor",
    precio:200,
    disponible:true,

}

//acceder a propiedades.
/*console.log(producto.precio);
console.log(producto['precio']);

console.log(producto);

//agrega una nueva propiedad.
//producto.stock=30;

//console.log(producto);

//Elimino propiedad stok.
//delete producto.stock;

//console.log(producto);

//Destructuring crea una nuea variable, precio que almacenael precio del producto.
//Debe tener el mismo nombre.
//const {precio}=producto;
//const {nombreProducto}=producto;

// equivalente const {precio,nombreProducto}=producto;


//console.log(precio);
//console.log(nombreProducto);

/*Object.freeze(producto); //No permite agregar más propiedades, eliminar ni modificar.
Object.seal(producto);//No permite agregar ni quiear propiedades,pero si modificar existentes.

Object.isFrozen(producto);//devuelve true si no se pueden agrgar nuevas propedade. */

/*
const medidas={
    largo:3,
    ancho:1,
    peso:4,}


//Une las propiedades de dos objetos dentro de uno nuevo.    
const nuevoProducto= {...producto, ...medidas};

console.log(nuevoProducto);
*/

const arreglo=[10,20,30,40,50];
const arreglo2=[1,arreglo,true,arreglo];//admite cualquier formato de datos.


arreglo.push(0);//agrega al final
arreglo.unshift(1);//agrega al inicio.

console.log(arreglo.pop());//elimina y retorna el ultimo elemeno del arreglo.
console.log(arreglo.shift());//elimina y retorna el primer elemeno del arreglo.

arreglo.splice(3,1);//Elimina 1 elemento a partir de la tercer posicion.

const nuevoArreglo=[...arreglo,60];//Agrega todos los elementos de un areglo  otro.


//console.table(arreglo); //muestra arreglo como tabla.

//console.table(nuevoArreglo);

//arreglo[0];//accede primer elemento.

//arreglo.length;//numero elementos.


//recorre de manera exaustiva el arreglo.
/* 
arreglo.forEach(element => {
    console.log(element);
});

arreglo.include(10);//vVeradero si 10 pertenece a arreglo. arrglo.some para objeros.
*/

/*
function sumar(x,y){
 
return x+y;}

console.log(sumar(2,10));

*/

/*

//Sinaxis para llamra funcion como un metodo.
const reproductor={
        reproducir:function(id){
            console.log(`Reproduciendo canción con id: ${id}`);
        },
        pausar(){
            console.log("Pausa");
        }
}

reproductor.reproducir("Alamafuerte");
reproductor.pausar();
*/

//Arrow funtion.
const sumar=(n1,n2)=>{
    console.log(n1+n2);
}
sumar(1,2);

const metodoPago="MercadoPago";

switch(metodoPago){
    case "efectivo":
                    console.log('Pago efectivo');
        break;
    case "tarjeta":
            console.log('Pago tarjeta');
        break;
     case "transferencia":
            console.log('Pago transferencia');
        break;
    default:
    console.log('Uso mecado pago');
    break;
}