"use strict";
// INTERFACES EN TYPESCRIPT
// En typescript es como un agrupador de tipo de datos
// La interface como tipo de dato
var cursoTypeScript = {
    nombre: ' TypeScrip',
    indetificador: 1
};
cursoTypeScript = {
    nombre: 'JavaScript',
    indetificador: 2
};
// Uso de los identificadores opcionales ? indica que sera opcional un parametro o propiedad
var curso22;
curso22 = {
    nombre: 'Angular'
};
curso22 = {
    nombre: 'TypeScript',
    indetificador: 100
};
console.log('cursoTypeScript', cursoTypeScript);
// Dar valores al curso
var primerCurso = {
    nombre: 'TypeScript desde cero',
    indetificador: 200,
    costo: 100 // CursoGoogle
};
console.log('primerCurso', primerCurso);
// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js
