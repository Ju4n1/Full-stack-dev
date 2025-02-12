
//------------------Programación orientada a objetos--------------

/**
 * Objeto Literal
 */
const product={
    nombre:'tableta',
    precio:500,
}

//--------------------------------------------------------------

/**
 * Objeto constructor.
 */
function Producto(nombre,precio){
            this.nombre=nombre;
            this.precio=precio;
}

//Prototypes

Producto.prototype.formaterProducto=function(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

//const produ=new Producto("Monitor led",800);
//const prodd=new Producto("PC",1000);


  //console.log(produ.formaterProducto(),"\n",prodd.formaterProducto(),);


  //--------------------------------Clases----------------------------------------

  class Pro{
        constructor(nombre,precio){
            this.nombre=nombre;
            this.precio=precio;
        }

        formato(){
            return `El producto ${this.nombre} tiene un precio de ${this.precio}`; }


        
  }
//---------------Herencia------------
  class Libro extends Pro {
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }

    formato(){
        return `${super.formato()} y su isbn es ${this.isbn}`; 
    }
  
}

const produ=new Pro("Monitor led",800);
const prodd=new Pro("PC",1000);
const lib =new Libro("Harry Potter",400,"9991");

console.log(produ.formato());
console.log(prodd.formato());
console.log(lib.formato());

//--------------Try-Catch---------------------------


console.log("Antes eror");

try{
    console.log(crasheo);}
catch(error){
    console.log(error);}

console.log("Sigue depues eror");