var nombreError = document.getElementById('nombre-error');
var emailError = document.getElementById('email-error');
var mensajeError = document.getElementById('mensaje-error');
var telefonoError = document.getElementById('telefono-error');


function validarNombre() {
    var nombre = document.getElementById('contacto-nombre').value;
    if(nombre.length == 0) {
        nombreError.innerHTML = 'El nombre es requerido';
        return false;
    }
    if(!nombre.match(/^[A-Za-z]{4,16}$/)) {
        nombreError.innerHTML = 'Escribe tu nombre'
        return false;
    }
    nombreError.innerHTML = '<i class="fa-solid fa-circle-check check"></i>'
    return true;
}
function validarTelefono(){
    var telefono = document.getElementById('contacto-telefono').value;
    if(telefono.length == 0){
        telefonoError.innerHTML = 'El teléfono es requerido';
        return false;
    }
    if(telefono.length !== 10){
        telefonoError.innerHTML = 'El teléfono no puede superar los 10 dígitos';
        return false;
    }
    if(!telefono.match (/^[0-9]{10}$/)){
        telefonoError.innerHTML = 'Solo dígitos por favor';
        return false;
    }
    telefonoError.innerHTML = '<i class="fa-solid fa-circle-check check"></i>';
    return true;

}
function validarEmail(){
    var email = document.getElementById('contacto-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'El email es requerido'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'El email es inválido'
        return false;    
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check check"></i>';
    return true;
}
function validarMensaje(){
    var mensaje = document.getElementById('contacto-mensaje').value;
    var requerido = 60;
    var falta = requerido - mensaje.length;
    
    if(falta>0) {
        mensajeError.innerHTML = falta + ' caracteres mas requeridos';
        return false;
    }
    mensajeError.innerHTML = '<i class="fa-solid fa-circle-check check"></i>';
    return true;
}
function confirmacion(){
    var respuesta=confirm("¿Deseas enviar esta información?");
    if(respuesta==true){
        return true;
    }
    else {
        return false;
        
    }
}
botonHab.addEventListener("click", mostrarHab);
botonExp.addEventListener("click", mostrarExp);
botonHabOcul.addEventListener("click", ocultarHab)
botonExpOcul.addEventListener("click", ocultarExp)
function mostrarHab(){
    let botonHab = document.getElementById("botonHab")
    document.getElementById('listaHab').style.display = 'block';
}
function ocultarHab(){
    let botonHab = document.getElementById("botonHabOcul")
    document.getElementById('listaHab').style.display = 'none';
}
function mostrarExp(){
    let botonExp = document.getElementById("botonExp")
    document.getElementById('listaExp').style.display = 'block';
}
function ocultarExp(){
    let botonHab = document.getElementById("botonExpOcul")
    document.getElementById('listaExp').style.display = 'none';
}