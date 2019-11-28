import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatGridListModule} from '@angular/material/grid-list';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatriculaComponent } from './matricula/matricula.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AreaAlunoComponent } from './area-aluno/area-aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatTableModule, MatSelectModule, MatProgressSpinnerModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BarraNavegacaoComponent,
    MatriculaComponent,
    AreaAlunoComponent,
    LoginComponent
  ],
    imports: [
        BrowserAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatRadioModule,
        MatGridListModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatTableModule,
        MatRippleModule,
        MatCardModule,
        MatToolbarModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        MatProgressSpinnerModule
    ],
  providers: [CookieService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
