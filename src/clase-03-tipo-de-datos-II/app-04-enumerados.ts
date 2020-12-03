export{}
// ENUMERADOS EN TYPESCRIPT
// Es una forma que tiene typescript para poder crear nuestros propios tipos de datos(datos reducidos)
// Permite modificar el indice de cada enumerado

// type Curso : string | number; (datos no reducidos, en number peermite agregar expresiones regulares)

enum Curso{
    JavaScript, //indice 0
    TypeScript, //indice 1
    Angular     //indice 2
}

let curso: Curso = Curso.JavaScript;
console.log('Curso', curso);
console.log('Curso', Curso[curso]);

// Ejemmplo 2

enum Dia{
    Lunes,
    Martes, 
    Miercoles,
    Jueves,
    Viernes
}

console.log('Viernes', Dia.Viernes);

// Permite modificar el indice de cada enumerado y automaticamente el siguiente sera de acuerdo a lo que se tiene modificado 
enum FinSemana{
    Sabado = 5,
    Domingo
}

console.log('Sabado', FinSemana.Sabado);
console.log('Domingo', FinSemana.Domingo);

// Permite agaregar a los indices cadenas
enum Mes{
    Enero = 'Ene',
    Febrero = 'Feb',
    Marzo = 'Mar',
    Abril = 'Abr'
}

console.log('Marzo', Mes.Marzo);

// EJECUTAR EN LA CONSOLA
// node dist/clase-03-tipo-de-datos-II/app-01.js