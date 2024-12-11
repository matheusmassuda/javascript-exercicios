//Parâmetro == slot dentro da função
//Argumento == valor que o parâmtro receberá quando função for chamada
//Retorno == resultado da função

/*
//modelo ideal se os input.question PRECISAREM ser usados em outras funções ou lugares

var input = require('readline-sync')

let tipoDeQuejo = input.question('Qual o tipo de queijo da pizza? ');
let tipoDeProteina = input.question('Qual o tipo de proteína da pizza? ');

function montarRecheioDaPizza (tipoDeQueijo, tipoDeProteina) {
    let nomePizza = `pizza de ${tipoDeQueijo} com ${tipoDeProteina}`;
    return nomePizza;
}

const pizzaDoCliente = montarRecheioDaPizza(tipoDeQuejo, tipoDeProteina);
console.log(`Preparando ${pizzaDoCliente}.`);
*/


//modelo ideal se os input.question SÓ FOR usado dentro dessa função
var input = require('readline-sync')

function montarRecheioDaPizza () {
    let tipoDeQueijo = input.question('Qual o tipo de queijo da pizza? ')
    let tipoDeProteina = input.question('Qual o tipo de proteína da pizza? ');
    let nomePizza = `pizza de ${tipoDeQueijo} com ${tipoDeProteina}`;
    return nomePizza;
}

const pizzaDoCliente = montarRecheioDaPizza();
console.log(`Preparando ${pizzaDoCliente}.`);
