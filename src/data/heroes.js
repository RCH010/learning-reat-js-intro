const heroes = [
// export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


const owners = ['DC', 'Marvel'];
// export const owners = ['DC', 'Marvel'];
// export por defecto
// export default heroes;

//EXPORT TODOS
export {
    heroes, // as default // eso puede hacer uno que sea por defecto
    owners
};