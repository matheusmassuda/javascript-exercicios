//imc é peso (kg) / altura (m) ao quadrado

var input = require('readline-sync');

function calcularImc() {
    let pesoEmKg = Number(input.question('Qual seu peso em kg? '));
    let alturaEmMetros = Number(input.question('Qual sua altura em metros? '));
    let valorImc = (pesoEmKg / (alturaEmMetros ** 2)).toFixed(2);

    if (valorImc >= 0 && valorImc < 18.5) {
        console.log(`Seu IMC é ${valorImc}, você está com baixo peso.`);
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
        console.log(`Seu IMC é ${valorImc}, você está com o peso ideal.`);
    } else if (valorImc >= 24.9 && valorImc < 29.9) {
        console.log(`Seu IMC é ${valorImc}, você está com sobrepeso.`);
    } else if (valorImc >= 30 && valorImc < 34.9) {
        console.log(`Seu IMC é ${valorImc}, você está com obesidade grau I.`);
    } else if (valorImc >= 35 && valorImc < 39.9) {
        console.log(`Seu IMC é ${valorImc}, você está o com obesidade grau II.`);
    } else if (valorImc >= 40) {
        console.log(`Seu IMC é ${valorImc}, você está com obesidade grau III.`);
    } else {
        console.log('Digite um valor válido');
    }
}

calcularImc();