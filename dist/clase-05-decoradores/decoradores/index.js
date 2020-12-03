"use strict";
/**
 * DECORADORES
 * Es una funcion que recibe como parametro la entidad que se quiere decorar
 * Siempre se inicializa con un @ y encima de la cabecera de la clase
 */
Object.defineProperty(exports, "__esModule", { value: true });
//#2#
function Entidad(config) {
    console.log('Entidad', config); // Imprime la Entidad concatenando como una funcion de Curso
    // Retornar una funcion que se convierta en la clase, funcion con  clase ya decorada
    return function (target) {
        // Dinamicamente: se asigna la propiedad clave a la clase
        target.clave = config.clave;
        console.log('Target', target); // muestra el estado de la clase objetivo
    };
}
exports.Entidad = Entidad;
// Funcion que se encarga de listar o no las propiedades de una clase
function enumerable(value) {
    /**
     * funcion que cambia de valor a value
     * Target puede representar una clase o una funcion
     * propertyKey
     * PropertyDescriptor da el tipo correcto
     */
    return function (target, propertyKey, descriptor) {
        // en descriptor enumerable adquiere el valor que venga como paramatro
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
// Evita que mas adelante un programador asigne cosas que no se desee a un objeto
function readonly(target, name, descriptor) {
    // propiedad writable que permite habilitar o deshabilitar el modo de escritura
    descriptor.writable = false;
    // retorna el estado de descriptor
    return descriptor;
}
exports.readonly = readonly;
