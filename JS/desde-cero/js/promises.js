const usuarioAutenticado=new Promise((resolve,reject)=>{
    const aut=true;
    if(aut)
        resolve('Usuario autenticado');//Promesa cumplida.
    else
        reject('No se puede iniciar sesión');//No se cumple.
});


//Tres posible salida 
/*
    Pendind: No se cumple pero tampoco se rechza.
    Fulfilled: Ya se cumplió la promea.
    Rejcted: Se rechazo la prmesa.
   */
//console.log(usuarioAutenticado);

//Obtener los valores.
usuarioAutenticado
        .then((resultado)=>console.log(resultado))
        .catch((error)=>console.log(error))