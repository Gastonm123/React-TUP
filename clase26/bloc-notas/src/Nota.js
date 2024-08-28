import Boton from './Boton'

export default function Nota () {
    return (
        <section style={{margin: "30px", display: "inline-block"}}>
            <label for="titulo">Nota</label> <br/>
            <input type="text" name="titulo" disabled/> <br/>
            <label for="cuerpo_nota">Escribir Nota</label> <br/>
            <textarea name="cuerpo_nota" disabled></textarea> <br/> <br/>
            <Boton text="Guardar"/>
        </section>
    );
}