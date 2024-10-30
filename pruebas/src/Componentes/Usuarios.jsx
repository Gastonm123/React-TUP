import { useEffect, useState, useRef } from 'react'
import './Usuarios.css'

export default function Usuarios({ usuarios, cambiarUsuarios, seed }) {
    const [page, setPage] = useState(1);
    const pagAnterior = useRef(1);

    useEffect(() => {
        if (usuarios.length === 0 || pagAnterior.current !== page) {
            const results = "results=10"
            const url = "https://randomuser.me/api/?results=15" + "&seed=" + seed + "&page=" + page
            fetch(url)
                .then(d => d.json())
                .then(d => { console.log(d); cambiarUsuarios(d.results) })
                .catch(console.error)
            pagAnterior.current = page;
        }
    }, [page])

    function manejadorPaginacion(siguientePage) {
        if (siguientePage === 0) {
            setPage(1)
        }
        else if (siguientePage === 4) {
            setPage(3)
        }
        else {
            setPage(siguientePage)
        }
    }

    return (
        <div class="usuarios-page">
            <ul class="list-group">
                {usuarios.length !== 0
                    ?
                    <>
                        {
                            usuarios.map(user => (
                                <li class="list-group-item">
                                    <img className="picture" src={user.picture.thumbnail} />
                                    <div className="user-brief">
                                        <h3>{user.name.first + " " + user.name.last}</h3>
                                        <table>
                                            <tr>
                                                <td>
                                                    <b>Genero</b> {user.gender}
                                                </td>
                                                <td>
                                                    <b>Edad</b> {user.dob.age}
                                                </td>
                                            </tr><tr>
                                                <td>
                                                    <b>Email</b> {user.email}
                                                </td>
                                                <td>
                                                    <b>Usuario</b> {user.login.username}
                                                </td>
                                            </tr><tr>
                                                <td>
                                                    <b>Country</b> {user.location.country}
                                                </td>
                                                <td>
                                                    <b>Phone</b> {user.phone}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </li>
                            ))} 
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#"
                                    onClick={() => manejadorPaginacion(page-1)}>
                                        Anterior
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"
                                    onClick={function () {manejadorPaginacion(1)}}>
                                        1
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"
                                    onClick={function () {manejadorPaginacion(2)}}>
                                        2
                                    </a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"
                                    onClick={function () {manejadorPaginacion(3)}}>
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"
                                    onClick={function () {manejadorPaginacion(page+1)}}>
                                        Siguiente
                                    </a>
                                </li>
                            </ul>
                        </nav></>
                    : <>
                    </>
                }
            </ul>
        </div>
    )
}