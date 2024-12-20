var input = require('readline-sync');

function calculadoraSimplesSwitch() {
    let primeiroValor = Number(input.question('Digite um numero: '));
    let segundoValor = Number(input.questionInt('Digite outro numero: '));
    let operacao = input.question('Qual operacao deve ser realizada? [soma] [subtracao] [multiplicacao] [divisao] ');
    let resultadoOperacao = 0

    switch(operacao) {
        case 'soma':
            resultadoOperacao = primeiroValor + segundoValor;
            break;
        case 'subtracao':
            resultadoOperacao = primeiroValor - segundoValor;
            break;
        case 'multiplicacao':
            resultadoOperacao = primeiroValor * segundoValor;
            break;
        case 'divisao':
            resultadoOperacao = primeiroValor / segundoValor;
            break;
        default:
            console.log('Valores inválidos');
    }

    console.log(`O resultado da ${operacao} entre ${primeiroValor} e ${segundoValor} é: ${resultadoOperacao.toFixed(2)}`);
}

calculadoraSimplesSwitch();
