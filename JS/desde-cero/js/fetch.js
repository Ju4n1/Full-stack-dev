
async function obtenerEmpleados(){
    
    const url ="js/empleados.json";

    //Para la funcionno async.
    // fetch(url)
    //     .then(resultado => resultado.json()) //retorna los datos al siguiente then.
    //     .then(datos =>{
            
    //         const { empleados } = datos;
            
    //         empleados.forEach(element => {
    //             console.log(element.nombre,element.id,element.puesto);
                


    //         })
    //     })     
     
    const resultado=await fetch(url);
    const datos=await resultado.json();
    console.log(datos);

        
}

obtenerEmpleados();