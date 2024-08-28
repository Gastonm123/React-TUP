// Sintaxis import y export
import React from 'react'
import TextoBoton from './TextoBoton'

export default function Boton({ text }) {
    return (
        <button>
            <TextoBoton text={text}/>
        </button>
    )
}