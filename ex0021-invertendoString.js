const input = require('readline-sync');

const palavraUsuario = input.question('Digite uma palavra para inverter: ');

let palavraUsuarioInvertida = '';

function inverterPalavraUsuario() {
    for (let i = palavraUsuario.length - 1; i >= 0; i--) {
        palavraUsuarioInvertida += palavraUsuario[i];
    }
}

inverterPalavraUsuario();
console.clear();
console.log(`A palavra ${palavraUsuario} invertida fica: ${palavraUsuarioInvertida}.`);
