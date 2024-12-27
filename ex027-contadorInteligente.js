var input = require('readline-sync');

let valorInicial = Number(input.question('Digite o valor inicial da contagem: '));
let valorFinal = Number(input.question('Digite o valro final da contagem: '));

function escreverContagem() {
    let contagemEmLinha = [];
    if (valorFinal > valorInicial) {
        console.log('Contagem PROGRESSIVA: ')
        for (let i = valorInicial; i <= valorFinal; i++) {
            contagemEmLinha.push(i);
        }
    } else if (valorInicial > valorFinal){
        console.log('Contagem REGRESSIVA: ')
        for( let i = valorInicial; i >= valorFinal; i--) {
            contagemEmLinha.push(i);
        }
    } else {
        console.log('Os valores são iguais, nao ha contagem a ser feita');
    }

    console.log(contagemEmLinha.join(', '));
}

escreverContagem();
