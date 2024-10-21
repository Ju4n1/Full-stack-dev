
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

/* Cascaron */
function cadenaAux(){
      s=prompt("ingrese cadena");
      
      console.log("la  cadena esta vacia? "+cadena(s));}

/* Promedio arreglo */
function promedioArray(a){
        salida=0;
        prom=0;
        for(i=0; i<a.length;i++){
            salida=salida+a[i];
        prom=i+1;}
return salida/prom;}

/* Cascarón */
function promAux(){
    let array= [1,2,3,4,5,6];
    
    console.log("el promedio del arreglo: [ ");
    for(i=0;i<array.length;i++){
        console.log(array[i]+"");
    }
    console.log("es: "+promedioArray(array));
}

/* Auto/marca/model/placa */

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

/* Patentes estacionamiento */
function estacionado(){
        
        salida=false;
        patente= parseInt(prompt("ingrese patente"));
        
        autos.forEach(element => {
                  if(patente==element.placa)
                    salida=true;
                       
           });
      
  console.log("el auto "+patente+" esta? "+salida);}


  /* Nombre/asistio/DNI */
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

/* Control asistensias */
function saludoYaAsistio(){

        personas.forEach(element => {
                if(element.yaAsistio==true)
                    saludo(element.nombre);
        });    
}
/* Nombre/numero sorteo */
let participantes = [

    {nombre:"Pedro",
     numero:1,},

    {nombre:"Roberto",
     numero:2,},
    
    {nombre:"Matias",
     numero:3,},

    {nombre:"Juan",
     numero:4,}

]

/* Checkear numero ganador */
function sorteo(gandor){

        i=0;
        esta=false;
        while(i<participantes.length&&!esta){
              if(participantes[i].numero==ganador)
                 esta=true;
        i++;}

        if(esta)
            console.log("el ganador del sorteo es :"+participantes[i-1].nombre);
        else console.log("el numero no se vendio");
}

/* Cascaron */
function sorteoAux(){
         ganador=parseInt(prompt("ingrese numero ganador"));
         sorteo(ganador);
}
/* Usuarios/mail */
let usuarios=[
    {nombre:"Juan",
     correo:"Juan@gmail.com" ,  
    },
    {nombre:"Pedro",
    correo:"Pedro@gmail.com" ,  
       },
       
    {nombre:"Matias",
    correo:"Matia@gmail.com" ,  
    },

    {nombre:"Roberto",        
    correo:"Robero@gmail.com" ,  
    },
]

/* Checkeo mail registrado */
function checkMail(mail){
    esta=false;     
    usuarios.forEach(element => {
        if(element.correo==mail)
            esta=true;
        
    });
    console.log("el mail "+mail+" esta registrado? .... "+esta);
}

/* cascaron */
function checkMailAux(){
    mail=prompt("ingese mail a verificar ");
    checkMail(mail);

}

/* Snsa tempraturas bajo 0 */
function temperatura(){
    temperaturas=[10,-2,4,-5,20,30,-1,0];
    dias=0;
    temperaturas.forEach(element => {
        if(element < 0)
            dias++;
        console.log(element);
    });
    console.log("Días bajo 0: "+dias);}

/* Nombre/edad */
let edades=[
    
    {nombre:"juan",
     edad:32,   
    },
    {nombre:"Pedro",
        edad:3,   
       },

    {nombre:"Matias",
    edad:18,   
    },
    {nombre:"Marcos",
    edad:2,   
       },
    
]

/* Mostrar mayores de edad */
function mayor(){
        edades.forEach(element => {
            if(element.edad>=18)
                console.log(element.nombre+" es mayor de edad tiene "+element.edad+" años");
            else console.log(element.nombre+" es menor de edad tiene "+element.edad+" años");
        });
}

/* Articlosnombre/precio/stock/comprado */
let articulos=[
    
    {nombre:"fideos",
     precio:"$1000",
     valor:1000,
     stock:10,
     comprado:false,
    },
    
    {nombre:"arroz",
     precio:"$3000",
     valor:3000,
     stock:100,
     comprado:false,
    },

    {nombre:"salsa tomate",
    precio:"$4000",
    valor:4000,
    stock:50,
    comprado:false,
    },

    {nombre:"azucar",
    precio:"$5000",
    valor:5000,
    stock:0,
    comprado:false,
    },
]

/* Control stock predefinido */
function controStock(st){
        articulos.forEach(element => {
            if(element.stock<=st)
                console.log("el stock de "+element.nombre+" debe reponerse");
        });
}

/* Cascaron */
function controlAux(){
        st=parseInt(prompt("ingrese stoc minimo"));
        controStock(st);
}

/* Marcar para comprar enlista */
function lista(){
        articulos.forEach(element => {
            element.comparar=true;
            console.log("compre: "+element.nombre);
        });
}

/* Nombre candidato/cant Votos*/
let candidatos=[

    {nombre:"Miriam Bregman",
     votos:2,
    },
    
    {nombre:"Javier Milei",
    votos:20000,
       },

       
    {nombre:"Patricia Bullrich",
    votos:14,
       },

    
    {nombre:"Sergio Massa",
    votos:19999,
    },

    
    {nombre:"Juan Schiaretti",
    votos:6,
       },
]

/* Resultados elecciones */
function scrutinio(){
     ganador=candidatos[0];
     candidatos.forEach(element => {
        console.log(element.nombre+": "+element.votos);
        if(element.votos>ganador.votos)
            ganador=element;
     });
console.log("el ganador es :"+ganador.nombre);}


/* Foreach if */
function descuento(descuento){
        
    articulos.forEach(element => {
            if(element.valor>=descuento)
                {element.valor=element.valor-(element.valor*0.05);
                 console.log("Precio actual: "+element.nombre+" con descuento: "+element.valor);}
                 else console.log("el producto "+element.nombre+" no tien escuento");
        
    });

}

/* Cascaron */
function descuentoAux(){
        des=parseInt(prompt("Ingrese valor descuento: "));
        descuento(des);
}

/*  foreach con if anidado */
function venta(nom){
        articulos.forEach(element => {
                if(element.nombre)
                    {element.stock--;
                     if(element.stock<=10)
                        {element.stock=100;
                         console.log("Repuse stock "+element.nombre);
                        }
                    }
        });

}
/* ---cascaron---- */
function ventaAux(){
        nombre=prompt("Ingrese producto: ");
        venta(nombre);
}

/* Lectura foreach */
function stockActual(){
    console.log("Productos disponibles: ");
        articulos.forEach(element => {
                    if(element.stock>0)
                      console.log("                      "+element.nombre);
                      
                        
        });
}

/* Generador contraseña aleatoria */
function generarPass(){
        pass="";
        //array caracteres permitidos
        caracteres=["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l",
             "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
              "x", "y", "z","0","1","2","3","4","5","6","7","8","9","+",
              "@","#","!","?","¿","¡","!","º"];
        
            for(i=0;i<8;i++)

                //numero radom redondeado con un maximo de longitud aray
                pass=pass+caracteres[Math.floor(Math.random() * caracteres.length)];
            console.log(pass);
}


/* Encuesta preguntas/respuestas */
let preguntas=[
    
    //pregunta
    {pregunta:"¿A o B?",
     
    // Cantidad de respuestas, A y B
     A:10,
     B:4,},

    {pregunta:"¿C o B?",
    A:1,
    B:13,},
    
    {pregunta:"¿A o C?",
    A:10,
    B:4,},

]



/* foreach lectura arreglo  */
function encuesta(){
   preguntas.forEach(element => {
        console.log(element.pregunta+" \nRespuesas 1: "+element.A+" \nRepuestas 2: "+element.B);
        
        
   });
   
}

/**
 * Declaro un oyente para el botón ejercicio 25 "btn-e25".
 */
document.getElementById("btn-e25").addEventListener("click",encuesta);


