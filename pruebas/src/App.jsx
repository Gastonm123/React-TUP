import logo from './logo.svg';
import './App.css';
import ListadoTareas from './Componentes/ListadoTareas';
import Usuarios from './Componentes/Usuarios';
import { useState } from 'react'

function App() {
  const [pestania, setPestania] = useState("tareas")
  function manejarClickTareas() {
    // pestania = "tareas"
    setPestania("tareas")
  }
  function manejarClickUsuarios() {
    // pestania = "usuarios"
  }
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" 
          onClick={manejarClickTareas}
          href="#">Tareas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" 
          onClick={manejarClickUsuarios}
          href="#">Usuarios</a>
        </li>
      </ul>
      { ---
      ? <ListadoTareas />
      : <></>
      }
      { ---
      ? <Usuarios />
      : <></>
      }
    </>
  );
}

export default App;
