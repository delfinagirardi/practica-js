let mensaje = "Cual es tu nombre?";
let resultado = prompt(mensaje);
console.log (resultado)

let mensaje1 = "cual es tu edad?";
let resultado1 = prompt(mensaje1);
console.log(resultado1) 

let mensaje2 = "te gustan los deportes?";
let fanDeportes = confirm(mensaje2);
console.log(fanDeportes)

let mensaje3 = "cual es tu nombre?";
let nombre = prompt(mensaje);
console.log(nombre)
let mensaje4 = `Muchas gracias ${nombre} por responder nuestras preguntas`;
let resultado4 = alert(mensaje4);
console.log(resultado)

const usuario = {
    nombre: resultadouno,
    fanDeportes: fanDeportes,
    deportistaProfesional: function(){
        if (this.fanDeportes){
            return 'si, soy fan de los deportes';
        }else{
            return 'no soy tan fan aun de los deportes';
        }
    }

}
console.log(usuario.deportistaProfesional());
