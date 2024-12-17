var input = require('readline-sync');

function statusDePartida() {
    let golsPrimeiroTime = Math.abs(Number(input.questionInt('Quantos gols o primeiro time marcou? ')));
    let golsSegundoTime = Math.abs(Number(input.questionInt('Quantos gols o segundo time marcou? ')));
    console.clear();
    console.log(`O resultado do jogo foi ${golsPrimeiroTime} a ${golsSegundoTime}`);
    
    if (golsPrimeiroTime == golsSegundoTime) {
        console.log('Empate');
    } else if (Math.abs(golsPrimeiroTime - golsSegundoTime) >= 1 &&
        Math.abs(golsPrimeiroTime - golsSegundoTime) <= 3
    ) {
        console.log('Normal');
    } else if (Math.abs(golsPrimeiroTime - golsSegundoTime) > 3) {
        console.log('Goleada');
    } else {
        console.log('Digite valores válidos');
    }
}

statusDePartida();