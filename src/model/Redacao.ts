import { Empresa } from './Empresa';

export class Redacao {
    public id: number;
    public empresa:Empresa;
    public idAluno: number;
    public tema: string;
    public pontuacao: number;
    public redacaoOriginal: string;
    public redacaoCorrigida: string;
}
