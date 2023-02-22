let celsius = 30;
let fahrenheit = 60;

const celsiusToFahrenheit = (celsius * 1.8) + 32;
const fahrenheitToCelsius= (fahrenheit - 32) / 1.8;

const fahenheitTemp = celsiusToFahrenheit.toFixed(2);
const celsiusTemp = fahrenheitToCelsius.toFixed(2);

console.log(`A temperatura convertida de ${celsius} °C para Fahrenheit é ${fahenheitTemp} °F.`);
console.log(`A temperatura convertida de ${fahrenheit} °F para Celsius é ${celsiusTemp} °C.`);

// Outra fórmula de cálculo °F para °C com uma leve imprecisão:
const outraFormulaCel = (fahrenheit - 32) * 0.55;
console.log(`${outraFormulaCel.toFixed(2)} °C.`);
