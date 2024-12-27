const input = require('readline-sync');

let quantidadeNumeros = 0;
let numerosUsuario = [];

function coletarNumerosUsuario() {
    quantidadeNumeros = Number(input.question('Quantos numeros devo salvar? (maximo de 5). '))

    while (quantidadeNumeros > 5 || quantidadeNumeros < 1 || isNaN(quantidadeNumeros)) {
        console.log(`Por favor, a quantidade de numeros salvos deve estar entre 1 e 5.`);
        quantidadeNumeros = Number(input.question('Quantos numeros devo salvar? (maximo de 5). '));
    }

    for (let i = 1; i <= quantidadeNumeros; i++) {
        coletaNumero = Number(input.question(`Digite o ${i}° numero: `));
        numerosUsuario.push(coletaNumero);
    }
}

coletarNumerosUsuario();

let numerosNegativos = 0;

function encontrarNegativos() {
    for (let i = 0; i < numerosUsuario.length; i++) {
        if (numerosUsuario[i] < 0) {
            numerosNegativos += 1;
        } else {
            numerosNegativos += 0;
        }
    }
}

encontrarNegativos();

console.log(`Dos ${quantidadeNumeros} numeros digitados, existem ${numerosNegativos} numeros negativos.`)