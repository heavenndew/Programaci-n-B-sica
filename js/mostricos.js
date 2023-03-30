const botonMostrico = document.getElementById("boton_mostrico") 
console.log(botonMostrico)

function manejarclick() {
    alert("Seleccionaste mostrico ")
}

botonMostrico.addEventListener("click",manejarclick)