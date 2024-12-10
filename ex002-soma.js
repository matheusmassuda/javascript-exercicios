/*
var readlineSync = require('readline-sync');
let primeiroNumero = Number(readlineSync.question('Digite um número qualquer: '));
let segundoNumero = Number(readlineSync.question('Agora, digite outro número: '));
let somaNumeros = primeiroNumero + segundoNumero;

console.log(`A soma entre ${primeiroNumero} e ${segundoNumero} é = ${somaNumeros}.`);
*/

var readlineSync = require('readline-sync');
let primeiroNumero = readlineSync.question('Digite um número qualquer: ');
let segundoNumero = readlineSync.question('Agora, digite outro número: ');
let somaNumeros = Number(primeiroNumero) + Number(segundoNumero);

console.log(`A soma entre ${primeiroNumero} e ${segundoNumero} é = ${somaNumeros}.`);