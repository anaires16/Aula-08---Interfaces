import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaBancariaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    getTaxaRendimentoMensal(): number {
        return this.props.taxaRendimentoMensal;
    }
}