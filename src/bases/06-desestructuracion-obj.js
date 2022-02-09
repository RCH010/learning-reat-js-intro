// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// para no escribir toda la palabra persona: hay que extraer, desestrucutrar

// extrae lo que pongo entre llaves del objeto
const {nombre:nom, edad: age} = persona;
console.log(nom);
console.log(age);

//---------
const getPersona = (usuario) => {
    console.log(usuario);
}

// Puedes desestructurar al objeto desde lo que recibe la función
//  usando las llaves, y con la asignación de captan es como el valor
//  default de la constante.
const getPersona2 = ({clave:id, nombre, rango = 'Capitan'}) => {
    console.log(nombre, rango);
    // ahora digamod que
    return {
        nomCLave: id,
        anios: nombre,
    };
}


// 
const useContxt = ({clave:id, nombre, rango = 'Capitan'}) => {
    return {
        nomCLave: id,
        anios: nombre,
    };
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nomCLave, anios} = useContxt(persona);
    console.log(nomCLave, anios);
