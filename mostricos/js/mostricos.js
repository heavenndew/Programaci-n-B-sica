function iniciarMostricos(){
    const botonMostrico = document.getElementById("boton_mostrico") 
    botonMostrico.addEventListener("click",manejarclick)
}

function manejarclick() {
    alert("Seleccionaste mostrico ")
}



window.addEventListener('load', iniciarMostricos)