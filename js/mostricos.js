const botonMostrico = document.getElementById("boton_mostrico") 
console.log(botonMostrico)

function manejarclick() {
    alert("Hiciste click")
}

botonMostrico.addEventListener("click",manejarclick)