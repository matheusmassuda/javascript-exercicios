var input = require('readline-sync');

function classificaNotas() {
    const valorNotaArredondada = Number(Math.floor(input.question('Qual foi sua nota? ')));
    let classificacaoNota = ''
    
    switch(valorNotaArredondada) {
        case 9:
        case 10:
        //Também é possível usar: case valorNotaArredondada >= 9 && valorNotaArredondada <= 10: se adaptar o código
            classificacaoNota = 'excelente';
            break;
        case 7:
        case 8:
            classificacaoNota = 'bom';
            break;
        case 6:
        case 5:
            classificacaoNota = 'regular';
            break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            classificacaoNota = 'insuficiente';
            break;
        default:
            classificacaoNota ='valor invalido';
            break;
    }

    console.log(`A nota que voce tirou arredondada e ${valorNotaArredondada}, ${classificacaoNota}.`)
}

classificaNotas();
