// FECHA LA CUAL EL CONTRARELOJ SE ACABARA
var fechaFinal = new Date("Sep 15, 2024 16:00:00").getTime();

// ACTUALIZA LA FUNCION CADA SEGUNDO
var x = setInterval(function () {

    // OBTIENE LA FECHA ACTUAL Y LA GUARDA EN ESA VARIABLE
    var fechaActual = new Date().getTime();

    // OPERACION QUE CALCULA EL TIEMPO QUE QUEDA Y LO GUARDA EN ESE VARIABLE
    var tiempoQqueda = fechaFinal - fechaActual;

    // CALCULA LOS DIAS , HORAS , MINUTOS Y SEGUNDOS QUE QUEDAN Y LO GUARDA EN VARIABLES PARA LUEGO MOSTRARLO
    var dias = Math.floor(tiempoQqueda / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tiempoQqueda % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tiempoQqueda % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tiempoQqueda % (1000 * 60)) / 1000);

    // MUESTRA EN EL CONTADOR EL TIEMPO QUE QUEDA

    document.getElementById("cuenta-atras").innerHTML = "Quedan: " + dias + "dias " + horas + "horas "
        + minutos + "minutos " + segundos + "segundos ";

    // SI EL CONTADOR LLEGA A 0 SALE ESE MENSAJE
    if (tiempoQqueda < 0) {
        clearInterval(x);
        document.getElementById("cuenta-atras").innerHTML = "¡LA CUENTA ATRAS  HA LLEGADO A SU FIN!";
    }
}, 1000);

var nar = document.getElementsByClassName("naranja");

for (let i = 0; i < nar.length; i++) {

    nar[i].addEventListener("mouseover", function () {
        this.style.color = "orange";
    });

    nar[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}

var zoom = document.getElementsByClassName("cajas");

for (let i = 0; i < zoom.length; i++) {

    zoom[i].addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.border = "3px solid white";
    });

    zoom[i].addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.border = "0px";
    });
}

var fotos = document.getElementsByClassName("imagenes");

for (let i = 0; i < fotos.length; i++) {

    fotos[i].addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.filter = "grayscale(100%)";
    });

    fotos[i].addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.filter = "none";
    });
}

var patrocinadores = document.getElementsByClassName("patro");

    for(let i=0; i<patrocinadores.length; i++){
    
        patrocinadores[i].addEventListener("mouseover", function(){
            this.style.transform = "scale(1.1)";
        });

        patrocinadores[i].addEventListener("mouseout", function(){
            this.style.transform = "scale(1)";
        });
    }