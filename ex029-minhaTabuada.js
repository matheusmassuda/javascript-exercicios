var input = require('readline-sync');

const numeroUsuario = Number(input.question('Digite um numero para exibir a tabuada: '));

function mostrarTabuadaNumero() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroUsuario} x ${i} = ${(numeroUsuario * i).toFixed(2)}`);
    }
}

mostrarTabuadaNumero();
