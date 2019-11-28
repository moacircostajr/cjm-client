import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './Config';
import { Exercicio } from 'src/model/Exercicio';
import { BancasPadrao } from 'src/model/BancasPadrao';
import { ConcursosPadrao } from 'src/model/ConcursosPadrao';
import { ClassificacaoPadrao } from 'src/model/ClassificacaoPadrao';
import { LoginService } from '../login/seguranca/login.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {

  constructor(
    private httpClient:HttpClient,
    private cookieService:CookieService
    ) { }
 
  get empresa() {
    const dadosLogin = JSON.parse(this.cookieService.get('aluno-cjm'));
    return dadosLogin.data.empresa;
  }

  get header() {
    return JSON.parse(this.cookieService.get('headers-cjm'));
  }

  buscarClassificacaoPadrao() {
    return this.httpClient.post<ClassificacaoPadrao>(Config.SERV_URL +'/api/cursos/padrao_classificacao', this.empresa, {headers: new HttpHeaders(this.header)});
  }

  buscarConcursosPadrao() {
    return this.httpClient.post<ConcursosPadrao>(Config.SERV_URL +'/api/cursos/padrao_concursos', this.empresa, {headers: new HttpHeaders(this.header)});
  }

  buscarBancasPadrao() {
    return this.httpClient.post<BancasPadrao>(Config.SERV_URL +'/api/cursos/padrao_bancas', this.empresa, {headers: new HttpHeaders(this.header)});
  }
 

  buscarExercicios(materia, banca, concurso, ano) {
    return this.httpClient.post<any[]>(Config.SERV_URL + '/api/cursos/exercicios?materia=' + materia + '&banca=' + banca + '&concurso=' + concurso + '&ano=' + ano, this.empresa, {headers: new HttpHeaders(this.header)});
  }

  buscarDadosExercicio(idExercicio) {
    return this.httpClient.get<Exercicio>(Config.SERV_URL + '/api/cursos/exercicio/' + idExercicio, {headers: new HttpHeaders(this.header)});
  }
}
