import './App.css';
import ListadoTareas from './Componentes/ListadoTareas';
import Usuarios from './Componentes/Usuarios';
import { useState } from 'react'

const paginas = ["tareas", "usuarios"]

function App() {
  const [page, setPage] = useState(paginas[0])
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
        ? <ListadoTareas />
        : <></>
      }
      { page == "usuarios"
        ? <Usuarios />
        : <></>
      }
    </>
  );
}

export default App;
