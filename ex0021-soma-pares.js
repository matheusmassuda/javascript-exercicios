const input = require('readline-sync');

let somaPares = 0;

function acharNumerosPares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            somaPares += i;
        } 
    }
}

acharNumerosPares();
console.log(`A soma de todos os numeros pares ate 20 é: ${somaPares}`);