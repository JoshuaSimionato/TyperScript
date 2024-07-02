import { Stack } from "../../interface/Stack";
import leia from 'readline-sync';
const pilha = new Stack<string>();

do {
    console.log("*".repeat(30));
    console.log("\n1 - Adicionar Livro na Pilha");
    console.log("\n2 - Listar todos os livros");
    console.log("\n3 - Retirar Livro da Pilha");
    console.log("\n0 - Sair");
    console.log("\n" + "*".repeat(30));
    var menu: number = leia.questionInt("\nEntre com a opcao desejada: ")
    console.log("\n" + "*".repeat(30));
    switch (menu) {
        case 1:
            let nome: string = leia.question("\nNome do livro: ")
            pilha.push(nome) // adiciona o elemento na fila
            console.log('\nPilha:\n ')
            pilha.printStack()
            console.log('\nLivro adicionado! \n')
            break;
        case 2:
            console.log(`\nLista de Livros na Pilha: \n`)
            pilha.printStack()
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia! ");
            } else {
                console.log(`\nPilha:`);
                pilha.pop() // remove o primeiro elemento
                pilha.printStack(); // Imprime a fila
                console.log(`\nUm livro foi retirado da pilha:`);
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
    