import './App.css';
import ListadoTareas from './Componentes/ListadoTareas';
import Usuarios from './Componentes/Usuarios';
import ClaseTarea from './Componentes/ClaseTarea'
import { useState, useRef } from 'react'

const paginas = ["tareas", "usuarios"]

function App() {
  const [page, setPage] = useState(paginas[0])
  // const [pagination, setPagination] = useState(0)
  const [usersData, setUsersData] = useState([])
  const [tareas, cambiarTareas] = useState(
      [
          new ClaseTarea("limpiar la casa", "15:30"),
          new ClaseTarea("llamar al sodero", "16:30")
      ]
  );
  const [tipoPopUp, cambiarTipo] = useState(null);

  const seed = useRef(Date.now());

  return (
    <>
      <nav class="navbar navbar-expand bg-light">
        <div class="container" style={{alignItems: "center", justifyContent: "center"}}>
          <div class="" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              { paginas.map(link => (
                <a class={`nav-link ${link == page ? "active" : ""}`} 
                onClick={()=>setPage(link)}
                href="#" style={{textTransform: "capitalize"}}>
                  {link}
                </a>
              )) }
            </div>
          </div>
        </div>
      </nav>
      { page == "tareas"
        ? <ListadoTareas tareas={tareas} cambiarTareas={cambiarTareas}
                         tipoPopUp={tipoPopUp} cambiarTipo={cambiarTipo}/>
        : <></>
      }
      { page == "usuarios"
        ? <Usuarios usuarios={usersData} cambiarUsuarios={setUsersData}
                    seed={seed}/>
        : <></>
      }
    </>
  );
}

export default App;
