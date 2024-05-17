const misDatos = {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    comidasFavoritas: ["Pizza", "Sushi", "Tacos"]
};
console.log(misDatos.nombre);
console.log(misDatos.apellido);
console.log(misDatos.dni);
console.log(misDatos.comidasFavoritas);
console.log(misDatos.comidasFavoritas[0]);

const misDatos2 = {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "12345678",
    edad: 30,
    comidasFavoritas: ["Pizza", "Sushi", "Tacos"],
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
    }
};

console.log(misDatos2.saludar());
