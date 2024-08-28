import BarraLateral from "./BarraLateral";

let mensajes = ["Hola, ¿cómo estás?", "Hola, estoy bien, ¿y tú?"]

export default function App() {
    return (
        <div class="container">
            <BarraLateral />
            <Chat mensajes={mensajes}/>
        </div>
    )
}