import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps } from "../interface/DispositivoProps.js";

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps> {

    getCorHexadecimal(): string {
        return this.props.corHexadecimal;
    }

    getNivelBrilho(): number {
        return this.props.nivelBrilho;
    }

    setBrilho(nivel: number): void {
        this.props.nivelBrilho = nivel;
    }
}