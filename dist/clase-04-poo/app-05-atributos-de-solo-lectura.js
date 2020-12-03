"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// METODOS SET Y GET, Permite acceder a las propiedades privadas
// ATRIBUTOS DE SOLO LECTURA, palabra reservada readonly
// Nos permite tener un mejor control sobre que variables queremos modificar
var Curso = /** @class */ (function () {
    // En TypeScript se puede simplificar el codigo de esta forma, definir los atributos y los parametros del constructor en una linea
    // Se define las propiedades como parametros del constructor y se asignan con el mismo nombre
    // private id: number;
    // private nombre: string; 
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        // this.id = id;
        // this.nombre = nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        // Permite obtener el estado de "id"
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        // NO SE PUEDE CAMBIAR EL ID DEL CURSO por el readonly
        // Permite cambiar el estado de "id"
        // set id(id: number){
        //      this._id = id;
        // }
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var EscuelaEnLinea = /** @class */ (function () {
    // Funcion que permite crear objetos
    function EscuelaEnLinea(_nombre) {
        this._nombre = _nombre;
        // Atributos
        // private nombre: string; 
        this.cursos = [];
        // this.nombre = nombre;
    }
    Object.defineProperty(EscuelaEnLinea.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
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
// ACCEDER A LOS ATRIBUTOS PRIVADOS, con GET y SET
// Con readonly solo se puede hacer el modo de lectura (GET) 
// cursoJs.nombre = 'JavaScript desde cero'; // Asignacion: SET
// cursoJs.id = 20; //Asginacion: SET
console.log('Nombre cursoJS', cursoJs.nombre); // Leyendo con el metodo GET
console.log('escuelaEnLinea', escuelaEnLinea);
console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre); // nombre es privado, pero se esta Leyendo con el metodo GET
// EJECUTAR EN LA CONSOLA 
// node dist/clase-04-poo/app-01-clases-constructores.js
