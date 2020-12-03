
/**
 * DECORADORES
 * Es una funcion que recibe como parametro la entidad que se quiere decorar
 * Siempre se inicializa con un @ y encima de la cabecera de la clase
 */

/**
 * Definir o crear un DECORADOR
 * target se utiliza ese nombre por convension, y es la entidad objetivo para poder hacer cambios o inspeccionar su estado
 * any permite decorar cualquier tipo de clase
 */


// #1#
/*function Entidad(target: any){
    console.log('Entidad', target);  // Imprime la Entidad concatenando como una funcion de Curso
}*/

export {Entidad, enumerable, readonly}

//#2#
function Entidad(config: any){
    console.log('Entidad', config);  // Imprime la Entidad concatenando como una funcion de Curso
    // Retornar una funcion que se convierta en la clase, funcion con  clase ya decorada
    return function(target: any){
        // Dinamicamente: se asigna la propiedad clave a la clase
        target.clave = config.clave;
        console.log('Target', target); // muestra el estado de la clase objetivo
    }
}

// Funcion que se encarga de listar o no las propiedades de una clase
function enumerable( value: boolean){

    /**
     * funcion que cambia de valor a value
     * Target puede representar una clase o una funcion
     * propertyKey
     * PropertyDescriptor da el tipo correcto
     */

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // en descriptor enumerable adquiere el valor que venga como paramatro
        descriptor.enumerable = value;
    }
}

// Evita que mas adelante un programador asigne cosas que no se desee a un objeto
function readonly(target: any, name: any, descriptor: PropertyDescriptor){
    // propiedad writable que permite habilitar o deshabilitar el modo de escritura
    descriptor.writable = false;
    // retorna el estado de descriptor
    return descriptor;
}
