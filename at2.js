const prompt = require('prompt-sync')();

let q=0;
let q2=0;

for(n=0;n<10;n++){
    let nString = prompt('Informe um número :');
    let n = Number(nString);
    if((n%2==0)){
        q+=1 
    } else{
        q2+=1
    }
   
}
console.log(`A quantidade de números pares é: ${q}`);
console.log(`A quantidade de números impares é: ${q2}`);