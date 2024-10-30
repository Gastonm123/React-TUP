function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ClaseTarea {
    constructor(titulo, tiempo) {
        this.titulo = capitalizeFirstLetter(titulo)
        this.tiempo = tiempo
    }
}

export default ClaseTarea