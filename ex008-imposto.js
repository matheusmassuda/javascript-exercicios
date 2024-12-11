var input = require('readline-sync');

let custoTotalProdutosDolar = Number(input.question('Quanto gastou em dolar em todos os produtos? '));
console.clear();

function calcularImpostoSobreImportados() {
    if (
        custoTotalProdutosDolar >= 0 && 
        custoTotalProdutosDolar <= 50
    ) {
            return primeiraAliquota = (custoTotalProdutosDolar * (1.2)).toFixed(2);
    } else if (
        custoTotalProdutosDolar > 50 &&
        custoTotalProdutosDolar < 3000
    ) {
            return segundaAliquota = ((custoTotalProdutosDolar * (1.6)) + 20).toFixed(2);
    } else {
        return aliquotaNaoExiste = 'Valor inválido.'
    }
}

let valorImpostoAPagar = calcularImpostoSobreImportados();

if (valorImpostoAPagar === 'Valor inválido') {
    console.log('[ERRO] Valor inválido')
} else {
    console.log(`Importando $${custoTotalProdutosDolar} você deverá pagar R$${valorImpostoAPagar} somando o produto e imposto no Brasil.`);
}



