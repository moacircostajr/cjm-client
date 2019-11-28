import { Component, OnInit } from '@angular/core';
import { LoginService } from './seguranca/login.service';
import { Login } from 'src/model/Login';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Aluno } from 'src/model/Aluno';
import { AlunosService } from '../service/alunos.service';
import { Config } from '../service/Config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // cookie;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    /* verificar em um cookie ou no indexeddb os dados do aluno */
    if (this.cookieService.get('aluno-cjm') != '') {
      this.router.navigate(['area-aluno']);
    }
   }


  logar(pLogin: string, pSenha: string) {
    const login = new Login();
    login.email = pLogin;
    login.senha = pSenha;
    this.loginService.logar(login).subscribe(
      (dadosLoginAuth: any) => {
        if (dadosLoginAuth) {
          const login: string = JSON.stringify(dadosLoginAuth);
          this.cookieService.set('aluno-cjm', login);
          const headersTmp = {
            'Authorization': 'Bearer ' + dadosLoginAuth.data.autenticacao.token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          };
          this.cookieService.set('headers-cjm', JSON.stringify(headersTmp));

          this.router.navigate(['area-aluno']);
        }
      },
      (error) => {alert(Config.centralDeTratamentoDeErros(error.status)); }
    );
  }
}
