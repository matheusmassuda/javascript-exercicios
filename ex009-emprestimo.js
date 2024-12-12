var input = require('readline-sync');

let valorEmprestado = input.question('Quanto quer pegar emprestado? ');
let jurosDoImposto = input.question('Qual o valor dos juros do emprestimo? ');
let quantidadeDeParcelas = input.question('Em quantas parcelas pagara o emprestimo? ');
const TOTALIMPOSTOAPAGAR = Number(valorEmprestado) + Number(valorEmprestado * jurosDoImposto);

function acharValorDaParcela() {
    valorDasParcelas = (TOTALIMPOSTOAPAGAR / quantidadeDeParcelas);
    return valorDasParcelas;
}

const RESPOSTA = acharValorDaParcela();

if (isNaN(TOTALIMPOSTOAPAGAR)) {
    console.log('[ERRO] Valor inválido');
} else if (isNaN(quantidadeDeParcelas)) {
    console.log('[ERRO] Valor inválido');
} else {
    console.clear();
    console.log(`O valor total do emprestimo de R$${valorEmprestado}, é de R$${TOTALIMPOSTOAPAGAR}. Pagando em ${quantidadeDeParcelas} parcelas cada uma será de R$${RESPOSTA}.`);
}

