//evitar tener problemas con variables ya declaradas en otros archivos ts
export{}

// Encapsulamiento(public, private, protected)
// Miembros o Modificador PRIVADO
// Solo pueden acceder desde la misma clase, otro objeto externo de la clase Curso no podra acceder a los propiedades

class Curso {

    // En TypeScript se puede simplificar el codigo de esta forma, definir los atributos y los parametros del constructor en una linea
    // Se define las propiedades como parametros del constructor y se asignan con el mismo nombre

    // private id: number;
    // private nombre: string; 

    constructor(private id:number, private nombre:string){
        // this.id = id;
        // this.nombre = nombre;
    }
}

class EscuelaEnLinea {
    // Atributos
    // private nombre: string; 
    private cursos: Curso[] = []; 

    // Funcion que permite crear objetos
    constructor(private nombre: string){
        // this.nombre = nombre;
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

// ACCEDER A LOS ATRIBUTOS PUBLICOS, para cambiar el estado de sus propiedades, ya no se puede por que ahora es privado

// cursoJs.nombre = 'JavaScript desde cero';
// cursoJs.id = 20;

console.log('escuelaEnLinea', escuelaEnLinea);
// console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);// nombre es privado

// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js