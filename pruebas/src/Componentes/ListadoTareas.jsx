import Tarea from './Tarea';
import PopUp from './PopUp';
import { useState } from 'react';
import ClaseTarea from './ClaseTarea';


export default function ListadoTareas({ tareas, cambiarTareas, tipoPopUp, cambiarTipo }) {
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