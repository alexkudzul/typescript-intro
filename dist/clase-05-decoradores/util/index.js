"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enviamos una clase
function analizarClase(clase) {
    console.log('Clave:', clase.clave);
}
exports.analizarClase = analizarClase;
// Enviamos una clase
function mostrarPropiedades(clase) {
    // inspeciona las propiedades que tiene una clase
    for (var prop in clase.prototype) {
        console.log('prop', prop);
    }
}
exports.mostrarPropiedades = mostrarPropiedades;
var PI = 3.14;
exports.PI = PI;
