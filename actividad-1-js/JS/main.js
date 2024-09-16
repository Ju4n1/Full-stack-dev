
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

/* Cascaon para button */
function minutosaux(){
    horas=parseInt(prompt("ingrese horas"));
    console.log(horas+" horas son equivalentes a "+minuto(horas)+" minutos");
}

function parimpar(numero){
    salida=""; 
    if(numero % 2==0)
        salida="par";
    else salida="impar"
return salida;}

/* Casacaron para button*/
function parimparAux(){
        numero=parseInt(prompt("Ingrese numero: "));
        console.log(numero+" es "+parimpar(numero));
}

function comparar(a,b){
      salida=1;  
      if(a<b)
        salida=b;
      else salda=a; 
return salida;}

/* Cascaron para button*/
function compararAux(){
        a=parseInt(prompt("Ingrese primer número a comparar"));
        b=parseInt(prompt("Ingrese segundo número a comparar"));
        console.log(comparar(a,b)+" es mayor")
}

function area(base,altura){
    return base*altura;}

/* Cascaron para button */
function areaAux(){
        base=parseInt(prompt("Ingrese base base"));
        altura=parseInt(prompt("Ingrese altura altura"));
        console.log("el area del rectangulo de "+base+" x "+altura+" es "+area(base,altura));
    }

function iva(precio){
        iv=precio*0.21;
return precio+iv;}

/* Cascaron...*/
function ivaAux(){
        precio=parseInt(prompt("Ingrese precio"));
        console.log("el pecio final con iva incluido: "+iva(precio));
}

function mayor(){
    let salida=0;
    let array=[30,2];
    if(array[0] > array[1])
        salida=array[0];
    else salida=array[1];
    console.log("entre "+array[0]+" y "+array[1]+" el mayor es: "+salida);
}

function gradosFar(grados){
        return((grados*(9/5))+32);
    }

/* Cascaron...*/
function gradosFarAux(){
        let grados=parseInt(prompt("ingrese gracos celsius: "));
        console.log(grados+" equivale a "+gradosFar(grados)+" farenheit");
}

function cadena(s){
    
    salida=(s.length==0);

return salida;}

function cadenaAux(){
      s=prompt("ingrese cadena");
      
      console.log("la  cadena esta vacia? "+cadena(s));}


function promedioArray(a){
        salida=0;
        prom=0;
        for(i=0; i<a.length;i++){
            salida=salida+a[i];
        prom=i+1;}
return salida/prom;}


function promAux(){
    let array= [1,2,3,4,5,6];
    
    console.log("el promedio del arreglo: [ ");
    for(i=0;i<array.length;i++){
        console.log(array[i]+"");
    }
    console.log("es: "+promedioArray(array));
}

/*  ejercicios con objetos */

let  autos=[{
    marca:"Fiat",
    modelo:"147",
    placa:123,
},

{
    marca:"Ford",
    modelo:"F-100",
    placa:456,
},

{
    marca:"Chevrolet",
    modelo:"Camaro",
    placa:789,
},

{
    marca:"Citroen",
    modelo:"2cv",
    placa:100,
},

]


function estacionado(){
        
        salida=false;
        patente= parseInt(prompt("ingrese patente"));
        
        autos.forEach(element => {
                  if(patente==element.placa)
                    salida=true;
                       
                    
                   
                     
                     
                     
                                
        });
      
  console.log("el auto "+patente+" esta? "+salida);}

let personas=[
  
             {
              nombre:"Pedro",
              yaAsistio:true,
              dni:123,
             },

             
             {
                nombre:"Juan",
                yaAsistio:false,
                dni:321,
               },

               
             {
                nombre:"Matias",
                yaAsistio:true,
                dni:456,
               },

]

function saludoYaAsistio(){

        personas.forEach(element => {
                if(element.yaAsistio==true)
                    saludo(element.nombre);
        });    
}