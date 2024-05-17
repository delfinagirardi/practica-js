function rectangulo (ancho,altura){
  return ancho * altura;  
}
rectangulo (25,30);

function triangulo (base, altura){
    return (base*altura)/2
}
triangulo (10, 50);

function largoDelArray (arr){

return arr.length;
}
let miArray = [1,2,3,4,5,6]
console.log(largoDelArray(miArray));

function cantidadDeLetras (palabra){
    return palabra.length;
}
let miPalabra = "hola";
console.log(cantidadDeLetras(miPalabra));

function dolarHoy(pesos, conversionRate = 220){
    const dollars = pesos/ conversionRate
    return dollars
}
function precioFinal(precio){
    const IVA = 0.21;
    const precioConIVA = precio * (1+IVA);
    return precioConIVA
}
const precio = 100;
console.log(precioFinal(precio));

function mitad(numero){
    return numero/2;
}
const numero1 = 10;
console.log(mitad(numero1));

function menosUno(numero){
    return numero -1;
}
const numero2 = 10;
console.log(menosUno(numero2));

function triple (numero){
    return numero * 3;
}
const numero3 = 10;
console.log(triple(numero3));

function anteriorDelTriple(numero){
    return (numero*3)-1;
}
const numero4 = 10;
console.log(anteriorDelTriple(numero4));
