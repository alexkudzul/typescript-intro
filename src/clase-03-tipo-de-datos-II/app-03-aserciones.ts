export{} //evitar tener problemas con variables ya declaradas en otros archivos ts

// Aserciones o castings se utiliza el simbolo "<>" de tipos en TS | Type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso', numeroCurso);

let estudiante: {nombre:string, curso:string};
// estudiante.nombre = 'Alex';
// estudiante.curso = 'JavaScript';

type Estudiante = {nombre:string, curso:string};
let estudiante2 = <Estudiante>{};
estudiante2.nombre = 'Manuel';
estudiante2.curso = 'TypeScript';

console.log('estudiante2', estudiante2);

let estudiante3 = `{"nombre":"Alex", "curso":"JavaScript"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3);

console.log('objetoEstudiante',objetoEstudiante);

// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js