//evitar tener problemas con variables ya declaradas en otros archivos ts
export{}

// METODOS SET Y GET
// Permite acceder a las propiedades privadas

class Curso {

    // En TypeScript se puede simplificar el codigo de esta forma, definir los atributos y los parametros del constructor en una linea
    // Se define las propiedades como parametros del constructor y se asignan con el mismo nombre

    // private id: number;
    // private nombre: string; 

    constructor(private _id:number, private _nombre:string){
        // this.id = id;
        // this.nombre = nombre;
    }
    
    // Permite obtener el estado de "id"
    get id(){
        return this._id;
    }

    // Permite cambiar el estado de "id"
    set id(id: number){
         this._id = id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }
}

class EscuelaEnLinea {
    // Atributos
    // private nombre: string; 
    private cursos: Curso[] = []; 

    // Funcion que permite crear objetos
    constructor(private _nombre: string){
        // this.nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
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

// ACCEDER A LOS ATRIBUTOS PRIVADOS, con GET y SET

cursoJs.nombre = 'JavaScript desde cero'; // Asignacion: SET
cursoJs.id = 20; //Asginacion: SET
console.log('Nombre cursoJS', cursoJs.nombre); // Leyendo con el metodo GET

console.log('escuelaEnLinea', escuelaEnLinea);
console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);// nombre es privado, pero se esta Leyendo con el metodo GET

// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js