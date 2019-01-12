const argvSalida = require('yargs')
    .command("crear", "Crea una tarea o elemento por hacer.", {
        descripcion: {
            alias: "d",
            demand: true,
            desc: "Descripcion de la tarea"
        }
    })
    .command("listar", "Muestra por pantalla la lista de tareas", {
        completado: {
            alias: "c",
            default: false
        }
    })
    .command("borrar", "Borra la tarea asignada al ID dado.", {
        id: {
            demand: true,
            desc: "ID de la tarea."
        }
    })
    .command("actualizar", "Actualiza el estado de una de las tareas", {
        descripcion: {
            alias: "d",
            demand: false,
            desc: "Descripcion de la tarea"
        },
        id: {
            demand: true,
            desc: "ID de la tarea."

        },
        completado: {
            alias: "c",
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv: argvSalida
}