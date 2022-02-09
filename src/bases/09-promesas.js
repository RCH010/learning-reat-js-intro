
// PROMESAS
import { getHeroByOwner, getHeroById } from "./bases/08-import-export";
// <Algo que queda pendiente>

// por naturaleza, las promesas son asincronas
// entonces primro se ejecuta lo sincrono, osea lo secuencial
// y hasta que termina lo demás, va a resolver las promesas...

// las promesas se crean con un argumento que es un  callback 
// recibe dos argunmentos, el call bac (resolve y reject) -- esos 
//  son los nombres por conveción.
// resolve -> es otro callback, que se ejecutara cuando todo termine correctamente
// reject -> tu lo vas a ejecutar cuando la promesa falla
// const entrega = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(2);
//         console.log(hero);
//         // resolve(hero);
//         reject('Error')
//         console.log('2 sec later');
//     }, 1500);
// });

// entrega
//     .then((heroe) => {
//         console.log('Then de la promesa', heroe);
//     })
//     .catch((err) => {
//         console.warn(err);
//     })

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        const hero = getHeroById(id);
        if (hero) {
            resolve(hero);
        }else {
            reject('Not Found');
        }
    });
}

// getHeroByIdAsync(10).then(heroe => {
//     console.log('Se recibe: ', heroe);
// })
// .catch(err => {
//     console.warn(err);
// })
getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);