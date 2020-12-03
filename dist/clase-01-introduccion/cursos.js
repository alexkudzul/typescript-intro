"use strict";
var cursos = ['TypeScript', 'Angular'];
console.log('cursos', cursos);
var inscritos = 20;
function suma(a, b) {
    return a + b;
}
var resultado = suma(2, 2);
console.log('2+2= ', resultado);
// Template literals
var codigo = "\n    <button>Hola</button>\n    <div></div>\n";
console.log('codigo', codigo);
// Backtiks ``
var curso = 'TypeScript';
var saludo2 = "Bienvenido al curso de " + curso;
console.log('saludo', saludo2);
// tsc -w
// node src/cursos.js
// EJECUTAR EN LA CONSOLA
// node dist/clase-01-introduccion/cursos.js
