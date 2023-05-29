
const hideButton = document.getElementById('botonEliminar');




//"añadir" juego

function mostrar(){
    document.getElementById('hide-image2').style.display = 'block';
}
// "modificar" juego





//"eliminando" el juego

hideButton.addEventListener('click', () => {
    let hideImage = document.getElementById('hide-image');
    hideImage.style.display = 'none';

})