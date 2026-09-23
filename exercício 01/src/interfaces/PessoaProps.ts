export interface PessoaFisicaPropos{
    cpf: string;
    nome: string;
    telefone: string;
    email: string;
    dataNascimento: string;
}

export interface ClienteProps extends PessoaFisicaPropos{
    clienteDesde: string;
}

export interface FuncionarioProps extends PessoaFisicaPropos{
    registro: string;
    carteiraTrabalho: string;
    pis: string;
}