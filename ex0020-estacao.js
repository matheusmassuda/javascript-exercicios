var input = require('readline-sync');

function descobrirEstacaoPeloMes() {
    let mesAtualEmNumero = Number(input.question('Escreva um numero de 1 ate 12 (mes), entao direi a estacao: '));
    let estacao = ''

    switch(mesAtualEmNumero) {
        case 12:
        case 1:
        case 2:
            estacao = 'verao';
            break;
        case 3:
        case 4:
        case 5:
            estacao = 'outono';
            break;
        case 6:
        case 7:
        case 8:
            estacao = 'inverno';
            break;
        case 9:
        case 10:
        case 11:
            estacao ='primavera';
            break;
        default:
            estacao = 'valor invalido';
            break;
    }

    console.log(`O mes de numero ${mesAtualEmNumero} esta no(a) ${estacao}.`)
}

descobrirEstacaoPeloMes();