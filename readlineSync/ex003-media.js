var readlineSync = require('readline-sync');

let primeiroNumero = Number(readlineSync.question('Digite um número qualquer: '));
let segundoNumero = Number(readlineSync.question('Digite outro valor: '));
let mediaNumeros = (primeiroNumero + segundoNumero) / 2;

console.log(`A média aritmética entre os números ${primeiroNumero} e ${segundoNumero} é igual a: ${mediaNumeros}.`);
