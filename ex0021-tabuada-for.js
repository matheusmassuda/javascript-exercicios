const input = require('readline-sync');

let numeroEscolhidoTabuada = Number(input.question('Digite um valor para calcular a tabuada: '));

function escreverTabuadaDeNumero() {
    for(let i = 1; i <= 10; i++) {
        console.log(`${numeroEscolhidoTabuada} x ${i} = ${numeroEscolhidoTabuada * i}`);
    }
}

escreverTabuadaDeNumero();