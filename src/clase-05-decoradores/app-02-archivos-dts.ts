// Usar una libreria externa de JavaScript: lodash
// Para instalar una libreria en el proyecto se necesita un package.json con npm init -y
// npm install lodash --save // el parametro --save permite agregar esta dependia en package.json

/*
Los archivos .d.td

Se denominan "declaration file"
Se usan para proveer al compilador de TypeScript la informacion sobre tipos de datos
Solo contienen la informacion de tipos
Ejemplo: "typings.d.ts"

*/

/*

DefinitelyTyped y @types

*Definimos la informacion de tipos en los archivos .d.ts(declaration files)
*¿Que pasa si la libreria cambia?
*¿Como sincronizamos los archivos .d.ts con esos cambios?

RESPUESTA

*Podemos encontrar estas definiciones de tipo en definitelytyped.org
*Incontables archivos .d.ts ya estan definidos por la comunidad
*¿Como los instalamos para usarlos en nuestros proyectos?

*npm install @types/<libreria> --save-dev
*Ejemplo npm install @types/lodash --save-dev

*/

// Por el momento ya no es necesario el typings.d.ts, ya que se instalo una libreria de tipos de datos para lodash
// npm install @types/lodash --save-dev

import {random} from 'lodash';

function numeroAleatorio(a: number, b:number){
    // al inspeccionar random, ya muestra mas informacion sobre el tipo de datos
    return random(a, b);
}

console.log('numeroAleatorio(1, 10)', numeroAleatorio(1,10));
// Hace lo mismo pero mas optimmizado por los d.ts
console.log('random(1, 10)', random(1, 10));

// EJECUTAR EN LA CONSOLA
// node dist/app-01-decoradores.js
// node dist/clase-05-decoradores/app-01-decoradores.js