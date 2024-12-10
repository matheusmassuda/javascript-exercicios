var readlineSync = require('readline-sync');
let name = readlineSync.question('Digite seu nome: ');
console.log(`Seja bem vindo ${name}.`);
