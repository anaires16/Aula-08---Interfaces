import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

const lampada = new LampadaInteligente({
    idRede: "LAMP-001",
    nomeLocal: "Quarto",
    isLigado: true,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 80
});

console.log("LÂMPADA INTELIGENTE");
console.log("ID da rede:", lampada.getIdRede());
console.log("Local:", lampada.getNomeLocal());
console.log("Está ligada:", lampada.getIsLigado());
console.log("Cor:", lampada.getCorHexadecimal());
console.log("Nível de brilho:", lampada.getNivelBrilho());

lampada.setBrilho(50);

console.log("Novo nível de brilho:", lampada.getNivelBrilho());

lampada.alternarEnergia();

console.log("Está ligada após alternar:", lampada.getIsLigado());


const termostato = new Termostato({
    idRede: "TERM-001",
    nomeLocal: "Sala",
    isLigado: true,
    temperaturaAtual: 22,
    temperaturaAlvo: 24
});

console.log("\nTERMOSTATO");
console.log("ID da rede:", termostato.getIdRede());
console.log("Local:", termostato.getNomeLocal());
console.log("Está ligado:", termostato.getIsLigado());
console.log("Temperatura atual:", termostato.getTemperaturaAtual());
console.log("Temperatura alvo:", termostato.getTemperaturaAlvo());

termostato.setTemperaturaAlvo(26);

console.log(
    "Nova temperatura alvo:",
    termostato.getTemperaturaAlvo()
);

termostato.alternarEnergia();

console.log("Está ligado após alternar:", termostato.getIsLigado());
