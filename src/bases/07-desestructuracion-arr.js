// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta','Trunks'];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//desestructuracion

const [personaA] = personajes;
console.log(personaA);
// la coma, es para que tome la segunda posicion
const [ ,personaB] = personajes;
console.log(personaB);

const retornaArr = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArr();
console.log(letras, numeros);

// Actividad
const useState = (valor) => {
    return [valor, () => (console.log('Hola Mundo'))];
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setName] = useState('Goku');
console.log(nombre);
setName();