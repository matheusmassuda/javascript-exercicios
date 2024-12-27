const input = require('readline-sync');

let numeroUsuario = Number(input.question('Digite um numero para descobrir o fatorial: '));

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--){
        fatorial *= i;
    }
    return fatorial;
}

const resultado = calcularFatorial(numeroUsuario);

console.log(`O fatorial de ${numeroUsuario} é ${resultado}.`);