import { AnimalProps } from "../interface/AnimalProps.js";

export class Animal<T extends AnimalProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    getPesoKG(): number {
        return this.props.pesoKG;
    }

    setPesoKG(pesoKG: number): void {
        this.props.pesoKG = pesoKG;
    }
}