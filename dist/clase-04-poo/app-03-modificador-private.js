"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Encapsulamiento(public, private, protected)
// Miembros o Modificador PRIVADO
// Solo pueden acceder desde la misma clase, otro objeto externo de la clase Curso no podra acceder a los propiedades
var Curso = /** @class */ (function () {
    // En TypeScript se puede simplificar el codigo de esta forma, definir los atributos y los parametros del constructor en una linea
    // Se define las propiedades como parametros del constructor y se asignan con el mismo nombre
    // private id: number;
    // private nombre: string; 
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        // this.id = id;
        // this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaEnLinea = /** @class */ (function () {
    // Funcion que permite crear objetos
    function EscuelaEnLinea(nombre) {
        this.nombre = nombre;
        // Atributos
        // private nombre: string; 
        this.cursos = [];
        // this.nombre = nombre;
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
// ACCEDER A LOS ATRIBUTOS PUBLICOS, para cambiar el estado de sus propiedades, ya no se puede por que ahora es privado
// cursoJs.nombre = 'JavaScript desde cero';
// cursoJs.id = 20;
console.log('escuelaEnLinea', escuelaEnLinea);
// console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);// nombre es privado
// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js
