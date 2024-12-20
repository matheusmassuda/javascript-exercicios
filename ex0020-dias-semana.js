var input = require('readline-sync');

function descobrirDiaDaSemana() {
    let diaSemanaEmNumero = Number(input.question('Dia um numero de 1 ate 7, entao direi qual dia da semana e: '));
    let diaSemanaEmNome = 'a'

    switch (diaSemanaEmNumero) {
        case 1:
            diaSemanaEmNome = 'domigo';
            break;
        case 2:
            diaSemanaEmNome = 'segunda-feira'
            break;
        case 3:
            diaSemanaEmNome = 'terca-feira';
            break;
        case 4:
            diaSemanaEmNome = 'quarta-feira';
            break;
        case 5:
            diaSemanaEmNome = 'quinta-feira';
            break;
        case 6:
            diaSemanaEmNome = 'sexta-feira';
            break;
        case 7:
            diaSemanaEmNome ='sabado';
            break;
        default:
            diaSemanaEmNome = 'numero invalido';
            break;
    }

    console.log(`O numero ${diaSemanaEmNumero} representa ${diaSemanaEmNome}.`);
}

descobrirDiaDaSemana();