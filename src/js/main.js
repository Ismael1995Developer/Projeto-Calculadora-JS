// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

// importação do utilitario
import { calcular } from './ultitario';

// declaração de variavel para document.ID
const inputSaidaCal = document.querySelector("#inputSaidaCal");
const btnResul = document.querySelector("#btnResul");
const btnC = document.querySelector("#btnC");
const botoes = document.querySelectorAll("button");

let display = "";

// função apagar 
btnC.addEventListener("click", () => {
    display = "";              
    inputSaidaCal.value = display; 
});



// função de captura de eventos e validação de number
botoes.forEach(btn => btn.addEventListener("click", () => {
    display += btn.value;
    inputSaidaCal.value = display;
}));

// função resultado 
btnResul.addEventListener("click", () => {
    let partes = display.match(/\d+|\+|\-|\√|\^|\*|\/|%|\./g);

    let numeros = partes.map(parte => 
        ["+", "-", "*", "/", "^", "%","√"].includes(parte) ? parte : Number(parte)
    );

    let resultado = calcular(numeros);
    inputSaidaCal.value = resultado;
    display = resultado.toString();
});


