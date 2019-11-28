import { Usuario } from './Usuario';

export class Aluno extends Usuario{
  public endereco: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public pontos: number;
  public questoes: number;
  public acertos: number;
  public erros: number;
}
