const data = [
    {
        nombre: "Salmón al Horno",
        ingredientes: [
            { nombre: "Salmón", cantidad: 1, medida: "l lb" },
            { nombre: "Piñones", cantidad: 1, medida: "taza" },
            { nombre: "Lechuga de Manteca", cantidad: 2, medida: "tazas" },
            { nombre: "Calabacín Amarillo", cantidad: 1, medida: "med" },
            { nombre: "Aceite de Oliva", cantidad: 0.5, medida: "taza" },
            { nombre: "Ajo", cantidad: 3, medida: "dientes" }
        ],
        pasos: [
            "Precalienta el horno a 350 grados.",
            "Esparce el aceite de oliva alrededor de un molde de vidrio para hornear.",
            "Añade el calabacín amarillo y coloca en el horno por 30 minutos.",
            "Agrega el salmón, el ajo y los piñones al molde.",
            "Hornea durante 15 minutos.",
            "Retira del horno. Añade la lechuga y sirve."
        ]
    },
    {
        nombre: "Tacos de Pescado",
        ingredientes: [
            { nombre: "Pescado Blanco", cantidad: 1, medida: "l lb" },
            { nombre: "Queso", cantidad: 1, medida: "taza" },
            { nombre: "Lechuga Iceberg", cantidad: 2, medida: "tazas" },
            { nombre: "Tomates", cantidad: 2, medida: "grande" },
            { nombre: "Tortillas", cantidad: 3, medida: "med" }
        ],
        pasos: [
            "Cocina el pescado en la parrilla hasta que esté bien cocido.",
            "Coloca el pescado en las 3 tortillas.",
            "Añade lechuga, tomates y queso por encima."
        ]
    }
];


function Receta (props) {
...
}
function Menu (props) {
...
}

ReactDOM.render(
<Menu recetas={data} titulo="Recetas deliciosas" />,
document.getElementById("root")
);

