import { NgModule } from '@angular/core';
// BrowserModule ele prepara a aplicação para ser rodada em um browser
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

// Modulo raiz da nossa aplicação
// Decorator NgModule, essa classe vai representar um modulo, importar do core
@NgModule({
  // metadado declarations, vamos listar todos os componentes, diretivas e pipes que queremos utilizar nesse modulo
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component],
  // imports a gente coloca outros modulos que a gente quer utilizar nesse modulo aqui ou dentro de algum componente que pertence a esse modulo
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  // providers, é onde colocamos os serviços que vai ficar disponivel para todos os componentes declarados nesse modulos, escopo global, como é um modulo raiz
  providers: [],
  // Somente aqui no modulo raiz, o bootstrap é o ponto de inicialização quando a gente executar a aplicação
  // Single Page Aplication
  // AppComponent componente principal
  bootstrap: [AppComponent],
})
// Temos o export class e o nome da classe, reparar na convesão de nomenclatura do style guide
export class AppModule {}

// Para que os declarations não fique muito grande podemos criar os modulos de funcionalidades para organizar melhor nosso código
