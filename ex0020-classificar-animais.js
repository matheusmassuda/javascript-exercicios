const input = require('readline-sync');

function classificaAnimal() {
    let nomeAnimalMin = input.question('Qual animal deve ser classificado? ').toLowerCase();
    let tipoAnimal = ''
    
    
    switch(nomeAnimalMin) {
        case 'cachorro':
        case 'gato':
            tipoAnimal = 'mamifero';
            break;
        case 'galinha':
        case 'pato':
            tipoAnimal = 'ave';
            break;
        case 'cobra':
        case 'jacare':
            tipoAnimal = 'reptil';
            break;
        default:
            tipoAnimal = 'nao identificado';
            break;
    }

    console.log(`O animal ${nomeAnimalMin} é do tipo ${tipoAnimal}.`);
}

classificaAnimal();
