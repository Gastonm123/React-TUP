import { useState } from 'react';

export default function Tarea(props) {
    return (
        <div>
            <h1>{props.contenido.tipo}</h1>
            <p>{props.contenido.tiempo}</p>
        </div>
    )
}