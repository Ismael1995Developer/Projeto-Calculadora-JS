// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';


// declaração de variavel para document.ID
const inputSaidaCal = document.querySelector("#inputSaidaCal");
const btnResul = document.querySelector("#btnResul");
const btnC = document.querySelector("#btnC");
const botoes = document.querySelectorAll("button");
const btnCe = document.querySelector("#btnCe");

let display = "";

// função apagar 
btnCe.addEventListener("click", () => {
    display = "";
    inputSaidaCal.value = display; 
});

// função excluir caracter 
btnC.addEventListener("click", () => {
    display = display.slice(0, -1);
    inputSaidaCal.value = display; 
})

// função de captura de eventos e validação de number
botoes.forEach(btn => btn.addEventListener("click", () => {
    // pega o ultimo numero digitado 
    let ultimaParte = display.split(/[\+\-\*\/\^%√]/).pop();

    // Validação de ponto 
    if (btn.value === "." && ultimaParte.includes(".")) {
        return;
    }

    display += btn.value;
    inputSaidaCal.value = display;
}));

const calcular = (partes) => {
    let resultado = partes[0]; //começa com o primeiro numero armazenado 

    
    for (let i = 0; i < partes.length; i++) {
        let operador = partes[i];

         // condição se for raiz mudar a ordem de operação 
         if (operador === "√") {
            let numero = parseFloat(partes[i + 1]);
            resultado = Math.sqrt(numero);

        } else if (!isNaN(operador)) {
        // primeiro número
            if (resultado === undefined) { 
                resultado = parseFloat(operador); 
            }
        } else {
            // operadores normais
            let numero = parseFloat(partes[i + 1]);

        switch (operador) {
            case "+": resultado += numero; break;
            case "-": resultado -= numero; break;
            case "*": resultado *= numero; break;
            case "/": resultado /= numero; break;
            case "^": resultado **= numero; break;
            case "%": resultado = (resultado * numero) / 100; break;
    }
    i++;
    }
  }
  return resultado;
}

try {
    // função resultado 
btnResul.addEventListener("click", () => {
    let partes = display.match(/(\d+(\.\d+)?)|[\+\-\*\/√\^%]/g);
    
    let numeros = partes.map(parte => 
        ["+", "-", "*", "/", "^", "%","√"].includes(parte) ? parte : Number(parte)
    );

    let resultado = calcular(numeros);
        if (isNaN(resultado)) {
            inputSaidaCal.value = "Operação invalida";
        }else {
            inputSaidaCal.value = resultado;
            display = "";
        }
   });
} catch (error) {
    inputSaidaCal = "erro na função";
}


