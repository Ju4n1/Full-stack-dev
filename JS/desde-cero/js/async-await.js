
//------------Async await-----------------------

function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log("Descargo nuevos clientes espere...");
    
        //Simula la operación.
        setTimeout( ()=>{
            resolve('Clientes han sido descargados');
        }, 5000 );

    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve=>{
        console.log("Descargando pedidos ...espere....");
    
        //Simula la operación.
        setTimeout( ()=>{
            resolve('Los pedidos han sido descargados');
        }, 3000 );

    });
}

async function app(){
   try {
        //Tarda 5s + 3s = 8s    
        // const clientes= await descargarNuevosClientes();
        // const pedidos=await descargarUltimosPedidos();
        // //Este código depende del llamado de arriba "await" para ejecutarse.
        // console.log(clientes);
        // console.log(pedidos);

        //Mejora el perfonmanse terminando una en 3s y la otra en 5s en paralelo.
        const resulado=await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resulado[0]);
        console.log(resulado[1]);
    } catch (error) {
        console.log(error);
   }
}

app();

console.log("Este codigo no se bloquea");