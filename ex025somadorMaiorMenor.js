var input = require('readline-sync');

let valoresUsuario = [];
let somaValoresUsuario = 0;
let maiorValorUsuario = 0;
let menorValorUSUÁRIO = 0;

function coletarValoresUsuario() {
    for (let i = 1; i <= 5; i++) {
        let valor = Number(input.question(`Digite o ${i} valor: `));
        valoresUsuario.push(valor);
    }
}

function somarValoresUsuario() {
    for (let i = 0; i < valoresUsuario.length; i++) {
        somaValoresUsuario += valoresUsuario[i];
    }
}

function acharMaiorMenorValor() {
    const maiorValor = Math.max(...valoresUsuario);
    const menorValor = Math.min(...valoresUsuario);
    return {maiorValor, menorValor};
}

coletarValoresUsuario();
somarValoresUsuario();

const { maiorValor, menorValor} = acharMaiorMenorValor();

console.clear();
console.log(`O valores inseridos foram: ${valoresUsuario}.`);
console.log(`A soma de todos os valores digitados é: ${somaValoresUsuario}.`);
console.log(`O maior valor digitado é: ${maiorValor}`);
console.log(`O menor valor digitado é: ${menorValor}`);