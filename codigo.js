function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}
function eleccion(jugador){
   
    let resultado = " "
    if(jugador == 1){
        resultado = "Piedra 🪨"
    } else if(jugador == 2){
        resultado = "Papel 🗒️"
    } else if(jugador == 3){
        resultado = "Tijera ✂️"
    } else{
        resultado = " Mala eleccion ☠️ "
    }
    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

function combate(eleccionpc,eleccionjugador){
     if (eleccionpc==eleccionjugador) {
        alert("EMPATE!")
    } else if (eleccionjugador == 1 && eleccionpc == 3 ) {
        alert("GANASTE!")
        triunfos = triunfos + 1
        //1 es piedra, 2 es papel, 3 es tijera
        //piedra gana a tijera
    } else if (eleccionjugador == 2 && eleccionpc == 1) {
        alert("GANASTE!")
        triunfos = triunfos + 1
        //papel gana a piedra
    } else if (eleccionjugador == 3 && eleccionpc == 2) {
        alert("GANASTE!")
        triunfos = triunfos + 1
        //tijera gana a papel 
    }else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}




while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1, 3)
    jugador = prompt("Elije: 1 es piedra, 2 papel y 3 tijera")
    
    alert("pc elige:" + eleccion(pc))
    alert("jugador elige:" + eleccion(jugador))
    
    combate(pc,jugador)}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
