const activo = false;

let mensaje = '';

mensaje = (activo)? 'activo':'inactivo';
// para algo tipo ternario pero con una solo es:
const prueba = activo && 'Activo';
// esto es como activo es bool, eso define si pasa o no pasa
//  y esto regresa lo otro, mientras no sea null.. o asi
console.log(mensaje);