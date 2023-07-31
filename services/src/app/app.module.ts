import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [AppComponent, CursosComponent],
  imports: [BrowserModule, AppRoutingModule, CriarCursoModule],
  // Como colocamos aqui dentro do modulo ela vai ser instanciada apenas 1
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
