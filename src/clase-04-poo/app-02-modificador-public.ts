//evitar tener problemas con variables ya declaradas en otros archivos ts
export{}

// Encapsulamiento(public, private, protected)
// Miembros o Modificador PUBLICO 
// se puede cambiar el estado de sus propiedades

class Curso {
    public id: number; // public de forma explicita
    public nombre: string; // public de forma explicita

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
}

class EscuelaEnLinea {
    // Atributos
    nombre: string; // public de forma implicita
    cursos: Curso[] = []; // public de forma implicita

    // Funcion que permite crear objetos
    constructor(nombre: string){
        this.nombre = nombre;
    }

    // Metodo o funcion
    agregarCurso (curso: Curso){
        this.cursos.push(curso);
    }
}
 
const escuelaEnLinea = new EscuelaEnLinea('Escuela');
let cursoJs = new Curso(1,'JavaScript');
let cursoTS = new Curso(2,'TypeScript');
escuelaEnLinea.agregarCurso(cursoJs);
escuelaEnLinea.agregarCurso(cursoTS);

// ACCEDER A LOS ATRIBUTOS PUBLICOS, para cambiar el estado de sus propiedades

cursoJs.nombre = 'JavaScript desde cero';
cursoJs.id = 20;

console.log('escuelaEnLinea', escuelaEnLinea);
console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);

// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js