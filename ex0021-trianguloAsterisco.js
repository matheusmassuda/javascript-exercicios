const input = require('readline-sync');

const quantidadeDeLinhas = input.question('Digite quantidade de linhas do triangulo ');

function escreverTrianguloDeAsteriscos() {
    for(let i = 1; i <= quantidadeDeLinhas; i++) {
        console.log('*'.repeat(i))
    }
}

escreverTrianguloDeAsteriscos();