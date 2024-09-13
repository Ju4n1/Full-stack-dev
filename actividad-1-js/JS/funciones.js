
function saludo(nombre){
    console.log('Hola '+nombre+" bienvenido!!!!");
}

/* Función cascarón para usar desde button Ejecutar1 */
function saludoAux(){
        nombre=prompt("como te llamaa");
        saludo(nombre);
}


function suma(a,b){

    return (a + b);}



/*Cascaron suma para button */
function sumaAux(){
         a=parseInt(prompt("ingrese primer numero a sumar"));
         b=parseInt(prompt("ingrese segundo numero a sumar"));
         c=0;
         c=suma(a,b);
         console.log(a+" + "+b+" = "+c);
}


function minuto(horas){
        return horas*60;}

function minutosaux(){
    horas=parseInt(prompt("ingrese horas"));
    console.log(horas+" son equivalentes a "+minuto(horas)+" minutos");
}