export{}
import { Curso } from './modelo/curso';
import { EscuelaDigital } from './modelo/escuela-digital';
import {analizarClase, mostrarPropiedades, PI} from './util'

/**
 * Los modulos en TypeScript definen un ambito
 * Permite agrupar variables, funciones, clases, etc.
 * Este contenido no es visible fuera del modulo a menos que se haga un export
 * Podemosimportar contenido de otros modulos con la instruccion import
 */


let typescript =  new Curso(1, 'TypeScript');

// Enviamos un clase como parametro
analizarClase(Curso);

/**
 * Para evitar que las definiciones de las funciones, se mantengan tal cual, si se quiere que sea solo de modo lectura creamos un decorador readonly
 * Evita que mas adelante un programador asigne cosas que no se desee a un objeto
 * Sobreescritura de la funcion
 * typescript.lectura = function(){} // el objeto typescript solo sera de lectura con una funcion vacia // ERROR: @readonly
 */

let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);

mostrarPropiedades(Curso); // muestra las propiedades de curso
console.log('Valor de PI', PI);

// EJECUTAR EN LA CONSOLA
// node dist/app-01-decoradores.js
// node dist/clase-05-decoradores/app-01-decoradores.js