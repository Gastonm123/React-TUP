import { useEffect, useState, useRef } from 'react'
import './Usuarios.css'

export default function Usuarios() {
    const [pagination, setPagination] = useState(0)
    const [usersData, setUsersData] = useState(null)
    const seed = useRef(Date.now())

    useEffect(() => {
        const page = `page=${pagination}`
        const results = "results=10"
        const url = "https://randomuser.me/api/?" + page + "&" + results + "&seed=" + seed.current
        fetch(url)
            .then(d => d.json())
            .then(d => { console.log(d); setUsersData(d.results) })
            .catch(console.error)
    }, [pagination])

    return (
        <div class="usuarios-page">
            <ul class="list-group">
                {usersData !== null
                    ?
                    <>
                        {
                            usersData.map(user => (
                                <li class="list-group-item">
                                    <img class="picture" src={user.picture.thumbnail} />
                                    <div class="user-brief">
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
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav></>
                    : <>
                    </>
                }
            </ul>
        </div>
    )
}