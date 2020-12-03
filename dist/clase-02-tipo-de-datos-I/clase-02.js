"use strict";
// Tipos primitivos o tipos basicos
// Boolean
var estaConectado = true;
var estaInscrito;
estaInscrito = false;
estaInscrito = true;
// estaInscrito = 2; //no es valido, por el tipo de dato
function tieneDescuento(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log("Tiene descuento('angular'): ", tieneDescuento('angular'));
// Number
var estudiantes = 100;
var cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'typescript') {
        return 100;
    }
    return 0;
}
// Hexadecimal
var inscritosCursoTypescript = 100;
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
//  Number y binario
var binario = 10;
console.log('binario', binario);
// Number y octal
var octal = 493;
console.log('octal', octal);
// String
var nombre = 'Alex';
var apellido = 'Ku';
var nombreCompleto = nombre + ' ' + apellido;
console.log('Nombre completo', nombreCompleto);
// String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('Nombre completo 2', nombreCompleto2);
var arregloCursos = ['TypeScript', 'Angular'];
var mensaje = "\n    Mi nombre es " + nombreCompleto + " y tengo " + arregloCursos.length + " cursos. \n    \u00A1Gracias por asistir!\n";
console.log(mensaje);
// Tipo de datos Especiales en TypeScript
// Tipo Any
// Puede conetener cualquier tipo de dato, es desconocido o sirve para los metodos o funciones que no se sabe que va a retornar
var desconocido; // seria como : var desconocido;
desconocido = 'Hola';
desconocido = 2;
var desconocido2;
desconocido2 = 'Hola2';
desconocido2 = 22;
// Tipo Void
// No devuelve ni un valor, y solo se recomienda utilizarlo con funciones o cuando se tiene que mostrar solo mensaje
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : 'Suscribete al curso';
    console.log(mensaje);
}
mostrarContenido('TypeScript');
// Tipo Never
// Se recomienda usar solo en funciones donde tiene que retornar algun error
var nunca;
function retornaError(error) {
    throw new Error('Error TypeScript. ' + error);
    // Nunca retorna un valor
}
// retornaError('valor inesperado');
function cicloInfinito() {
    while (true) {
    }
}
// Tipo Null y undefined
var variableUndefined;
var variableNull;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
var variableSinValor; //por defecto es undefined
console.log('variable sin valor', variableSinValor);
// Funciones en typescript
// el signo de interogacion "?, indica que puede ser un parametro opcional
function saludos(nombre) {
    if (nombre) {
        return 'hola ' + nombre;
    }
    return 'hola';
}
console.log(saludos(nombreCompleto));
console.log(saludos()); //Sin parametro, es opcional
// Arreglos en typescript
var cursos2;
cursos2 = ['TypeScript', 'Angular'];
// Arreglos generics
var nombres;
nombres = ['Alex', 'Manuel'];
var arreglo = [2, 'alex', true];
// Tuplas
// Se define con el tipo de dato dentro de los corchetes
var infoCursos = ['typescript', 100];
infoCursos = ['angular', 200];
var curso2 = ['typescript', 150, '24/03/2020'];
console.log('curso ', curso2);
var nuevosInscritos = 10;
console.log('fecha de inicio', curso2[2]);
console.log('Total de inscritos ', curso2[1] + nuevosInscritos);
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);
// EJECUTAR EN LA CONSOLA
// node dist/clase-02-tipo-de-datos-I/clase-02.js
