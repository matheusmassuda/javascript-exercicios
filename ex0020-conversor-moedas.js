const input = require('readline-sync');

function conversorMoeda() {
    let nomeMoedaConverter = input.question('Qual valor de conversao voce quer saber? [dolar], [euro], [libra], [iene]. ').toLowerCase();
    let valorMoedaHoje = 0

    switch(nomeMoedaConverter) {
        case 'dolar':
            valorMoedaHoje = 6.08;
            break;
        case 'euro':
            valorMoedaHoje = 6.39;
            break;
        case 'libra':
            valorMoedaHoje = 7.74;
            break;
        case 'iene':
            valorMoedaHoje = 0.040;
            break;
        default:
            valorMoedaHoje = 'inválido';
            break;
    }

    console.log(`O valor em reais do(a) ${nomeMoedaConverter} hoje é: ${valorMoedaHoje}.`)
}

conversorMoeda();