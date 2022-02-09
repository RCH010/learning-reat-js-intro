// Esto es un objeto literal -- o diccionario
// Estos trabajan como pares

const persona = {
    nombre: 'Tony',
    appellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'NY',
        zip: 64700,
        lat: 12.3423,
        long: 143.232,
    },
};

console.log(persona)
// console.log({persona})

// Esto es una referencia a...
// no es uno nuevo valores
//const persona2 = persona;

// Con los tres puntos esto si hace una copia.
const persona2 = {...persona};
persona2.nombre = 'Luis';
console.log(persona);
console.log(persona2);

