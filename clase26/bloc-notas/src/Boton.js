// Sintaxis import y export
import React from 'react'
import TextoBoton from './TextoBoton'
import './Boton.css'

function ManejadorClick() {
    alert('se hizo click')
}

export default function Boton({ text }) {
    return (
        <button className="enviar" onClick={ManejadorClick}>
            <TextoBoton text={text}/>
        </button>
    )
}