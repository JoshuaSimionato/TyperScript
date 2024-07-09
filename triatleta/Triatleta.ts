import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Nadador, Ciclista{
    

	constructor(nome: string) {
        super(nome);
	}

    trotar(): void {
        console.log("Corrida leve...");
    }
    
    correr(): void {
        console.log(`Atleta correndo...`);
    }

    aquecer(): void {
        console.log(`Atleta aquecendo...`);
    }

    nadar(): void {
        console.log(`Atleta nadando...`);
    }

    pedalar(): void {
        console.log(`Atleta pedalando...`);
    }
    cansar(): void {
        console.log(`Atleta cansado...`);
    }
    
    

}