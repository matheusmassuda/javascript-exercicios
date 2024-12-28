const input = require('readline-sync');

function menu(){
    console.log(`Menu: 
[1] Contar de 0 ate 10
[2] Contar de 10 ate 0
[3] Cancelar`);

let opcao = Number(input.question('Digite o numero da opcao: '));

let contador, final;

console.clear();

switch(opcao) {
    case 1:
        contador = 0;
        final = 10;
        break;
    case 2: 
        contador = 10;
        final = 0;
        break;
    case 3:
        console.log(`Ate a proxima.`);
        return;
    default:
        console.log('Opcao invalida.');
        return;
}
    mostrarContagem(contador, final);
}


function mostrarContagem(contador, final) {
    if (contador < final) {
        for (let i = contador; i <= final; i++) {
            console.log(i);
        }
    } else {
        for (let i = contador; i >= final; i--) {
            console.log(i);
        }
    }
}

menu();


//node ex034-superContador.js