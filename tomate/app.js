import { Gato } from "./Clases/gato.js";

const divGatos = document.querySelector('#gatos');

// Creamos el objeto
const garfield = new Gato("Garfield",  "garfield.png");
garfield.comida = "pescado";
const tom = new Gato("Tom",  "tom.png");
tom.comida = "albondigas con salsa";
const silvestre = new Gato("Silvestre",  "silvestre.png");
silvestre.comida = "asado";
const marie = new Gato("Marie",  "marie.png");
marie.comida = "sushi";

const gatos = [garfield,tom,silvestre,marie];

document.addEventListener('DOMContentLoaded', ()=>{
    gatos.map(gato  => {
        divGatos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./imagenes/${gato.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${gato.nombre}</h5>
                <p class="card-text">${gato.saludar()}  y me gusta comer ${gato.comida} .</p>
                <p class="card-text">Te doy albondigas.</p>
                <p class="card-text">${gato.comer('albondigas')}</p>
            
                </div>
        </div>

        `;
    })
})