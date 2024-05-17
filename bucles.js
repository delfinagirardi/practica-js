for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

let base = 5; 
let resultados = []; 

for (let i = 1; i <= 10; i++) {
    resultados.push(base * i); 
}

console.log(resultados); 
const ganancias = [100, -50, 200, -75, 150, -100, 300, -25, 50, -150]; 
let suma = 0; 

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i]; 
}

console.log("La suma de las ganancias es:", suma); 
let healingIsDifficult1 = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult1.length; i++) {
    console.log(healingIsDifficult1[i]);
}
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i + 1}. ${healingIsDifficult[i]}`);
}
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    let mensaje1 = `Hola ${persona.nombre} ${persona.apellido} criatura viajera!`;
    let mensaje2 = `Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad || "Desconocida"}`;
    console.log(mensaje1);
    console.log(mensaje2);
}
