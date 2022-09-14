const prompt = require('prompt-sync')();

let qtdMenos21=0;
let qtdMaiores50=0;
let idade=0;
let idadeString;

while (idade!=-99) {
    idadeString = prompt('Informe sua idade:');
    idade = Number(idadeString);
    if(idade<21 && idade!=-99){
        qtdMenos21++;
    }   else if (idade>50){
        qtdMaiores50++;
    }
}
console.log(`Total de pessoas com menos de 21 anos é ${qtdMenos21}`);
console.log(`Total de pessoas com mais de 50 anos é ${qtdMaiores50}`);