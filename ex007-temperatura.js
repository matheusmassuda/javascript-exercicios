var actionate = require('readline-sync');

function converterFahrenheitParaCelsius () {
    let temperaturaEmFahrenheit = Number(actionate.question('Qual a temperatura em Fahrenheit? '));

    if (isNaN(temperaturaEmFahrenheit)) {
        return 'valor inválido'
    }

    let fahrenheitEmCelsius = (5 / 9) * (temperaturaEmFahrenheit - 32);
    return fahrenheitEmCelsius.toFixed(2);
}

let temperaturaConvertida = converterFahrenheitParaCelsius();

if (temperaturaConvertida === 'valor inválido') {
    console.log('[ERRO] Valor inválido.')
} else {
    console.log(`A temperatura é ${temperaturaConvertida} °C.`)
}



