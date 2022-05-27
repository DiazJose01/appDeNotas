const fs = require("fs");

function leerJSON() {
    return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
}

function escribirJSON(info) {
    fs.writeFileSync("./tareas.json", JSON.stringify(info), "utf-8");    
}

function guardarTarea(titulo, ESTADO) {
    let tareasAnteriores = leerJSON();

    let nuevaTarea = {
        TITULO: TITULO,
        ESTADO: ESTADO,
    }
    tareasAnteriores.push(nuevaTarea);

    escribirJSON(tareasAnteriores);
}

function filtrarPorEstado(eESTADO) {
    let tareas = leerJSON(); 

    return tareas.filter(tarea => tarea.ESTADO == ESTADO); 
}


module.exports = { leerJSON, escribirJSON, guardarTarea, filtrarPorEstado }