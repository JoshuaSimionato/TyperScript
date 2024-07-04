import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

// Escopo do Programa 
numero1 = readlinesync.questionFloat("Digite o 1 numero: ");
numero2 = readlinesync.questionFloat("Digite o 2 numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
console.log(`\nSubtracao: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`\nMultiplicao: ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

let resultadoDivisao = dividir(numero1, numero2)
if (resultadoDivisao){
    console.log(`\nDivisao: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);
}else{
    console.log("\nNão existe divisao por 0")
}

autor();

// Escopo Função
function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number | null {
    let divisao: number =  numero1 / numero2;
    // Condicional Ternário (condição ? ação se for verdadeiro: ação se for falso)
    return(divisao !== Infinity ? divisao : null) // if ternário
    // if(divisao !== Infinity){
    //     return divisao;
    // }else{
    //     return null
    // }
}

function autor(): void{
    console.log('\nFeito por Joshua');
    
}
