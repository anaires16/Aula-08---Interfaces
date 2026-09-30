import { DispositivoProps } from "../interface/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    getIdRede(): string {
        return this.props.idRede;
    }

    getNomeLocal(): string {
        return this.props.nomeLocal;
    }

    getIsLigado(): boolean {
        return this.props.isLigado;
    }

    alternarEnergia(): void {
        this.props.isLigado = !this.props.isLigado;
    }
}