const input = require('readline-sync');


function verificarPrimalidade(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {    
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function main() {
    console.clear();

    const numero = Number(input.question('Digite um numero para saber se e primo: '));
    const resultado = verificarPrimalidade(numero)
        ? 'e primo'
        : 'nao e primo';

    console.log(`O numero ${numero} ${resultado}.`)
    
}

main();

//Usa-se o método de teatar a raiz quadrada pois é mais eficiente e economiza processamento. Um numero é primo se for > 1 e divizível por um e ele mesmo.

//Um numero que não é primo (exemplo: 36) tem vários divisores, INCLUSIVE um divisor específico (raiz quadrada) dele, ou seja, podemos testar essa raiz direto para já descartar a hipótesae dele ser primo, sem testar quaisquer outros maiores do que a raíz dele.

//Ideia principal: Se um número tem um divisor maior que 1 (exceto ele mesmo), ele também terá um divisor menor ou igual à sua raiz quadrada. Isso acontece porque os divisores de um número sempre aparecem em pares.

/**
 1 x 36 = 36
 2 x 18 = 36
 3 x 12 = 36
 4 x 9 = 36
 6 x 6 = 36
 */
