const input = require('readline-sync');

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let resultadoSomaArray = 0;

function somarElementosArray() {
    for(let i = 0; i < numeros.length; i++) {
        resultadoSomaArray += numeros[i];
    }
}

somarElementosArray();
console.log(`A soma entre todos os elementos do array é: ${resultadoSomaArray}.`);