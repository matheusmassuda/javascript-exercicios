var input = require('readline-sync');

let quantidadeAlunos = Number(input.question('Quantos alunos tem a sala? '));
let nomeAlunos = [];
let notaAlunos = [];

function coletarNomeNotaAluno() {
    for (let i = 1; i <= quantidadeAlunos; i++) {
        perguntaNome = input.question(`Qual o nome do aluno ${i}: `);
        nomeAlunos.push(perguntaNome);
        perguntaNota = Number(input.question(`Qual a noma do(a) ${perguntaNome}? `));
        notaAlunos.push(perguntaNota);
    }
}

function acharMaiorNota() {
    const maiorNota = Math.max(...notaAlunos);
    const indiceMaiorNota = notaAlunos.indexOf(maiorNota);
    const alunoComMaiorNota = nomeAlunos[indiceMaiorNota];
    return { maiorNota, alunoComMaiorNota};
}

coletarNomeNotaAluno();

const { maiorNota, alunoComMaiorNota } = acharMaiorNota();

console.clear();
console.log(nomeAlunos);
console.log(notaAlunos);
console.log(`O aluno com maior nota foi: ${alunoComMaiorNota}, com ${maiorNota}.`)