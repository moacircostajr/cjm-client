import { Empresa } from './Empresa';

export class Usuario {
  // public id: uuid.v1;
  public id: number;
  public empresa:Empresa;
  public email: string;
  public senha: string;
  public nome: string;
  public telefone: string;
  public perfil: Perfil;
  public autenticacao: string;
  public dataCriacao: Date;
  public dataAtualizacao: Date;
}
