const funciones = require ("./exportarMetodos");

const process = require("process");

const accion = process.argv[2];  

switch (accion) {
    case "listar":
    let tareas = funciones.leerJSON(); 
    
    if (tareas.length == 0) { 
        console.log("LA LISTA DE TAREA ESTA VACIA");
    } else {
        console.log("--------------------------");
        console.log(" -> LISTA DE TAREAS  <-");
        console.log("--------------------------");
        
        tareas.forEach(tarea => { 
            console.log(`Titulo: ${tarea.TITULO} // ${tarea.ESTADO}`); 
        })
    }
    break;
    case "crear":
    let TITULO = process.argv[3];
    let ESTADO = process.argv[4];
    
    if (TITULO && ESTADO) { 
        funciones.guardarTarea(TITULO, ESTADO); 
        console.log("--------------------------");
        console.log("UNA NUEVA TAREA HA SIDO AGREGADA!!!");
        console.log("--------------------------");
    } else {
        console.log("--------------------------");
        console.log("ES NECESESARIO QUE PASES UN TITULO Y ESTADO PARA AGREGAR UNA NUEVA TAREA!!");
        console.log("--------------------------");

    }
    break;
    case "filtrar":
    let filtro = process.argv[3];
    
    let tareasFiltradas = funciones.filtrarPorEstado(filtro); 
    
    if (filtro && tareasFiltradas.length != 0) { 
        console.log("--------------------------");
        console.log(`LISTA DE TAREAS FILTRADAS POR: ${filtro}`);
        console.log("--------------------------");

        tareasFiltradas.forEach(tarea => {
            console.log(`Titulo: ${tarea.TITULO} // ${tarea.ESTADO}`);
        })
    } else if (filtro && tareasFiltradas.length == 0) { // si ingresamos un estado para filtrar y la lista de tareas esta vacia
        console.log("--------------------------");
        console.log("NO EXISTEN TAREAS CON ESE ESTADO");
        console.log("--------------------------");
    } else {
        console.log("DEBES INGRESAR UN ESTADO PARA FILTRAR!");
    }
    
    break;
    case undefined :
        console.log("Atención - Tienes que pasar una acción.");
        console.log("Las opciones disponibles son: listar");
        console.log("------------------------------------");
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        console.log("Las opciones disponiles sin: listar");
        console.log("----------------------------------");
    break;
}