

//Recupero el boton del html y creo un oyente para el mismo.
const boton=document.querySelector('#boton');
boton.addEventListener('click', function(){
            Notification.requestPermission()
                .then(resultado => console.log('El resultado es:',resultado))


})

if(Notification.permission=='granted'){
    new Notification('Esto es una notificacion',{
        icon:"img/favicon.png",
        body:"Curso JS"
    })
}