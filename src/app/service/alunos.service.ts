import { Injectable } from '@angular/core';
import {Aluno} from '../../model/Aluno';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from './Config';
import { PontuacaoDto } from 'src/model/PontuacaoDto';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
    private httpClient: HttpClient,
    private cookieService:CookieService
    ) { }

  get header() {
    return JSON.parse(this.cookieService.get('headers-cjm'));
  }

  get aluno() {
    return JSON.parse(this.cookieService.get('aluno-cjm')).data.id;
  }


  public matricular(aluno: Aluno) {
    // let jsonAluno: string = this.codificarAluno(aluno);
    return this.httpClient.post<number>(Config.SERV_URL + '/api/cursos/aluno/inscricao', aluno);
  }

  buscarAluno(idAluno:number) {
    return this.httpClient.get(Config.SERV_URL + '/api/cursos/aluno/' + idAluno, {headers: new HttpHeaders(this.header)});
  }

  atualizarPontuacaoAluno(pontuacaoDto:PontuacaoDto) {
    return this.httpClient.post(Config.SERV_URL + '/api/cursos/aluno' + this.aluno + '/pontuacao', pontuacaoDto);
  }

/* 
  private codificarAluno(aluno: Aluno): string {
    let dados: string;
    dados = btoa(JSON.stringify(aluno));
    return dados;
  }
 */
  /* 
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  } */
}
