var input = require('readline-sync');

let agora = new Date();
let anoAtual = Number(agora.getFullYear());
let anoNascimento = Number(input.question('Qual o ano do seu nascimento? '))
let idade = anoAtual - anoNascimento

if (anoNascimento > anoAtual) {
    console.log('[ERRO]: valor inválido.')
} else {
    console.log(`Hoje, você deve colocar ${idade} velas em seu bolo de aniversário.`)
}

//Esqueci de fazer validação: anoNascimento > anoAtual