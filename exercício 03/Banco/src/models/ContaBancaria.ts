import { ContaBancariaProps } from "../interfaces/ContaBancariaProps.js";

export class ContaBancaria<T extends ContaBancariaProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    getNumeroConta(): string {
        return this.props.numeroConta;
    }

    getTitular(): string {
        return this.props.titular;
    }

    getSaldo(): number {
        return this.props.saldo;
    }
}