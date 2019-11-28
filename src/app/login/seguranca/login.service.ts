import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../service/Config';
import { Login } from 'src/model/Login';
import { Empresa } from 'src/model/Empresa';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private httpClient: HttpClient,
    ) { }

  public logar(login:Login) {
    return this.httpClient.post(Config.SERV_URL + '/api/cursos/auth', login);

  /* public logar(login: string, senha: string) {
    const jsonUsuario: string = this.codificarUsuario(login, senha);
    return this.http.post<Observable<boolean>>(this.config.url + '/login', jsonUsuario);
  } */


  /* private codificarUsuario(login: string, senha: string): string {
    let dados: string;
    dados = btoa('{"login":"' + login + '", "senha":"' + senha + '"}');
    return dados;
  } */

  }


  obterEmpresa() {
    let empresa:Empresa = new Empresa();
    empresa.id = 1;
    empresa.nomeFantasia = 'Curso Jardem Moura';
    empresa.proprietario = 'Moacir Costa e Tenente Moura';
    empresa.telefone = '88-9-9755-6328, 85-9-9624-8800';
    return empresa;
  }
}
