import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(); // define o que o array vai receber

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

numeros.push(readlinesync.questionFloat("Digite um numero: ")) //le e adciona tudo em uma linha

numeros.unshift(2.5, 3.6, 8); // inserir dados de uma vez no começo do array

// so funciona com estruta de dados
for(let numero of numeros) //cria uma variavel numero e atribui a variave numeros(array)
    console.log(numero); // quando tiver uma instrução não precisa de chave


console.log(numeros)

console.log(`\n Na posicao do elemento 5 é: ${numeros.indexOf(5)}`) // retorna o indice se der -1 é que nao tem no Array
console.log(`\nExiste no Array o elemtento 5? ${numeros.includes(5)}`) // ele retorna true ou false

numeros[numeros.indexOf(5)] = 10 // ele troca o  valor 5 pelo 10

console.table(numeros)

numeros.splice(numeros.indexOf(10), 1) // quantos elementos apagar apartir do indice
