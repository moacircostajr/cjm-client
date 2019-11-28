import { Component, OnInit } from '@angular/core';
import {Aluno} from '../../model/Aluno';
import {AlunosService} from '../service/alunos.service';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Config } from '../service/Config';
import { LoginService } from '../login/seguranca/login.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {

  ctrlEmail = new FormControl('', [Validators.required, Validators.email]);
  ctrlInputs = new FormControl('', [Validators.required]);



  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit() {
  }

  /* getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  } */

  getErrorMessage() {
    return this.ctrlEmail.hasError('required') ? 'Por favor, preencha este campo.' :
        this.ctrlEmail.hasError('email') ? 'Email inválido!' : '';
  }

  obterMensagemErro() {
    return this.ctrlInputs.hasError('required') ? 'Por favor, preencha este campo.' : '';
  }

  /*
  validarSenhas() {
    return this.password.hasError('required') ? 'Por favor, confirme a senha.' :
    this.ctrlPasswords.hasError('notSame') ? 'Confirmação da senha não confere.' : '';
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmPass.value;

  return pass === confirmPass ? null : { notSame: true }
}
*/

  public registrar(
    nome: string,
    email: string,
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string,
    telefone: string,
    senha: string
    ) {
      if ((nome != '') && (email != '') && (senha != '') && (endereco != '') && (bairro != '') && (cidade != '') && (estado != '') && (telefone != '')) {

      const aluno: Aluno = new Aluno();
      aluno.empresa = this.loginService.obterEmpresa();
      aluno.email = email;
      aluno.senha = senha;
      aluno.nome = nome;
      aluno.endereco = endereco;
      aluno.bairro = bairro;
      aluno.cidade = cidade;
      aluno.estado = estado;
      aluno.telefone = telefone;
      aluno.pontos = 0;
      aluno.questoes = 0;
      aluno.acertos = 0;
      aluno.erros = 0;

      this.alunosService.matricular(aluno).subscribe(
        (resultado) => {
          if (resultado != null) {
            alert(Config.centralDeTratamentoDeErros(resultado.valueOf()));
            if (resultado === 201) { this.router.navigate(['']); }
          }
        },
        (erro) => {alert(Config.centralDeTratamentoDeErros(erro.status)); }
      );
    } else {
      alert('Por gentileza, preencha todos os campos.');
    }
  }
}
