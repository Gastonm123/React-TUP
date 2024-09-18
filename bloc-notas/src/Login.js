import { useState } from 'react'

export default function Login() {
    const [entradaUsuario, cambiarEntradaUsuario] = useState({
        correo_electronico: "asd@hotmail.com",
        contrasena: "1234",
    })

    function manejadorContrasena(e) {
        const input = e.target
        const nuevoValor = input.value
        cambiarEntradaUsuario({
            ...entradaUsuario,
            contrasena: nuevoValor,
        })
    }

    const manejadorCorreoElectronico = (e) => {
        const input = e.target
        const nuevoValor = input.value
        cambiarEntradaUsuario({
            ...entradaUsuario, // sintaxis de spread
            correo_electronico: nuevoValor,
        })
    }

    const manejadorSubmit = (e) => {
        e.preventDefault()
        console.log("El usuario ha enviado el formulario ", entradaUsuario)
    }

    return (
        <form onSubmit={manejadorSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={manejadorCorreoElectronico}>
                </input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={manejadorContrasena}> </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}