var input = require('readline-sync');

let valoresEmReal = [];
let valoresEmDolar = [];
let quantidadeConversoes = Number(input.question('Quantos conversoes deseja fazer? '));
let dolarHoje = 6.21;


function coletarNValores() {
    for (let i = 1; i <= quantidadeConversoes; i++) {
        let valor = Number(input.question(`Digite o valor ${i}: `));
        valoresEmReal.push(valor);
    }
}

function converterValoresParaDolar() {
    for (let i = 0; i < valoresEmReal.length; i++) {
        let conversao = (valoresEmReal[i] / dolarHoje).toFixed(2);
        valoresEmDolar.push(conversao);
    }
}

coletarNValores();
converterValoresParaDolar();

console.log(`Os valores em dolar sao: ${valoresEmDolar}.`)

