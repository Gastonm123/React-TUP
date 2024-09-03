import { useState, useEffect, useContext } from 'react'
import React from 'react'
import Boton from './Boton'

const estadosPosibles = ["edicion", "guardado"]

export default function Nota () {
    // const [estadoNota, cambiarEstadoNota] = useState("edicion")
    const respuesta = useState("edicion");
    const estadoNota = respuesta[0];
    const actualizarEstado = respuesta[1];
    /* function manejarClick(e) {
        e.preventDefault()
        alert("Se envio el formulario")
    } */
    return (
        <section style={{margin: "30px", display: "inline-block"}}>
            <label for="titulo">Nota</label> <br/>
            {estadoNota == "edicion"
                ? <> <input type="text" name="titulo"/> <br/> </>
                : <> <input type="text" name="titulo" disabled></input> <br/> </>
            }
            <label for="cuerpo_nota">Escribir Nota</label> <br/>
            {estadoNota == "edicion"
                ? <React.Fragment> <textarea name="cuerpo_nota"></textarea> <br/> <br/> </React.Fragment>
                : <React.Fragment> <textarea name="cuerpo_nota" disabled></textarea> <br/> <br/> </React.Fragment>
                // <textarea name="cuerpo_nota"></textarea> <br/> <br/>
            }
            <Boton estado={estadoNota} cambiarEstado={actualizarEstado}/>
        </section>
    );
    /*
    {estadoNota == "edicion"
        ? <Boton text="Guardar" cambiarEstado={actualizarEstado}/>
        : <Boton text="Editar" cambiarEstado={actualizarEstado}/>
    }
    */
}