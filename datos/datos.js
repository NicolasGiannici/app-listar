const fs = require('fs');


let listadoPorHacer = [];


let actualizarDatos = (id, completado) => {
    cargarDatos();
    let index = listadoPorHacer.findIndex((lista) => lista.id === id);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDatos();
        return true;
    } else {
        return false;
    }
}

let borrarDatos = (id) => {
    cargarDatos();
    let index = listadoPorHacer.findIndex((lista) => lista.id === id);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        index--;
        for (let x = index; listadoPorHacer[x] != null; x++) {
            listadoPorHacer[x].id = x + 1;
        }
        guardarDatos();
        return true;
    }
    return false;

}

let cargarDatos = () => {

    try {
        listadoPorHacer = require('./listadoDeTareas.json');
    } catch (error) {
        listadoPorHacer = [];
        console.log(error);
        console.log("Listado en cero.");
    }


}

let guardarDatos = () => {
    let datos = JSON.stringify(listadoPorHacer);

    fs.writeFile("./datos/listadoDeTareas.JSON", datos, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Datos guardados satisfactoriamente.");
    });
}
let getListado = () => {
    cargarDatos();
    return listadoPorHacer;
}


let crear = (descripcion) => {
    cargarDatos();
    let porHacer = {
        id: listadoPorHacer.length + 1,
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDatos();
    return porHacer;
}

module.exports = {
    crearTarea: crear,
    getListado,
    actualizarDatos,
    borrarDatos
}