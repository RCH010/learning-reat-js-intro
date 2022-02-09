const nombre = 'Raúl';
const appellido = 'Castellanos';

const nombreCompleto = nombre + ' ' + appellido;

console.log(nombreCompleto);
console.log(`Hola ${nombre} 
de ${appellido} `);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Esta es una funcion: ${getSaludo("Lilia")}`)