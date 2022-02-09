// Arreglos de JS -- Es una coleccion de info en la misma variable

// no se recomeinda hacerlo asi, a menos que sea para crear un arreglo de tamaño inicial o fijo.
// const arr = new Array(100);
// const arr = new Array();

const arr = [];
// no tannn recomendable usar push
// se ùede usar un spread (...)
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log(arr);

// let arr2 = [arr.concat([5])];
// el operador spread (...) manda cada uno de los elemenots,
// del que hace la copia.
let arr2 = [...arr, 5];

// metodo map -- usando arrow function
const arr3 = arr2.map((x)=> {
    return x * 2;
})

//metodo map usando function lit
const arr4 = arr2.map(function(num) {
    return num * 2;
})
// metodo map usando una funcion por separdo
function doubleup(value) {
 return value * 23;
}
const arr5 = arr2.map(doubleup);


console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
