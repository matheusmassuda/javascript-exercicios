const input = require('readline-sync');

const frutas = ['maçã', 'banana', 'uva', 'laranja', 'abacaxi', 'pêra'];

function exibirArrayFrutas() {
    for(let i = 0; i < frutas.length; i++) {
        console.log(`${frutas[i]} `);
    }
}

exibirArrayFrutas();