import { useState } from 'react';

export default function PopUp({ tipo, popUpAbierto, cerrarPopUp, agregarTarea, eliminarTarea, tareas }) {
    const [tipoTarea, cambiarTipo]  = useState("");
    const [horario, cambiarHorario] = useState("");
    const confirmarBorrado = () => { 

    }
    const confirmarCreado = () => {
        cambiarTipo("")
        cambiarHorario("")
        agregarTarea(tipoTarea, horario)
    }
    const cancelar = () => {
        cambiarTipo("")
        cambiarHorario("")
    }
    return (
        <div className="modal" id="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    {tipo === "popUpAgregar"
                        ? <>
                            <div className="modal-header">
                                <h5 className="modal-title">Agregar tarea</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="inputTipo" className="form-label">Tipo de tarea</label>
                                        <input type="text" className="form-control" id="inputTipo" aria-describedby="tipoHelp"
                                            value={tipoTarea} onChange={(e) => cambiarTipo(e.target.value)}></input>
                                        <div id="tipoHelp" className="form-text">Escribe un titulo representativo de la tarea</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputHorario" className="form-label">Horario</label>
                                        <input type="text" className="form-control" id="inputHorario"
                                            value={horario} onChange={(e) => cambiarHorario(e.target.value)}></input>
                                    </div>
                                    {/*
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> */}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={cancelar}>Cancelar</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={confirmarCreado}>Confirmar</button>
                            </div></>
                        : <>
                            <div className="modal-header">
                                <h5 className="modal-title">Eliminar tarea</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    {tareas.map((tarea, idx) =>
                                        <li className="list-group-item" key={idx} id={`tarea-${idx}`}>
                                            <input className="form-check-input me-1 my-checkbox" type="checkbox" value="" id="checkbox" />
                                            <label className="form-check-label" for="checkbox">{tarea.tipo}</label>
                                        </li>
                                    )}
                                </ul>
                                <ul class="list-group">
                                    {tareas.map(tarea => 
                                        <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                                        </input>
                                        <label class="form-check-label" for="firstCheckbox">{tarea.tipo}</label>
                                      </li>
                                    )}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={confirmarBorrado}>Confirmar</button>
                            </div></>
                    }

                </div>
            </div>

        </div>
    )
}