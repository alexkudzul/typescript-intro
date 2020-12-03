// INTERFACES EN TYPESCRIPT
// En typescript es como un agrupador de tipo de datos

// ? indica que es opcional el indenficador
interface ICurso{
    nombre: string,
    indetificador?: number
}

// La interface como tipo de dato
let cursoTypeScript: ICurso = {
    nombre: ' TypeScrip',
    indetificador:1
}

cursoTypeScript = {
    nombre : 'JavaScript',
    indetificador:2
}

// Uso de los identificadores opcionales ? indica que sera opcional un parametro o propiedad

let curso22: ICurso;
curso22 = {
    nombre: 'Angular'
}
curso22 = {
    nombre: 'TypeScript',
    indetificador: 100
}

console.log('cursoTypeScript', cursoTypeScript);


// EXTENDIENDO INTERFACES | HERENCIA DE INTERFACES

//  reutiliza codigo de una interface base 

// Definir un interface con el nombre CursoGoogle, tendra las mismas propiedades que ICurso, pero con un nuevo atributo
interface CursoGoogle extends ICurso {
    costo : number;
}

// Dar valores al curso
const primerCurso: CursoGoogle = {
    nombre: 'TypeScript desde cero', //ICurso
    indetificador: 200, //ICurso
    costo: 100 // CursoGoogle
}

console.log('primerCurso', primerCurso);

// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js