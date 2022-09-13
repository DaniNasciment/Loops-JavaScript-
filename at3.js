const prompt = require('prompt-sync')();

let q=0;
let q2=0;
let i=0;
let iString;

while (i!==-99) {
    let iString = prompt('Informe sua idade:');
    let i = Number(iString);
    if(i<21){
        q+=1;
    }   else if (i>50){
        q2+=1;
    }
}
console.log(`Total de pessoas com menos de 21 anos é ${q}`);
console.log(`Total de pessoas com mais de 50 anos é ${q2}`);