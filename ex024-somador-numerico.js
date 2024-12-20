const input = require('readline-sync');

let contador = 1;
let somaNumeros = 0;

function somarNumeros() {
    for(contador; contador <= 5; contador++) {
        somaNumeros += Number(input.question(`Digite o ${contador}° numero: `));
    }
    console.clear();
    console.log(`A soma dos 5 valores digitados é: ${somaNumeros}.`);
}

somarNumeros();