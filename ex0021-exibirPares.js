const input = require('readline-sync');

let quantidadePares = 0;

function descubraPares() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            quantidadePares += 1;
        }
    }
}

descubraPares();
console.log(`A quantidade de numeros pares entre 1 e 50 é: ${quantidadePares}.`);