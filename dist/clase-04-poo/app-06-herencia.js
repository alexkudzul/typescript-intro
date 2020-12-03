"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// HERENCIA DE CLASES
// Modificadores de acceso: PROTECTED/PROTEGIDO (Se utiliza cuando se aplica una herencia a una clase Padre y esta cuenta con propiedades privadas)
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
var Escuela = /** @class */ (function () {
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return Escuela;
}());
var EscuelaEnLinea = /** @class */ (function (_super) {
    __extends(EscuelaEnLinea, _super);
    // Funcion que permite crear objetos
    function EscuelaEnLinea(id, nombre, _paginaWeb) {
        var _this = 
        // super permite reusar el constructor de la superClase(Escuela), enviando el id y nombre al constructor de la clase Escuela
        _super.call(this, id, nombre) || this;
        _this._paginaWeb = _paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaEnLinea.prototype, "paginaWeb", {
        get: function () {
            return this._paginaWeb;
        },
        set: function (paginaWeb) {
            this._paginaWeb = paginaWeb;
        },
        enumerable: true,
        configurable: true
    });
    return EscuelaEnLinea;
}(Escuela));
var miEscuela = new Escuela(1, 'Mi Escuela');
var escuelaEnLinea = new EscuelaEnLinea(1, 'Escuela en linea', 'paginaweb.com');
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
console.log('escuelaEnLinea.paginaWeb', escuelaEnLinea.paginaWeb);
// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js
