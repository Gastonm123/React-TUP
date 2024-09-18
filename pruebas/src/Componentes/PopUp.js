import { useState } from 'react';

export default function PopUp(props) {
    return (
        <div className="modal" id="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
    </div>
    /*
          <section>
              { props.tipo === "popUpAgregar"
              ? <>
                  <p>Complete los datos para agregar tareas</p>
                  <form></form>
              </>
              : props.tipo === "popUpEliminar"
              ? <>
                  <p>Seleccione una tarea para eliminar</p>
                  <form>
                      <input name="nombreTarea"></input>
                      <button>Eliminar</button>
                  </form>
              </>
              : <div>{alert("Algo salio mal. Recargar la aplicación.")}</div>
              }
              <footer>
                  <button onClick={props.cerrarPopUp}>Cerrar</button>
              </footer>
          </section>
          */
    )
}