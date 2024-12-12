var input = require('readline-sync');

const ANODENASCIMENTO = Number(input.question('Qual o ano voce nasceu? '));
let anoAtual = new Date().getFullYear();
let idadeAtual = anoAtual - ANODENASCIMENTO

function conferirMaioridade() {
    if (idadeAtual >= 18) {
        return true;
    } else if ( idadeAtual >= 0 &&
                idadeAtual < 18) {
        return false;
    } else {
        return 'invalido';
    }
}

let eMaiorDeIdade = conferirMaioridade();

if (eMaiorDeIdade == true) {
    console.clear();
    console.log(`Voce possui ${idadeAtual} anos. É maior de idade.`);
} else if (eMaiorDeIdade == 'invalido') {
    console.clear()
    console.log('[ERRO] Valor inválido.');
} else {
    console.clear();
    console.log(`Voce possui ${idadeAtual} anos. É menor de idade`);
}



