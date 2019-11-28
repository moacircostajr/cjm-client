import {Aluno} from './Aluno';
import { Exercicio } from './Exercicio';
import { Empresa } from './Empresa';

export class Comentario {
  public id: number;
  public empresa:Empresa;
  public exercicio:Exercicio;
  public email: string;
  public comentario: string;
}
