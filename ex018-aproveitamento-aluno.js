var input = require('readline-sync');

//Função apenas para coletar dados (importante)
function obterNota(mensagem) {
    while (true) {
        const nota = Number(input.question(mensagem));
        if (nota >= 0 &&
            nota <= 10
        ) return nota; {
            console.log('Nota inválida. Insira um valor de 0 até 10.')
        }
    }
}

const NOTAP1 = obterNota('Quanto tirou na primeira prova? ')
const NOTAP2 = obterNota('Quanto tirou na segunda prova? ')
const MEDIAP1P2 = ((NOTAP1 + NOTAP2) / 2).toFixed(2);
let aproveitamentoAluno = '';

function calcularAproveitamentoAlunoP1P2() {
    console.clear();
    if (MEDIAP1P2 >= 9) {
        aproveitamentoAluno = 'A';
    } else if (MEDIAP1P2 >= 7) {
        aproveitamentoAluno = 'B';
    } else if (MEDIAP1P2 >= 5) {
        aproveitamentoAluno = 'C';
    } else if (MEDIAP1P2 >= 3) {
        aproveitamentoAluno = 'D';
    } else if (MEDIAP1P2 >= 1) {
        aproveitamentoAluno = 'E';
    } else if (MEDIAP1P2 < 1) {
        aproveitamentoAluno = 'F';
    } else {
        console.log('Valor inválido.');
    }
}
calcularAproveitamentoAlunoP1P2();

//Antes esse comando estava em cada linha da função calcularAproveitamentoAlunop1p2, foi reestruturado.
console.log(`Sua media foi ${MEDIAP1P2}, aproveitamento ${aproveitamentoAluno}.`);