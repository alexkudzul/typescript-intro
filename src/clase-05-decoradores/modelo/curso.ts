// Decorador 

/**
 * #2# invoca una funcion que esta enviando parametros, un objeto vacio
 * tambien permite recibir un conjunto de parametros
 * clave, parametro para identificar una clase de otra 
 */

import {Entidad, enumerable, readonly} from '../decoradores/index'
// @Entidad //  #1#
// #2#
@Entidad({
    clave: 'Curso'
}) 
export class Curso{

    prueba: string;

    constructor(private _id: number, private _nombre:string){
        this.prueba = '';
    }

    // @decorador en una funcion
    @enumerable(false) // No aparece como propiedad al hacer console.log ya que contiene un false
    getPrueba(){
        return this.prueba;
    }

    /**
     * Para evitar que las definiciones de las funciones, se mantengan tal cual, si se quiere que sea solo de modo lectura creamos un decorador readonly
     * Evita que mas adelante un programador asigne cosas que no se desee a un objeto
     */
    
    @readonly
    lectura(){

    }

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id; 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre:string){
        this._nombre = nombre;
    }
}