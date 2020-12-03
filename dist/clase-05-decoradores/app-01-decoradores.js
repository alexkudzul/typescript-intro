"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./modelo/curso");
var escuela_digital_1 = require("./modelo/escuela-digital");
var util_1 = require("./util");
/**
 * Los modulos en TypeScript definen un ambito
 * Permite agrupar variables, funciones, clases, etc.
 * Este contenido no es visible fuera del modulo a menos que se haga un export
 * Podemosimportar contenido de otros modulos con la instruccion import
 */
var typescript = new curso_1.Curso(1, 'TypeScript');
// Enviamos un clase como parametro
util_1.analizarClase(curso_1.Curso);
/**
 * Para evitar que las definiciones de las funciones, se mantengan tal cual, si se quiere que sea solo de modo lectura creamos un decorador readonly
 * Evita que mas adelante un programador asigne cosas que no se desee a un objeto
 * Sobreescritura de la funcion
 * typescript.lectura = function(){} // el objeto typescript solo sera de lectura con una funcion vacia // ERROR: @readonly
 */
var escuela = new escuela_digital_1.EscuelaDigital();
util_1.analizarClase(escuela_digital_1.EscuelaDigital);
util_1.mostrarPropiedades(curso_1.Curso); // muestra las propiedades de curso
console.log('Valor de PI', util_1.PI);
// EJECUTAR EN LA CONSOLA
// node dist/app-01-decoradores.js
// node dist/clase-05-decoradores/app-01-decoradores.js
