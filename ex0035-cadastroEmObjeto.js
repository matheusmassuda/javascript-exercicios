// cadastro em um objeto (sem validação de string)

const input = require('readline-sync');

let a = obterInformacoesPessoa();

function obterInformacoesPessoa() {
    const nome = input.question(`Digite o nome da pessoa: `);
    const idade = Number(input.question(`Digite a idade de ${nome}: `));
    const corPele = input.question(`Escolha a cor da pele (Preto, Branco, Amarelo): `).toLowerCase();
    const corCabelo = input.question(`Escolha a cor do cabelo (Preto, Loiro, Castanho, Ruivo): `).toLowerCase();
    const altura = Number(input.question(`Qual a altura do(a) ${nome}? `));
    let escolaridade = input.question(`Qual o grau de escolaridade do(a) ${nome} (fundamental, medio, superior, mestre, doutror): `).toLowerCase();

    return { nome, idade, corPele, corCabelo, altura, escolaridade};
}


console.log(a)

//node ex0035-cadastroEmObjeto.js