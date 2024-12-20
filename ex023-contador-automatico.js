const input = require('readline-sync');

let ultimoNumeroContagem = Number(input.question('Ate qual numero devo contar? '));
let saltoDaContagem = Number(input.question('De quanto devera ser o salto da contagem? '));

function contarAteN() {
    resultadoEmLinha = '';
    for(let i = 0; i <= ultimoNumeroContagem; i += saltoDaContagem) {
        resultadoEmLinha += `${i}. `
    }
    console.clear();
    console.log(resultadoEmLinha.trim());
}

contarAteN();