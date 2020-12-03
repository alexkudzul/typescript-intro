//evitar tener problemas con variables ya declaradas en otros archivos ts
export{}

// ATRIBUTOS Y METODOS ESTATICOS/STATIC
// Para poder acceder a los atributos o metodos se necesita crear objetos de la clase
// Para acceder a un atributo estatico no se necesita crear un objeto, se accede directamente a la Clase.metodo()


// Modificadores de acceso: PROTECTED/PROTEGIDO (Se utiliza cuando se aplica una herencia a una clase Padre y esta cuenta con propiedades privadas)
// CLASES ABSTRACTAS, No permite al compilador de TS crear objetos directamente a la clase

// METODOS SET Y GET, Permite acceder a las propiedades privadas

// ATRIBUTOS DE SOLO LECTURA, palabra reservada readonly
// Nos permite tener un mejor control sobre que variables queremos modificar



// Definir un enumerado, array, solo imprime los indices
enum MisCursos{
    JavaScript = 0,
    TypeScript = 1,
    Angular = 2
}

class Curso {

    // Definir una propiedad
    public static cursosDisponibles: MisCursos[] = [MisCursos.JavaScript, MisCursos.TypeScript];

    // En TypeScript se puede simplificar el codigo de esta forma, definir los atributos y los parametros del constructor en una linea
    // Se define las propiedades como parametros del constructor y se asignan con el mismo nombre

    // private id: number;
    // private nombre: string; 

    constructor(private readonly _id:number, private readonly _nombre:string){
        // this.id = id;
        // this.nombre = nombre;
    }
    
    // Permite obtener el estado de "id"
    get id(){
        return this._id;
    }

    // NO SE PUEDE CAMBIAR EL ID DEL CURSO por el readonly

    // Permite cambiar el estado de "id"
    // set id(id: number){
    //      this._id = id;
    // }

    get nombre(){
        return this._nombre;
    }

    // NO SE PUEDE CAMBIAR EL NOMBRE DEL CURSO por el readonly
    // set nombre(nombre: string){
    //     this._nombre = nombre;
    // }

    // convierte en json el objeto Curso
    static getInfo(c: Curso){
        return JSON.stringify(c);
    }
}

// CLASES ABSTRACTAS, No permite al compilador de TS crear objetos directamente a la clase
abstract class Escuela {

    protected cursos: Curso[] = [];
    constructor (protected _id: number, protected _nombre:string){}

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre: string){
        this.nombre = nombre;
    }

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}

class EscuelaEnLinea extends Escuela {
    // Funcion que permite crear objetos
    constructor(id: number, nombre: string, private _paginaWeb: string){
        // super permite reusar el constructor de la superClase(Escuela), enviando el id y nombre al constructor de la clase Escuela
        super(id, nombre); 
    }

    get paginaWeb(){
        return this._paginaWeb;
    }

    set paginaWeb(paginaWeb: string){
        this._paginaWeb = paginaWeb;
    }

}

// const miEscuela = new Escuela(1,'Mi Escuela');// No se puede crear objeto por que Escuela es abstracta
const escuelaEnLinea = new EscuelaEnLinea(1, 'Escuela en linea', 'paginaweb.com');
let cursoJs = new Curso(1,'JavaScript');
let cursoTS = new Curso(2,'TypeScript');
escuelaEnLinea.agregarCurso(cursoJs);
escuelaEnLinea.agregarCurso(cursoTS);

// ACCEDER A LOS ATRIBUTOS PRIVADOS, con GET y SET

// Con readonly solo se puede hacer el modo de lectura (GET) 
// cursoJs.nombre = 'JavaScript desde cero'; // Asignacion: SET
// cursoJs.id = 20; //Asginacion: SET

console.log('Nombre cursoJS', cursoJs.nombre); // Leyendo con el metodo GET

console.log('escuelaEnLinea', escuelaEnLinea);
console.log('escuelaEnLinea.nombre', escuelaEnLinea.nombre);// nombre es privado, pero se esta Leyendo con el metodo GET
console.log('escuelaEnLinea.paginaWeb', escuelaEnLinea.paginaWeb);

// Probando propiedades y metodos static, Se accede a la clase Curso y ejecutar la propiedad o metodo

console.log('MisCursos', Curso.cursosDisponibles);
console.log('CursosJS', Curso.getInfo(cursoJs));

// EJECUTAR EN LA CONSOLA 
// node dist/clase-04-poo/app-01-clases-constructores.js