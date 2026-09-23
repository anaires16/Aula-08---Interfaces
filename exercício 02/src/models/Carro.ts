import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/CarroProps.js";

export class Carro extends Veiculo<CarroProps> {

    getQuantidadeDePortas(): number {
        return this.props.quantidadeDePortas;
    }

    setQuantidadeDePortas(qtd: number): void {
        this.props.quantidadeDePortas = qtd;
    }
}