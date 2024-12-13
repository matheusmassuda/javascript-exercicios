var input = require('readline-sync');

function verificarAprovadoOuReprovado() {
    let notaP1 = Number(input.question('Digite a nota da primeira prova: '));
    let notaP2 = Number(input.question('Digite a nota da segunda prova: '));
    const MEDIAP1P2 = (notaP1 + notaP2) / 2;

    if (MEDIAP1P2 >= 7 && MEDIAP1P2 <= 10) {
        console.log(`Aluno aprovado com média ${MEDIAP1P2}.`);
    } else if (MEDIAP1P2 >= 0 && MEDIAP1P2 < 7) {
        console.log(`Aluno reprovado com média ${MEDIAP1P2}.`);
    } else {
        console.log('[ERRO] Digite um valor válido');
    }
}

verificarAprovadoOuReprovado();