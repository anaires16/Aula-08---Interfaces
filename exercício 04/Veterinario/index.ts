import { Cachorro } from "./models/Cachorro.js";
import { Gato } from "./models/Gato.js";

const cachorro = new Cachorro({
    nomePaciente: "Rex",
    nomeTutor: "Ana Beatriz",
    pesoKG: 15,
    porte: "Médio",
    precisaTosa: true
});

console.log("CACHORRO");
console.log("Nome do paciente:", cachorro.getNomePaciente());
console.log("Nome do tutor:", cachorro.getNomeTutor());
console.log("Peso:", cachorro.getPesoKG(), "KG");
console.log("Porte:", cachorro.getPorte());
console.log("Precisa de tosa:", cachorro.getPrecisaTosa());


const gato = new Gato({
    nomePaciente: "Mingau",
    nomeTutor: "Ana Beatriz",
    pesoKG: 5,
    fivFelvTestado: true,
    isIndoor: true
});

console.log("\nGATO");
console.log("Nome do paciente:", gato.getNomePaciente());
console.log("Nome do tutor:", gato.getNomeTutor());
console.log("Peso:", gato.getPesoKG(), "KG");
console.log("FIV/FeLV testado:", gato.getFivFelvTestado());
console.log("É indoor:", gato.getIsIndoor());