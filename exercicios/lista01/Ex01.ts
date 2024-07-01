import readlinesync = require("readline-sync");


const listaCores: Array<string> = new Array <string>();

for(let indice = 0; indice < 5; indice++)
    listaCores.push(readlinesync.question(`Digite a ${indice + 1} cor: `)) //le e adciona tudo em uma linha

console.log("\nListar todas as cores: ")
for (let cor of listaCores)
    console.log(cor)

listaCores.sort()

console.log("\nOrdenar cores: ")
for (let cor of listaCores)
    console.log(cor)