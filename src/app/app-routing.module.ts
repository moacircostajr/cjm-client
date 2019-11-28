import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalComponent} from './principal/principal.component';
import {MatriculaComponent} from './matricula/matricula.component';
import {AreaAlunoComponent} from './area-aluno/area-aluno.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'matricula', component: MatriculaComponent},
  {path: 'area-aluno', component: AreaAlunoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
