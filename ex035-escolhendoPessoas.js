const readlineSync = require('readline-sync');

// Função para obter informações sobre uma pessoa
function obterInformacoesPessoa(genero) {
  const nome = readlineSync.question(`Digite o nome do ${genero}: `);
  const idade = parseInt(readlineSync.questionInt(`Digite a idade de ${nome}: `), 10);
  const corPele = readlineSync.question('Escolha a cor da pele (Preto, Castanho, Loiro, Ruivo): ').toLowerCase();
  const corCabelo = readlineSync.question('Escolha a cor do cabelo (Castanho, Loiro, Preto, Ruivo): ').toLowerCase();

  return { nome, idade, corPele, corCabelo };
}

// Função para contar os homens com mais de 18 anos e cabelos castanhos
function contarHomens(homens) {
  return homens.filter(pessoa => pessoa.idade > 18 && pessoa.corCabelo === 'castanho').length;
}

// Função para contar as mulheres entre 25 e 30 anos e cabelos loiros
function contarMulheres(mulheres) {
  return mulheres.filter(pessoa => pessoa.idade >= 25 && pessoa.idade <= 30 && pessoa.corCabelo === 'loiro').length;
}

// Função principal para o cadastro e contagem
function main() {
  const homens = [];
  const mulheres = [];

  let continuar = true;

  while (continuar) {
    const genero = readlineSync.question('Você quer cadastrar um Homem ou Mulher? (Digite "Homem" ou "Mulher", ou "sair" para encerrar): ').toLowerCase();

    if (genero === 'sair') {
      continuar = false;
    } else if (genero === 'homem' || genero === 'mulher') {
      const pessoa = obterInformacoesPessoa(genero);

      if (genero === 'homem') {
        homens.push(pessoa);
      } else {
        mulheres.push(pessoa);
      }
    } else {
      console.log('Opção inválida. Tente novamente.');
    }
  }

  const totalHomens = contarHomens(homens);
  const totalMulheres = contarMulheres(mulheres);

  console.log(`Total de homens com mais de 18 anos e cabelos castanhos: ${totalHomens}`);
  console.log(`Total de mulheres entre 25 e 30 anos e cabelos loiros: ${totalMulheres}`);
}

main();
