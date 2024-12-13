var input = require('readline-sync');


function verificarAptidaoParaCnh() {
    let anoAtual = new Date().getFullYear();
    let anoDeNascimento = Number(input.question('Em que ano voce nasceu? '));
    let idadeAtual = anoAtual - anoDeNascimento;
    if (idadeAtual >= 18) {
        console.log(`Com ${idadeAtual} anos, voce está apto a tirar CNH.`);
    } else if (idadeAtual < 18 && idadeAtual >=0) {
        console.log(`Com ${idadeAtual} anos, voce está inapto a tirar CNH.`);
    } else {
        console.log('[ERRO] Valor inválido');
    }
}

verificarAptidaoParaCnh();