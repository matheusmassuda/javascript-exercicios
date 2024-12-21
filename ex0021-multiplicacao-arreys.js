const input = require('readline-sync');

const numerosOriginais = [3, 5, 7, 9, 11];
const novosNumeros = [];

function multiplicarElementosArray() {
    for (let i = 0; i < numerosOriginais.length; i++) {
        novosNumeros.push(numerosOriginais[i] * 2);
    }
}

multiplicarElementosArray();

console.log(`Array original: ${numerosOriginais}.`);
console.log(`Novo array: ${novosNumeros}.`);