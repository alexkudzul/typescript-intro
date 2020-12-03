"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Encapsulamiento(public, private, protected)
// Miembros o Modificador PUBLICO 
// se puede cambiar el estado de sus propiedades
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaEnLinea = /** @class */ (function () {
    // Funcion que permite crear objetos
    function EscuelaEnLinea(nombre) {
        this.cursos = []; // public de forma implicita
        this.nombre = nombre;
    }
    // Metodo o funcion
    EscuelaEnLinea.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaEnLinea;
}());
var escuelaEnLinea = new EscuelaEnLinea('Escuela');
var cursoJs = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
escuelaEnLinea.agregarCurso(cursoJs);
escuelaEnLinea.agregarCurso(cursoTS);
// ACCEDER A LOS ATRIBUTOS PUBLICOS, para cambiar el estado de sus propiedades
cursoJs.nombre = 'JavaScript desde cero';
cursoJs.id = 20;
console.log('escuelaEnLinea', escuelaEnLinea);
console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);
// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js
