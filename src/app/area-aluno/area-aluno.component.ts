import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AlunosService } from '../service/alunos.service';
import { Exercicio } from 'src/model/Exercicio';
import { ExerciciosService } from '../service/exercicios.service';
import { Aluno } from 'src/model/Aluno';
import { LoginService } from '../login/seguranca/login.service';
import {MatRadioModule} from '@angular/material/radio';
import { PontuacaoDto } from 'src/model/PontuacaoDto';
import { ClassificacaoPadrao } from 'src/model/ClassificacaoPadrao';
import { BancasPadrao } from 'src/model/BancasPadrao';
import { ConcursosPadrao } from 'src/model/ConcursosPadrao';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A volta dos que não foram', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'As tranças do rei careca', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Saci pererê, de uma perna só', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-area-aluno',
  templateUrl: './area-aluno.component.html',
  styleUrls: ['./area-aluno.component.scss']
})

/* 
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
*/

export class AreaAlunoComponent implements OnInit {

  padraoMaterias:any[];
  padraoBancas:string[];
  padraoConcursos:string[];
  aluno:Aluno;
  exercicios:Exercicio[] = [];
  exercicioCompleto:Exercicio = new Exercicio();
  opcoes;
  qtdeExercicios:number;
  anoAtual = new Date().getFullYear();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  respostaAssinalada;

  motivacional = [
    {id: 0, frase: 'Você está evoluindo, acredite. Apesar dos dias parecerem tempestade sem fim, você é forte e irá vencer.'},
    {id: 1, frase: 'Os problemas são oportunidades para se mostrar o que sabe.'},
    {id: 2, frase: 'Se a caminhada está difícil, é porque você está no caminho certo.'},
    {id: 3, frase: '90% do sucesso se baseia simplesmente em insistir.'},
    {id: 4, frase: 'Trabalhe duro e em silêncio. Deixe o sucesso falar por você.'},
    {id: 5, frase: 'Que o nosso cansaço não vença as nossas metas.'},
    {id: 6, frase: 'O que somos é consequência do que pensamos.'},
  ]

  frase;
  

  constructor(
    private alunoService:AlunosService,
    private exerciciosService:ExerciciosService,
    private cookieService:CookieService,
    private router:Router
    ){}

  // selectedFile: ImageSnippet;

  ngOnInit() {
    if (this.cookieService.get('aluno-cjm') == null) {
      this.router.navigate(['/login']);
      return;
    } else {
      this.aluno = JSON.parse(this.cookieService.get('aluno-cjm'));
      /* let token = 'Bearer '+dadosLogin.autenticacao.data.token;
      this.alunoService.buscarAluno(dadosLogin.email, token).subscribe(
        (dadosAluno:Aluno) => {
          if (dadosAluno) {
            this.aluno = dadosAluno;
          } else {
            alert('Os dados do aluno não foram encontrados');
          }
        },
        () => {/* enviar erro p/ servidor }
      ); */
      // this.buscarPadroes();
      this.buscarMaterias();
      this.buscarBancas();
      this.buscarConcursos();
    }
  }


  /* enviarArquivo(imageInput: any) {
    const file: File = imageInput.file[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.alunoService.enviarRedacao(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  } */

  alterarFrase() {
    let numeroId = Math.floor(Math.random()*6);
    let elementoHtml = document.getElementById('frase-motivacional');
    elementoHtml.style.opacity = "0";
    this.frase = this.motivacional[numeroId].frase;
    elementoHtml.style.opacity = "1";
  }

  buscarDadosExercicio(idExercicio:number) {
    let elementoHTML = document.getElementById('painel-exercicios');
    let elementoHTMl = document.getElementById('imagem-exercicio');
    this.exerciciosService.buscarDadosExercicio(idExercicio).subscribe(
      (dadosExercicio:Exercicio) => {
        this.exercicioCompleto = dadosExercicio;
        if (this.exercicioCompleto.imagemEnunciado != null) {
          this.exercicioCompleto.imagemEnunciado = 'data:image/jpeg;base64,' + this.exercicioCompleto.imagemEnunciado;
        }
        this.opcoes = JSON.parse(this.exercicioCompleto.opcoes);
        this.respostaAssinalada = null;
        elementoHTML.className = "apresenta";
        this.alterarFrase();
      },
      () => {/* enviar erro p/ servidor */}
    );
  }

  buscarEApresentarExercicios(materia, banca, concurso, ano) {

    if ( (materia == undefined) || (banca == undefined) || (concurso == undefined) ) {
      alert('Por gentileza, preencha todos os campos.');
      return;
    }
    if (ano < 2000) {
      alert('Por gentileza, escolha um ano maior que 2000.');
      return;
    } else if (ano > this.anoAtual) {
      alert('Me ajude...');
      return;
    }
    
    this.exerciciosService.buscarExercicios(materia, banca, concurso, ano).subscribe(
      (listaExercicios) => {
        if(listaExercicios.length > 0) {
          this.exercicios = listaExercicios;
          this.qtdeExercicios = listaExercicios.length;
        } else {
          alert('Desculpe, não há nenhum exercício disponível com os requisitos solicitados.');
        }
      },
      (error) => {console.log(error);}
      );
  }
 
  buscarMaterias(){
    this.exerciciosService.buscarClassificacaoPadrao().subscribe(
      (materiasPadrao:ClassificacaoPadrao) => {
        materiasPadrao ? this.padraoMaterias = JSON.parse(materiasPadrao.classificacao) : this.padraoMaterias = [];
      },
      () => {/* enviar p/ servidor */}
    );
  }

  buscarBancas(){
    this.exerciciosService.buscarBancasPadrao().subscribe(
      (bancasPadrao:BancasPadrao) => {
        bancasPadrao ? this.padraoBancas = bancasPadrao.bancas : this.padraoBancas = [];
      },
      () => {/* enviar p/ servidor */}
    );
  }

  buscarConcursos(){
    this.exerciciosService.buscarConcursosPadrao().subscribe(
      (concursosPadrao:ConcursosPadrao) => {
        concursosPadrao ? this.padraoConcursos = concursosPadrao.concursos : this.padraoConcursos = [];
      },
      () => {/* enviar p/ servidor */}
    );
  }
 

  resolver() {
    if (this.respostaAssinalada == this.exercicioCompleto.gabaritoObjetivo) {
      alert('Você acertou!');
      this.aluno.pontos += this.exercicioCompleto.pontuacao;
      this.aluno.acertos++;
      this.aluno.questoes++;
    } else {
      alert('Sinto muito, resposta incorreta. Mas esse é o momento de errar. Tente outra vez!')
      this.aluno.erros++;
      this.aluno.questoes++;
    }
    let pontos = new PontuacaoDto();
    pontos.pontos = this.aluno.pontos;
    pontos.questoes = this.aluno.questoes;
    pontos.acertos = this.aluno.acertos;
    pontos.erros = this.aluno.erros;
    this.alunoService.atualizarPontuacaoAluno(pontos).subscribe(
      (resultado) => {resultado ? alert('Pontos: ' + pontos.pontos + '\nQuestões resolvidas: ' + pontos.questoes + '\nAcertos: ' + pontos.acertos) : alert('Falha no registro da pontuação')},
      () => {}
    );
  }

  sair() {
    this.cookieService.set('aluno-cjm', '');
    this.router.navigate(['']);
  }
}
