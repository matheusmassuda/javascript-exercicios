var input = require('readline-sync');

/* 
//Maneira 1-------------------------

let primeiroValor = Number(input.question('Digite um valor: '));

function descobrirSeParOuImpar() {
    if ((primeiroValor % 2) == 0) {
        return 'par'
    } else if ((primeiroValor % 2 == 1)) {
        return 'impar'
    } else {
        return 'invalido'
    }
}

const RESPOSTA = descobrirSeParOuImpar();

if (RESPOSTA == 'par') {
    console.log(`O numero ${primeiroValor} é par`);
} else if (RESPOSTA == 'impar') {
    console.log(`O numero ${primeiroValor} é impar`);
} else {
    console.log(`[ERRO]`);
}

*/


function eParOuImpar() {
    let numero = parseInt(input.question('Escreva um numero: ', 10));
    
    if (isNaN(numero)) {
        console.log('Escreva um número válido.');
        return;
    } else {
        let resultado = numero % 2 === 0 ? 'par': 'ímpar';
        console.log(`O numero ${numero} é ${resultado}`);
    }
}

eParOuImpar();