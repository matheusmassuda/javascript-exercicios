const input = require('readline-sync');

let quantidaNumeros = Number(input.question('Quantos valores deseja somar? '));
let somaNumeros = 0;

function somarNNumeros() {
    for (let i = 1; i <= quantidaNumeros; i++) {
        const numero = Number(input.question(`Digite o ${i}° numero: `));
        somaNumeros += numero;
    }
    console.clear();
    console.log(`A soma dos ${quantidaNumeros} numeros e: ${somaNumeros}.`)
}

somarNNumeros();