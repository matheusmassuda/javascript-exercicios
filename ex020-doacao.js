var input = require('readline-sync');

function valorDoadoPorOpcao() {
    console.log('[1] para doar R$ 10,00')
    console.log('[2] para doar R$ 25,00')
    console.log('[3] para doar R$ 50,00')
    console.log('[4] para doar outros valores')
    console.log('[5] para cancelar')

    let numeroOpcao = Number(input.question('Qual opcao quer escolher? '))
    let valorDoado = 0

    switch(numeroOpcao) {
        case 1:
            valorDoado = 10
            break;
        case 2: 
            valorDoado = 25
            break;
        case 3:
            valorDoado = 50
            break;
        case 4:
            valorDoado = Number(input.question('Qual valor deseja doar?'));
            break;
        case 5:
            valorDoado = 0
            break;
        default:
            console.log('Sua doação será considerada R$0,00');
            break;
    }

    console.clear()

    if (numeroOpcao >= 1 &&
        numeroOpcao <= 4
    ) {
        console.log(`Obrigado por doar R$${valorDoado}.`);
    } else if (numeroOpcao == 5){
        console.log('Obrigado pela atenção, ate a proxima.')
    } else {
        console.log('Opção inválida, tente novamente.')
    }
}

valorDoadoPorOpcao();