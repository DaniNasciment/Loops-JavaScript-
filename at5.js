const prompt = require('prompt-sync')();

let numero=0;
let numeroString=0;
let numeroTotal=0;

do{
    numeroString = prompt('Forneça um número');
    numero = Number(numeroString);
    numeroTotal+=numero
}while (numero=0)

console.log(`A soma dos números digitados é: ${numeroTotal}`);