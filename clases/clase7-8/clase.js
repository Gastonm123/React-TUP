import React from 'react';
import ReactDOM from 'react-dom';

/*
const h1 = React.createElement('h1', { id: "receta-0", class: "titulo-receta", diasemana: "miercoles" }, "Salmon Cocido")

ReactDOM.render(h1, document.getElementById("root"));
*/

const ingredients = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
]

const ingredients_sandwich = [
    "pan",
    "jamon",
    "queso"
]

function IngredientsList(ingredients) {
    let v = []
    for (let i = 0; ingredients.length; i++) {
        v.append(React.createElement("li", null, ingredients[i]));
    }
    return React.createElement(
        "ul",
        { className: "ingredients" },
        ...v
    );
}


const ing = IngredientsList(ingredients);
const ing2 = IngredientsList(ingredients_sandwich);

ReactDOM.render([ing, ing2], document.getElementById("root"));


let contenidoTabla = [
    ["Catriel", "Tulian", "20"],
    ["Valentin", "Cabrera", "22"]
]

const table = React.createElement(
    "table",
    null,
    React.createElement("tr", null,
        React.createElement("td", null, "Nombre"),
        React.createElement("td", null, "Apellido"),
        React.createElement("td", null, "Edad"),
    ),
    React.createElement("tr", null,
        React.createElement("td", null, "Catriel"),
        React.createElement("td", null, "Tulian"),
        React.createElement("td", null, "20"),
    ),
    React.createElement("tr", null,
        React.createElement("td", null, "Valentin"),
        React.createElement("td", null, "Cabrera"),
        React.createElement("td", null, "22"),
    )
)

ReactDOM.render(table, document.getElementById("root"));
























function imprimir_argumentos(...argumentos) {
    argumentos.forEach(argumento => {
        console.log(argumento)
    });
}


function IngredientsList() {
    return React.createElement(
        "ul",
        { className: "ingredients" },
        React.createElement("li", null, "1 cup unsalted butter"),
        React.createElement("li", null, "1 cup crunchy peanut butter"),
        React.createElement("li", null, "1 cup brown sugar"),
        React.createElement("li", null, "1 cup white sugar"),
        React.createElement("li", null, "2 eggs"),
        React.createElement("li", null, "2.5 cups all purpose flour"),
        React.createElement("li", null, "1 teaspoon baking powder"),
        React.createElement("li", null, "0.5 teaspoon salt")
    );
}
ReactDOM.render(
    React.createElement(IngredientsList, null, null),
    document.getElementById("root")
);
(
    <IngredientsList>
        <ul className="ingredients">
            <li>1 cup unsalted butter</li>
            <li>1 cup crunchy peanut butter</li>
            <li>1 cup brown sugar</li>
            <li>1 cup white sugar</li>
            <li>2 eggs</li>
            <li>2.5 cups all purpose flour</li>
            <li>1 teaspoon baking powder</li>
            <li>0.5 teaspoon salt</li>
        </ul>
    </IngredientsList>
)

import React from 'react';
import ReactDOM from 'react-dom';


// Crear una aplicacion de React con create-react-app
// Asegurarse que en la pagina principal HTML exista un elemento root o app donde podamos colgar nuestro elementos de React
// Crear un componente que genere una lista de frutas con algunas frutas y renderise la lista desde el elemento root

function FruitsList() {
    return React.createElement(
        "ul",
        { className: "fruits" },
        React.createElement("li", null, "Manzana"),
        React.createElement("li", null, "Plátano"),
        React.createElement("li", null, "Cereza"),
        React.createElement("li", null, "Fresa"),
        React.createElement("li", null, "Naranja")
    );
}

ReactDOM.render(
    React.createElement(FruitsList, null, null),
    document.getElementById("root")
);
