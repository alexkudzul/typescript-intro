//evitar tener problemas con variables ya declaradas en otros archivos ts
export{}

class CursosEnLinea {
    // Atributos
    nombre: string;
    cursos: string[] = [];

    // Funcion que permite crear objetos
    constructor(nombre: string){
        this.nombre = nombre;
    }

    // Metodo o funcion
    agregarCurso (curso: string){
        this.cursos.push(curso);
    }
}

const escuelaEnLinea = new CursosEnLinea('TypeScript');
escuelaEnLinea.agregarCurso('NodeJS');

console.log('escuelaEnLinea', escuelaEnLinea);

// EJECUTAR EN LA CONSOLA
// node dist/clase-04-poo/app-01-clases-constructores.js
