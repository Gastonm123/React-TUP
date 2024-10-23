import { useState } from 'react';

export default function Tarea(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.contenido.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.contenido.tiempo}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}