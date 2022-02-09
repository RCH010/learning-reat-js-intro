
// para importar un archivo

//PARTE 1
// import {heroes} from './data/heroes';  // por defecto busca un archivo de tipo js

//PARTE 2, el primero, heroes, es la importación por defecto, y lo
//  segundo, owners, ya es de otras importaciones que puede haber en los
// archivos.

// import heroes, {owners} from './data/heroes';

//PARTE 3
import { heroes, owners } from "../data/heroes";


// console.log(heroes);

// FIND
// el find recibe un callback, y pues va a empezar con un heroe
//  entonces depués con una función ahí mismo (o por separado)
//   debes hacer que regrese un return.
const getHeroById2 = (id) => {
    return heroes.find(hero => {
        return hero.id === id
    });
}

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

//  ---------------------------------
// FILTER
// se comporta igual que con find de callback, pero el filter
// filtra de todos los que hay.
export const getHeroByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

// console.log(getHeroById(2));
// console.log(getHeroByOwner('DC'));

// -----------------------------------
// se puede hacer una expoertación por defecto, que esto sería
//  que en el otro archivo, del que vas a expoertar, nada más se pone
//  export default { ...
//      y aca este archivo es import cosa, sin llaves
