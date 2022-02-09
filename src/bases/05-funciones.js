
// Funciones en JS

function saludar(nombre) {
    return `Hola ${nombre}`;
}
// es mejor asignar la función a una variable, para evitar posibles errores.
const saludar2 = function(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Raúl'));
console.log(saludar2('Raúl'));

// arrow function
const saludar3 = (nombre) => {
    return `Hola ${nombre}`;
}

// esto se puede simplificar más.. 
const saludar4 = (nombre) => `Hola ${nombre}`;
const saludar5 = () => `Hola mundo`; // si no recibiera parmetros

console.log(saludar3('Raúl'));
console.log(saludar4('Raúl'));
console.log(saludar5());

const getUser = () => {
    return {
        uid: 'ABC12',
        username: 'Rufo123'
    }
}
// si quisieras regresar el objeto asi como en saludar 4, digamos simplificando
//  se ponen los parentesis

const getUser2 = () => (
    {
        uid: 'ABC12',
        username: 'Rufo123'
    }
);

console.log(getUser());
console.log(getUser2());

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABSS',
        username: nombre
    };
};
const activeUSer = (nombre) => (
    {
        uid: 'ABSS',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
console.log(activeUSer('Maria'));
