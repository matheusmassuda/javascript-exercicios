var input = require('readline-sync');

function statusSemaforoPorCor() {
    let corAtualSemaforo = input.question('Em qual cor o semaforo esta? ');
    let corAtualSemaforoMin = corAtualSemaforo.toLowerCase();
    let statusSemaforo = ''

    switch(corAtualSemaforoMin) {
        case 'vermelho':
            statusSemaforo = 'Pare!';
            break;
        case 'amarelo':
            statusSemaforo = 'Atencao!';
            break;
        case 'verde':
            statusSemaforo = 'Siga!';
            break;
        default:
            statusSemaforo = 'cor não identificada';
            break;
    }

    console.log(`A cor do semaforo está ${corAtualSemaforoMin}, ${statusSemaforo}.`)
}

statusSemaforoPorCor();
