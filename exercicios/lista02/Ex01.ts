import { Queue } from "../../interface/Queue";
import leia from 'readline-sync';
const fila = new Queue<string>();

do {
    console.log("*".repeat(30));
    console.log("\n1 - Adicionar Cliente na Fila");
    console.log("\n2 - Mostrar Cliente na Fila");
    console.log("\n3 - Retirar Cliente na Fila");
    console.log("\n0 - Sair");
    console.log("\n" + "*".repeat(30));
    var menu: number = leia.questionInt("\nEntre com a opcao desejada: ")
    console.log("\n" + "*".repeat(30));
    switch (menu) {
        case 1:
            let nome: string = leia.question("\nDigite o nome: ")
            fila.enqueue(nome) // adiciona o elemento na fila
            console.log(`\nFila:\n`)
            fila.printQueue()
            console.log('\nCliente Adicionado!\n')
            break;
        case 2:
            console.log(`\nLista de Clientes na Fila! \n`)
            fila.printQueue()
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log(`\nLista de Clientes na Fila:`);
                fila.dequeue() // remove o primeiro elemento
                fila.printQueue(); // Imprime a fila
                console.log('\nO Cliente foi chamado!\n')
            }
            break;
        case 0:
            console.log(`\nPrograma Finalizado !`)
            break;
        default:
            console.log('\nOperacao Invalida.');
            break;
    }
}while (menu !== 0)

