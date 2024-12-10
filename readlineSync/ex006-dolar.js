var input = require('readline-sync');

let saldoRealBr = input.question('Qual seu saldo em reais - R$(BRL)? ');
let cotacaoDolarHoje = input.question('Qual a cotacao do Dolar(USD) em Real brasileiro (BRL) hoje ?');
let saldoDolarUsd = (saldoRealBr / cotacaoDolarHoje).toFixed(2)
console.clear();

if (saldoRealBr >= 0) {
    console.log(`Seu(s) R$ ${saldoRealBr} valem $ ${saldoDolarUsd} hoje.`)
} else {
    console.log('[ERRO]: Valor inválido.')
}

//if == validação para valores negativos digitados acidentalmente