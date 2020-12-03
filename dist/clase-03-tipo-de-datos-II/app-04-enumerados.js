"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENUMERADOS EN TYPESCRIPT
// Es una forma que tiene typescript para poder crear nuestros propios tipos de datos(datos reducidos)
// Permite modificar el indice de cada enumerado
// type Curso : string | number; (datos no reducidos, en number peermite agregar expresiones regulares)
var Curso;
(function (Curso) {
    Curso[Curso["JavaScript"] = 0] = "JavaScript";
    Curso[Curso["TypeScript"] = 1] = "TypeScript";
    Curso[Curso["Angular"] = 2] = "Angular"; //indice 2
})(Curso || (Curso = {}));
var curso = Curso.JavaScript;
console.log('Curso', curso);
console.log('Curso', Curso[curso]);
// Ejemmplo 2
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes";
})(Dia || (Dia = {}));
console.log('Viernes', Dia.Viernes);
// Permite modificar el indice de cada enumerado y automaticamente el siguiente sera de acuerdo a lo que se tiene modificado 
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 6] = "Domingo";
})(FinSemana || (FinSemana = {}));
console.log('Sabado', FinSemana.Sabado);
console.log('Domingo', FinSemana.Domingo);
// Permite agaregar a los indices cadenas
var Mes;
(function (Mes) {
    Mes["Enero"] = "Ene";
    Mes["Febrero"] = "Feb";
    Mes["Marzo"] = "Mar";
    Mes["Abril"] = "Abr";
})(Mes || (Mes = {}));
console.log('Marzo', Mes.Marzo);
// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js
