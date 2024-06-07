let mensaje = "cual es su nacionalidad?";
let nacionalidad = prompt(mensaje);
console.log(nacionalidad);

let mensaje1 = "cual es su profesion?";
let profesion = prompt(mensaje1);
console.log(profesion);

let mensaje2 = "cuantos kms caminas ?";
let kilometros = prompt(mensaje2);
console.log(kilometros);

function filosofoHipster (nacionalidad, profesion, kilometros){
if (nacionalidad == 'argentino' && profesion == "musico" && kilometros > 2){
return "soy un filosofo hipster";
} 
else {
return aun no soy un filosofo hipster;
}
}

