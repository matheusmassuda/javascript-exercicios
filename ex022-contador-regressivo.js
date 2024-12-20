const input = require('readline-sync');

function contagemRegressiva() {
    let resultadoEmLinha = '';
    for(let i = 10; i >= 0; i--) {
        resultadoEmLinha += `${i}. `;
    }
    console.log(resultadoEmLinha.trim());
}

contagemRegressiva();