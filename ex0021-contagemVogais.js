const input = require('readline-sync');

let palavra = input.question('Digite uma palavra para contar as vogais: ');
let quantidadeVogais = 0;
const vogais = ['a', 'e', 'i', 'o', 'u'];

function contarQuantidadeVogais() {
    for(let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i].toLowerCase())) {
            quantidadeVogais ++; 
        };
    }
}

contarQuantidadeVogais();

console.clear();
console.log(`A palavra ${palavra}, tem ${quantidadeVogais} vogais.`);


