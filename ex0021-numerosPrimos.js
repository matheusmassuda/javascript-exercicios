//NÃO CONSEGUI RESOLVER (COPIADO INTERNET)

for (let num = 2; num <= 50; num++) { // Laço para verificar todos os números de 2 a 50
    let isPrime = true; // Suponha que o número seja primo

    // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada de 'num'
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; // Se for divisível, não é primo
            break; // Não há necessidade de continuar a verificação
        }
    }

    // Se for primo, exibe o número
    if (isPrime) {
        console.log(num);
    }
}
