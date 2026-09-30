import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
const contaCorrente = new ContaCorrente({
    numeroConta: "12345-6",
    titular: "Ana Beatriz",
    saldo: 1500,
    limiteChequeEspecial: 1000
});

console.log("CONTA CORRENTE");
console.log("Número da conta:", contaCorrente.getNumeroConta());
console.log("Titular:", contaCorrente.getTitular());
console.log("Saldo:", contaCorrente.getSaldo());
console.log(
    "Limite do cheque especial:",
    contaCorrente.getLimiteChequeEspecial()
);


const contaPoupanca = new ContaPoupanca({
    numeroConta: "98765-4",
    titular: "Ana Beatriz",
    saldo: 2500,
    taxaRendimentoMensal: 0.5
});

console.log("\nCONTA POUPANÇA");
console.log("Número da conta:", contaPoupanca.getNumeroConta());
console.log("Titular:", contaPoupanca.getTitular());
console.log("Saldo:", contaPoupanca.getSaldo());
console.log(
    "Taxa de rendimento mensal:",
    contaPoupanca.getTaxaRendimentoMensal()
);