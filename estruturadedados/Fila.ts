import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i) // pega posicao e guarda na fila
}

console.log("\nExebir todos os elementos da fila: ");

fila.printQueue(); //mostra na tela

console.log("\nRemover Elemento"+ fila.dequeue()); //remove o primeiro da fila

fila.printQueue(); //mostra na tela

console.log("\nExebi o Primeiro da fila "+ fila.peek());

console.log("\nChecar se o elemento 1 existe "+ fila.contains(1));

fila.clear();

console.log("\nFila está vazia? "+ fila.isEmpty());

//estrutura de dados para ver o que mais atende  fazeer uma pesquida
//estrutura de dados serve para saber qual se encaixa e te atende mehlor