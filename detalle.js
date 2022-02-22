var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");		
pincel.fillStyle = "lightblue";
pincel.fillRect(0,0,600,400); 

function disenharCircunferencia(x,y,radio){
    pincel.fillStyle = "lightblue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}	
function limpiarPantalla(){
    pincel.clearRect(0,0,1500,1500);
}
var x = 0
function actualizarPantalla(){
    limpiarPantalla();
    disenharCircunferencia(x,20,10);
    x++;
}
setInterval(actualizarPantalla,12);