import { PessoaFisicaProps } from "./PessoaProps.js";

export interface EstagiarioProps extends PessoaFisicaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: number;
}
