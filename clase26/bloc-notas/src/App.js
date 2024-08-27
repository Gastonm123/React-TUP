import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <label for="nombre">Nombre</label> <br/>
      <input type="text" name="nombre"/> <br/>
      <label for="apellido">Apellido</label> <br/>
      <input type="text" name="apellido"/> <br/>
      <label for="fecha_nacimiento">Fecha Nacimiento</label> <br/>
      <input type="date" name="fecha_nacimiento"/> <br/>
      <Boton text="Confirmar"/>
    </form>
  );
}

export default App;
