let cursos = ['TypeScript', 'Angular'];
console.log('cursos', cursos);

const inscritos = 20;

function suma(a: number,b: number){
    return a+b;
}

const resultado = suma(2,2);
console.log('2+2= ', resultado);

// Template literals
let codigo = `
    <button>Hola</button>
    <div></div>
`;
console.log('codigo', codigo);

// Backtiks ``
let curso = 'TypeScript';
let saludo2 = `Bienvenido al curso de ${curso}`;
console.log('saludo', saludo2);

// tsc -w
// node src/cursos.js

// EJECUTAR EN LA CONSOLA
// node dist/clase-01-introduccion/cursos.js