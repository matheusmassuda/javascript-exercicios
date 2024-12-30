/*
Código do exercício ex0035-validacaoErros.js refatorado: tirar repetições de código desnecessárias, melhor leitura e eficiência, especificação de erro (onde está).

-> manutenção simplificada: se precisar validar mais variáveis basta reutilziar a function
-> mensagem de erro mais clara: ajuda usuário ou dev identificar onde está o erro
-> evita repetição: função centraliza a lógica de validação, toda vez que precisar validar é só charmar a function sem ter que escrever a lógica de novo, torna código DRY (Don't Repeat Yourself).


*/

const input = require('readline-sync');

function validarNumero(valor, nomeCampo) {
    if (isNaN(valor)) {
        console.error(`Erro: O campo ${nomeCampo} deve ser um número válido.`);
        return false;
    }
    return true;
}

const idade = input.question(`Qual sua idade? `);
const altura = input.question(`Qual sua altura? `);
const peso = input.question(`Qual sua peso? `);

//validação
const idadeValida = validarNumero(idade, 'idade');
const alturaValida = validarNumero(altura, 'altura');
const pesoValido = validarNumero(peso, 'peso');

if (idadeValida && alturaValida && pesoValido) {
    console.log(`Idade: ${idade}, altura: ${altura}, peso: ${peso}.`)
} else {
    console.error(`Por favor, corrija os campos invalidos.`);
}

//node ex0035-errosRefatorado.js