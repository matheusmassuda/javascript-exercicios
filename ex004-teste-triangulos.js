var readlineSync = require('readline-sync');

console.log('Teste de triangulos Δ');

let primeiroLado = Number(readlineSync.question('Digite o valor do primeiro lado da figura: '));
let segundoLado = Number(readlineSync.question('Digite o valor do segundo lado da figura: '));
let terceiroLado = Number(readlineSync.question('Digite o valor do terceiro lado da figura: '));

function podeSerTriangulo(primeiroLado, segundoLado, terceiroLado) {
    if (
        primeiroLado + segundoLado > terceiroLado &&
        segundoLado + terceiroLado > primeiroLado &&
        primeiroLado + terceiroLado > segundoLado
    ) {
        return true;
    } else {
        return false;
    }
}

let eUmTriangulo = podeSerTriangulo(primeiroLado, segundoLado, terceiroLado);

if (eUmTriangulo == true) {
    console.log('Pode ser um triângulo.');
} else {
    console.log(`Os lados ${primeiroLado}, ${segundoLado} e ${terceiroLado}, não podem formar um triângulo.`);
}

function acharTipoTriangulo() {
    if (
        primeiroLado == segundoLado &&
        segundoLado == terceiroLado
    ) {
        return 'equilatero';
    } else {
        return 'escaleno';
    }
}

let tipoTriangulo = acharTipoTriangulo(primeiroLado, segundoLado, terceiroLado);

if (tipoTriangulo == 'equilatero') {
    console.log('O triângulo é equilátero.');
} else if (eUmTriangulo == false) {
    console.log(' ');
} else {
    console.log('O triângulo é escaleno.');
}