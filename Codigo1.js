
document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var nuevoMensaje = "";
    for(i=0;i<mensaje.length ;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNuevo = codMsj + 2;
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    document.getElementById("new_msj").innerHTML = nuevoMensaje;
   })
   document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var nuevoMensaje = "";
    for(i=0;i<mensaje.length ;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNuevo = codMsj + 2;
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    document.getElementById("new_msj").innerHTML = nuevoMensaje;
   })

function bnt(){
    var continuar = document.getElementById("ctnr").value;

    alert("¡Bienvenid@ al lugar secreto de los teletubies!");
}
function enviar(){
    var enviar = document.getElementById("enviar").value;
    
    alert("Gracias por pertenecer a la familia Teletubie <3");
}

document.getElementById("boton").addEventListener("click",function(){
var n = document.getElementById("msj2").value;
var r = document.getElementById("new_msj").textContent;
if (n == r){
    window.location="codigo2.html";
}
else {
    alert("Tu codigo teletubie es invalido, por favor vuelve a intentarlo")
}
})
document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var codigosNuevos = [];
    var nuevoMensaje = "";
    for(i=0;i<mensaje.length ;i++){
        var c = mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNuevo = codMsj + 2;
         if(codNuevo > 122){
             var d = codNuevo - 122;
             codNuevo = 96 + d;
         }
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    document.getElementById("new_msj").innerHTML = nuevoMensaje;
})
