
export { analizarClase, mostrarPropiedades, PI}

// Enviamos una clase
function analizarClase(clase: any){
    console.log('Clave:', clase.clave);
}

// Enviamos una clase
function mostrarPropiedades(clase: any){
    // inspeciona las propiedades que tiene una clase
    for(let prop in clase.prototype){
        console.log('prop', prop);
    }
}

const PI = 3.14;