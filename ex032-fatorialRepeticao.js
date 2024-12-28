const input = require('readline-sync');

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

let repetir = true;

while (repetir) {
    let numeroUsuario = Number(input.question('Digite um numero para descobrir o fatorial: '));

    const resultado = calcularFatorial(numeroUsuario);

    console.log(`O fatorial de ${numeroUsuario} é ${resultado}.`);
    console.log('Quer repetir a operação? ');
    console.log('[1] Sim.');
    console.log('[2] Não.');

    const escolha = input.question('Escolha uma opção: ');

    if (escolha !== '1') {
        repetir = false;
        console.log('Operação encerrada. Até a próxima!');
    }
}
