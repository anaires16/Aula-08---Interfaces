import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaBancariaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    getLimiteChequeEspecial(): number {
        return this.props.limiteChequeEspecial;
    }
}