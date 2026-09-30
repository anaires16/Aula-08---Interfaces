import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interface/DispositivoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {

    getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    setTemperaturaAlvo(temp: number): void {
        this.props.temperaturaAlvo = temp;
    }
}