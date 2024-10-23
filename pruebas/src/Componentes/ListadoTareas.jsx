import Tarea from './Tarea';
import PopUp from './PopUp';
import { useState } from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ClaseTarea {
    constructor(titulo, tiempo) {
        this.titulo = capitalizeFirstLetter(titulo)
        this.tiempo = tiempo
    }
}

export default function ListadoTareas() {
    const [tareas, cambiarTareas] = useState(
        [
            new ClaseTarea("limpiar la casa", "15:30"),
            new ClaseTarea("llamar al sodero", "16:30")
        ]
    );
    const [tipoPopUp, cambiarTipo] = useState(null);
    const numeroTareas = tareas.length
    function agregarTarea(tituloNuevaTarea, tiempoNuevaTarea) {
        const tarea = new ClaseTarea(tituloNuevaTarea, tiempoNuevaTarea)
        cambiarTareas([
            ...tareas,
            tarea
        ])
    }
    function eliminarTarea() {
    }
    function cerrarPopUp() {
    }
    return (
        <main className="flex w-full p-[20px]">
            { /* popUpActivo 
            ? <PopUp tipo={tipoPopUp} cerrarPopUp={cerrarPopUp}></PopUp>
            : <div></div> */
            }
            <PopUp 
                tipo={tipoPopUp}
                cerrarPopUp={cerrarPopUp}
                agregarTarea={agregarTarea}
                eliminarTarea={eliminarTarea}
                tareas={tareas}></PopUp>
            <div className="botonera">
                
                <button onClick={() => cambiarTipo("popUpAgregar")}
                    data-bs-toggle="modal" data-bs-target="#modal">Agregar tareas</button>
                <button onClick={() => cambiarTipo("popUpEliminar")}
                    data-bs-toggle="modal" data-bs-target="#modal">Eliminar tareas</button>
                 
                {/*
                <button onClick={agregarTarea} >Agregar tareas</button>
                <button onClick={eliminarTarea} >Eliminar tareas</button>
                */}
            </div>
            { numeroTareas > 0
            ? tareas.map(tarea => {
                return <Tarea contenido={tarea}></Tarea>
            })
            : <p>No hay tareas pendientes</p>
            }
        </main>
    )
}