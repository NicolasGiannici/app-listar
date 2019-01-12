const { argv } = require('./config/yargs');
const colors = require('colors');
const datos = require("./datos/datos");


let comandos = argv._;

for (let x = 0; x < comandos.length; x++) {
    switch (comandos[x]) {
        case "crear":
            console.log(datos.crearTarea(argv.descripcion));
            break;
        case "listar":

            let listado = datos.getListado();
            for (let tarea of listado) {
                console.log('============= POR HACER ============='.green);
                console.log(`ID: ${tarea.id}`);
                console.log(`Tarea: ${tarea.descripcion}`);
                console.log(`Estado: ${tarea.completado}`);
                console.log('====================================='.green);
            }


            break;
        case "actualizar":
            let respuesta = datos.actualizarDatos(argv.id, argv.completado);
            if (respuesta != true) {
                console.log(`No se encontro el ID ${argv.id}`);
            }
            break;
        case "borrar":
            datos.borrarDatos(argv.id);
            break;
        default:
            console.log(`El comando "${comandos[x]}" no es reconocido.`);
    }
}