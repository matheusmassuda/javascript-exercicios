// EXERCÍCIO ANTERIOR REFATORADO:
const input = require('readline-sync');

// Constantes para valores fixos
const START = 0;
const END = 10;

function exibirMenu() {
    console.log(`Menu: 
[1] Contar de ${START} até ${END}
[2] Contar de ${END} até ${START}
[3] Cancelar`);
}

function obterOpcao() {
    const opcao = Number(input.question('Digite o número da opção: '));
    return isNaN(opcao) ? -1 : opcao; // Retorna -1 para entradas inválidas
}

function processarOpcao(opcao) {
    switch (opcao) {
        case 1:
            return { start: START, end: END };
        case 2:
            return { start: END, end: START };
        case 3:
            console.log('Até a próxima.');
            return null; // Indica saída
        default:
            console.log('Opção inválida.');
            return null; // Indica saída
    }
}

function mostrarContagem(start, end) {
    const step = start < end ? 1 : -1; // Define a direção da contagem
    for (let i = start; i !== end + step; i += step) {
        console.log(i);
    }
}

function menu() {
    console.clear();
    exibirMenu();
    const opcao = obterOpcao();
    const range = processarOpcao(opcao);

    if (range) {
        mostrarContagem(range.start, range.end);
    }
}

menu();


//node ex0034-superCotnador.js