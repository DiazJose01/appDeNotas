const fs = require("fs");

module.exports = funcionesListas = {
    leerJSON: function() {
        return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
    },
    escribirJSON: function(info) {
        let nuevoJSON = JSON.stringify(info); 
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8"); 
    },
    guardarTarea: function(TITULO, ESTADO) {
        let tareasAnteriores = funcionesListas.leerJSON(); 
        
        let nuevaTarea = {
            TITULO: TITULO, 
            ESTADO: ESTADO, 
        }
        
        tareasAnteriores.push(nuevaTarea); 
        
        funcionesListas.escribirJSON(tareasAnteriores); 
    },
    filtrarPorEstado: function(ESTADO) {
        let tareas = funcionesListas.leerJSON(); 
        
        let tareasFiltradas = []; 
        
        for (let i = 0; i < tareas.length; i++) { 
            if(tareas[i].ESTADO == ESTADO) { 
                tareasFiltradas.push(tareas[i]) 
            }
        }
        
        return tareasFiltradas; 
    }
}