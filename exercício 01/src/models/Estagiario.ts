import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../interfaces/EstagiarioProps.js";

export class Estagiario extends PessoaFisica <EstagiarioProps> {

    getInstituicaoEnsino(): string {
        return this.props.instituicaoEnsino;
    }

    getBolsaAuxilio(): number {
        return this.props.bolsaAuxilio;
    }

    setInstituicaoEnsino(instituicaoEnsino: string): void {
        this.props.instituicaoEnsino = instituicaoEnsino;
    }

    setBolsaAuxilio(valor: number): void {
        this.props.bolsaAuxilio = valor;
    }
}