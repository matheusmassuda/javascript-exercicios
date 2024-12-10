var readlineSync = require('readline-sync');
let name = readlineSync.question('Qual o seu nome completo? ');
console.log(`Seja bem vindo ao node ${name}.`);