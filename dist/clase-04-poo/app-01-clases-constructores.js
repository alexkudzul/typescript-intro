"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursosEnLinea = /** @class */ (function () {
    // Funcion que permite crear objetos
    function CursosEnLinea(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    // Metodo o funcion
    CursosEnLinea.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return CursosEnLinea;
}());
var escuelaEnLinea = new CursosEnLinea('TypeScript');
escuelaEnLinea.agregarCurso('NodeJS');
console.log('escuelaEnLinea', escuelaEnLinea);
// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js
