export {} // Modulo en TS

// Alias para tipos de datos en TypeScript
// Nos permite personalizar o combinar un tipo de dato

type alfanumerico = string | number;

let curso: string = 'TypeScript';
// Cursos codigo: JavaScript = 1, TypeScript = 2
// curso = 1; // JavaScript

let cursoNuevo: string | number;
cursoNuevo = 'JavaScript';
cursoNuevo = 2;

function getCurso():string | number{
    // return 'JavaScript';
    return 1;
}

// Arreglos

let cursos: string[]= ['JavaScript', 'TypeScrript'];
let cursos2: (string | number)[] = ['JavaScript', 'TypeScript', 1];

console.log('cursos', cursos);
console.log('cursos2', cursos2);


// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js