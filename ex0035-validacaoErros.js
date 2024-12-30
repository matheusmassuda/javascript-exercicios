const input = require('readline-sync');

//parseInt -> converte string em número inteiro (ignora decimal), indicado para números que rpecisam ser inteiros

//parseFloat -> converte string para número de ponto flutuante (mantém decimal), indicado para números que podem conter decimal (altura, peso, receitas)

//Number converte string para número (com / sem decimal) dependendo da entrada
const idade = parseInt(input.question('Digite sua idade: '));
const altura = parseFloat(input.question('Digite sua altura (ate duas casas decimais): ')).toFixed(2);
const peso = parseFloat(input.question('Digite seu peso (ate duas casas decimais): '));

//Tratativa de erros e validações de entrada de variáveis
//console.log( ) -> Imprime mensagens genéricas ou informativas, Usado para logs de depuração e testes. Aparência padrão no console.

//console.error( ) -> exibe error, destaca problemas (desenvolvimento e depuração), não se confunde com logs gerais. Destaque visual (geralmente em vermelho). Destaca erros ou mensagens críticas.
if (isNaN(idade) || isNaN(altura) || isNaN(peso)) {
    console.error('Por favor, insira valores numericos validos.')
} else {
    console.log(`idade: ${idade}, peso: ${altura}, altura: ${peso}.`)
}


//node ex0035-validacaoErros.js

