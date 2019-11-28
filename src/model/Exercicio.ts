import {Comentario} from './Comentario';
import { Empresa } from './Empresa';

export class Exercicio {
  public id: number;
  public empresa:Empresa;
  public enunciado1: string;
  public imagemEnunciado: string;
  public enunciado2: string;
  public opcoes: string;
  // public opcoes: string[];
  public gabaritoObjetivo: number;
  public gabaritoSubjetivo: string;
  public pontuacao: number;
  public materias: string;
  // public materia: string[];
  public bancas: string;
  // public banca: string[];
  public concursos: string;
  // public prova: string[];
  public anos: string;
  // public ano: number[];
  // public comentarios: Comentario[];
  public metodoRequisicao: string;
}
