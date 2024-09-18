import Tarea from './Tarea';
import PopUp from './PopUp';
import { useState } from 'react';

export default function ListadoTareas() {
    const [tareas, cambiarTareas] = useState(
        [{tipo:"limpiar la casa", tiempo:"15:30"}, {tipo:"llamar al sodero", tiempo:"16:30"}]
    );
    const numeroTareas = tareas.length
    const [popUpActivo, llamarPopUp] = useState(false);
    const [tipoPopUp, cambiarTipo] = useState(null);
    function agregarTarea() {
        llamarPopUp(true);
        cambiarTipo("popUpAgregar");
    }
    function eliminarTarea() {
        llamarPopUp(true);
        cambiarTipo("popUpEliminar");
    }
    function cerrarPopUp() {
        llamarPopUp(false);
    }
    return (
        <main className="flex w-full p-[20px]">
            { /* popUpActivo 
            ? <PopUp tipo={tipoPopUp} cerrarPopUp={cerrarPopUp}></PopUp>
            : <div></div> */
            }
            <PopUp tipo={tipoPopUp} cerrarPopUp={cerrarPopUp}></PopUp>
            <div className="botonera">
                <button onClick={agregarTarea} data-bs-toggle="modal" data-bs-target="#modal">Agregar tareas</button>
                <button onClick={eliminarTarea} data-bs-toggle="modal" data-bs-target="#modal">Eliminar tareas</button>
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