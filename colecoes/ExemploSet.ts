import { table } from "console";

const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui"); 


console.table(table)
console.log(`\n A fruta Caqui existe? ${frutas.has("Caqui")}`)

frutas.delete("Caqui");

console.table(frutas);
