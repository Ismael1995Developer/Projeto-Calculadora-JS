// função de soma, subtração, divisão e multiplicação
export const calcular = (partes) => {
    let resultado = partes[0]; //começa com o primeiro numero armazenado 
    for (let i = 1; i < partes.length; i += 2) {
        let operador = partes[i];
        let numero = partes[i + 1];
        switch (operador) {
            case "+": resultado += numero; break;
            case "-": resultado -= numero; break;
            case "*": resultado *= numero; break;
            case "/": resultado /= numero; break;
            case "^": resultado **= numero; break;
            case "%": resultado %= numero; break;
            case "√": resultado = Math.sqrt(resultado); break;
    }
  }
  return resultado;
};
