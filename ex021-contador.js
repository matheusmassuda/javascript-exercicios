const input = require('readline-sync');

function contarAte10() {
    let resultadoEmLinha = '';
    for(let i = 0; i <= 10; i++) {
     resultadoEmLinha += `${i}. `; 
    }
    console.log(resultadoEmLinha.trim());
}

contarAte10();