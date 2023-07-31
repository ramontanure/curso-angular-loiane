import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rotas';

  /* Single Page Applications
    Projetos só de uma página,
    Muda o conteudo, a url vai mudar, mudar as rests, apenas é modificado a area do conteudo

    /usuarios quero que determinado componente seja mostrado com uma lista de usuarios 
    Angular ler a rota, vai verificar quais informações foram passadas pra ela, e vai carregar o componente responsavel pela rota

    /usuarios/2/edit
    Podemos declarar varios tipos de rotas, 
    Vamos abrir a pagina de edição, cujo usuario que tem o id 2 
    /usuarios carregamos o ListaUsuariosComponent
    /usuarios/2/ carregamos o UsuarioDetalhesComponent
    /usuarios/id/edit UsuarioFormComponent   
  */
}
