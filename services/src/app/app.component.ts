import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';

  /* Servicos são classes que são responsaveis por buscar dados do servidor e enviar dados para o servidor
  No componente não coloca nenhuma lógica para buscar dados no servidor, pedir a classe servico pra fazer pra gente e retorna 
  os dados do servidor.
  Mas o servico não é só isso, não é só CRUD, são muitos uteis para nao repetirmos o código, como por exemplo 3 funções iguais em 3 componentes
  toda lógica de negocio da aplicação fica nos serviços, os componentes são responsaveis apenas para pegar e mostrar os dados na tela, interação da tela com o usuario
  Todo a lógica de negocio vai estar na classe serviço ,
  Podemos ter também classes utilitarias, metodo de formatacao, traducao  */
}
