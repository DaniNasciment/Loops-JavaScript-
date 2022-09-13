const prompt = require('prompt-sync')();

let n;
let nt=0;

do{
    let nString = prompt('Forneça um número');
    let n = Number(nString);
    nt+=n
}while (n==0)

console.log(`A soma dos números digitados é: ${nt}`);