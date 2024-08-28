export default function Chat() {
    return (
        
        <main class="chat-container">
            <BarraEstado />
            <CuerpoChat />
        <footer class="chat-input">
            <input type="text" placeholder="Escribe un mensaje...">
            <button>Enviar</button>
        </footer>
        </main>
    )
}