"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aserciones o castings se utiliza el simbolo "<>" de tipos en TS | Type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso;
console.log('numeroCurso', numeroCurso);
var estudiante;
var estudiante2 = {};
estudiante2.nombre = 'Manuel';
estudiante2.curso = 'TypeScript';
console.log('estudiante2', estudiante2);
var estudiante3 = "{\"nombre\":\"Alex\", \"curso\":\"JavaScript\"}";
var objetoEstudiante = JSON.parse(estudiante3);
console.log('objetoEstudiante', objetoEstudiante);
// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js
