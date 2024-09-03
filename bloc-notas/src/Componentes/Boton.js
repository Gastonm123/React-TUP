// Sintaxis import y export
import React from 'react'
import TextoBoton from './TextoBoton'
import './Boton.css'

export default function Boton(props) {
    const actualizarEstado = props.cambiarEstado;
    const estado = props.estado;
    function manejarClick(e) {
        // var == 0
        // var = ""
        if (props.text === undefined) {
            if (props.estado == "edicion") {
                actualizarEstado("guardado");
            }
            if (props.estado == "guardado") {
                actualizarEstado("edicion");
            }
        }
        else {
            // props.text == undefined
            // props.text == "Editar"
            // props.text == ["Editar", "Guardar"]
            if (props.text == "Guardar") {
                actualizarEstado("guardado");
            }
            if (props.text == "Editar") {
                actualizarEstado("edicion");
            }
        }
    }

    return (
        <button className="enviar" onClick={manejarClick}>
            <TextoBoton text={
                estado=="edicion"
                ? "Guardar"
                : "Editar"}/>
        </button>
    )
}