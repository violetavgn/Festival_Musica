

document.addEventListener('DOMContentLoaded', function() {

    navegacionFija();
     crearGaleria();
})


function navegacionFija(){

    const header=document.querySelector('.header');

    header.classList.add('fijo');




}



function crearGaleria(){
        const cantidad_imagenes=16;

        const galeria = document.querySelector('.galeria-imagenes');
    
        for(let i=1; i<=cantidad_imagenes; i++){
            
            const imagen = document.createElement('IMG');

            imagen.src = `src/img/gallery/full/${i}.jpg`;

            imagen.alt="Imagen galeria";

            //Event handler

            imagen.onclick = function(){
                mostrarImagen(i);
            }

            galeria.appendChild(imagen);
        }
}

function mostrarImagen(i){

    const imagen = document.createElement('IMG');

    imagen.src = `src/img/gallery/full/${i}.jpg`;

    imagen.alt="Imagen galeria";

    const modal=document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick=cerrarModal;

    //Botón cerrar modal
    const cerrarModalBtn=document.createElement('BUTTON');
    cerrarModalBtn.textContent="X";
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick=cerrarModal;

    

    modal.appendChild(imagen);

    modal.appendChild(cerrarModalBtn);

    const body=document.querySelector('body');
    body.appendChild(modal);
}

function cerrarModal(){
    const modal=document.querySelector('.modal');
    modal.classList.add('fadeOut');

    setTimeout(()=>{
        modal.remove();
    }, 500);
}