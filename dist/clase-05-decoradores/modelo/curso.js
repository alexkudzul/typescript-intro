"use strict";
// Decorador 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * #2# invoca una funcion que esta enviando parametros, un objeto vacio
 * tambien permite recibir un conjunto de parametros
 * clave, parametro para identificar una clase de otra
 */
var index_1 = require("../decoradores/index");
// @Entidad //  #1#
// #2#
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = '';
    }
    // @decorador en una funcion
    Curso.prototype.getPrueba = function () {
        return this.prueba;
    };
    /**
     * Para evitar que las definiciones de las funciones, se mantengan tal cual, si se quiere que sea solo de modo lectura creamos un decorador readonly
     * Evita que mas adelante un programador asigne cosas que no se desee a un objeto
     */
    Curso.prototype.lectura = function () {
    };
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        index_1.enumerable(false) // No aparece como propiedad al hacer console.log ya que contiene un false
    ], Curso.prototype, "getPrueba", null);
    __decorate([
        index_1.readonly
    ], Curso.prototype, "lectura", null);
    Curso = __decorate([
        index_1.Entidad({
            clave: 'Curso'
        })
    ], Curso);
    return Curso;
}());
exports.Curso = Curso;
