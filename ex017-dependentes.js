var input = require('readline-sync');

const NOMEFUNCIONARIO = input.question('Qual seu nome? ');
let salarioFuncionario = input.question('Qual seu salário atual? ');
let quantidadeDependentesFuncionario = Number(input.question('Quantos dependentes possui? '));


function calcularNovoSalarioComDependentes() {
    console.clear();
    
    if (quantidadeDependentesFuncionario == 0) {
        let salarioFuncionarioDependente = (1.05 * salarioFuncionario);
        console.log(`Seu novo salario com nenhum dependente R$${salarioFuncionarioDependente.toFixed(2)}.`)
    } else if (quantidadeDependentesFuncionario >= 1 &&
                quantidadeDependentesFuncionario <= 3
    ) {
        let salarioFuncionarioDependente = (1.1 * salarioFuncionario);
        console.log(`Seu novo salario com ${quantidadeDependentesFuncionario} dependentes: R$${salarioFuncionarioDependente.toFixed(2)};`);
    } else if (quantidadeDependentesFuncionario >= 4 &&
                quantidadeDependentesFuncionario <= 6
    ) {
        let salarioFuncionarioDependente = (1.15 * salarioFuncionario);
        console.log(`Seu novo salario com ${quantidadeDependentesFuncionario} dependentes: R$${salarioFuncionarioDependente.toFixed(2)};`);
    } else if (quantidadeDependentesFuncionario > 6) {
        let salarioFuncionarioDependente = (1.18 * salarioFuncionario);
        console.log(`Seu novo salario com ${quantidadeDependentesFuncionario} dependentes: R$${salarioFuncionarioDependente.toFixed(2)};`)
    } else {
        console.log('Valor inválido');
    }
}

calcularNovoSalarioComDependentes();
