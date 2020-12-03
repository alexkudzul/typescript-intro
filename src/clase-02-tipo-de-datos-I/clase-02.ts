// Tipos primitivos o tipos basicos
// Boolean

let estaConectado = true;
let estaInscrito:boolean;

estaInscrito = false;
estaInscrito = true;

// estaInscrito = 2; //no es valido, por el tipo de dato

function tieneDescuento(curso:string){
    if(curso === 'typescript')
        return true;
    return false;
}

console.log("Tiene descuento('angular'): ", tieneDescuento('angular'));

// Number

let estudiantes = 100;
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso:string):number{
    if(curso === 'typescript'){
        return 100;
    }
    return 0;
}

// Hexadecimal

let inscritosCursoTypescript: number = 100;
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

//  Number y binario

let binario: number = 0b1010;
console.log('binario', binario);

// Number y octal

let octal: number = 0o755;
console.log('octal', octal);

// String

let nombre = 'Alex';
let apellido:string = 'Ku';
let nombreCompleto = nombre +' '+apellido;
console.log('Nombre completo', nombreCompleto);

// String + ES6 Template literals

let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('Nombre completo 2', nombreCompleto2);

let arregloCursos = ['TypeScript', 'Angular'];
let mensaje = `
    Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos. 
    ¡Gracias por asistir!
`;

console.log(mensaje);

// Tipo de datos Especiales en TypeScript

// Tipo Any
// Puede conetener cualquier tipo de dato, es desconocido o sirve para los metodos o funciones que no se sabe que va a retornar
let desconocido; // seria como : var desconocido;
desconocido = 'Hola';
desconocido = 2;

let desconocido2:any;
desconocido2 = 'Hola2'
desconocido2 = 22;

// Tipo Void
// No devuelve ni un valor, y solo se recomienda utilizarlo con funciones o cuando se tiene que mostrar solo mensaje
let vacio:void;
function mostrarContenido(curso:string):void{
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete al curso';
    console.log(mensaje);
}

mostrarContenido('TypeScript');

// Tipo Never
// Se recomienda usar solo en funciones donde tiene que retornar algun error

let nunca: never;

function retornaError(error:string){
    throw new Error ('Error TypeScript. ' + error);
    // Nunca retorna un valor
}

// retornaError('valor inesperado');

function cicloInfinito():never{
    while(true){

    }
}

// Tipo Null y undefined

let variableUndefined:undefined;
let variableNull:null;

function retornoNull():null{
    return null;
}

function retornoUndefined():undefined{
    return undefined;
}

let variableSinValor; //por defecto es undefined
console.log('variable sin valor', variableSinValor);

// Funciones en typescript
// el signo de interogacion "?, indica que puede ser un parametro opcional

function saludos(nombre?: string): string{
    if(nombre){
        return 'hola '+ nombre;
    }    
    return 'hola';
}

console.log(saludos(nombreCompleto));
console.log(saludos()); //Sin parametro, es opcional

// Arreglos en typescript
let cursos2:string[];
cursos2 = ['TypeScript', 'Angular'];

// Arreglos generics
let nombres: Array<string>;
nombres = ['Alex' , 'Manuel'];

let arreglo: any = [2,'alex', true];

// Tuplas
// Se define con el tipo de dato dentro de los corchetes
let infoCursos:[string, number] = ['typescript', 100];
infoCursos = ['angular', 200];

let curso2: [string, number, string] = ['typescript', 150, '24/03/2020'];
console.log('curso ', curso2);
let nuevosInscritos = 10;

console.log('fecha de inicio', curso2[2]);
console.log('Total de inscritos ', curso2[1] + nuevosInscritos);

let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);

// EJECUTAR EN LA CONSOLA
// node dist/clase-02-tipo-de-datos-I/clase-02.js