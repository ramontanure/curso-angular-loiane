import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diretivas';

  /*
  As diretivas são uma forma de passar instruções para nosso código html, elas dão bastante poder para o template 
  Os componentes são diretivas com template, quando a gente ta chamando o elemento customizada que a gente criou
  o componente a gente ta falando pro template instancie o componente desse tipo e renderize esse componente nesse lugar 

  Existem dois tipos de diretivas
  Diretivas Estruturais
  São utilizadas para modificar a estrutura do DOM, o código a HTML que temos no nosso template
  ngfor e ngIf, switck case

  Diretivas de atributos
  Não modificam a estrutura do DOM 
  Interagem com o elemento que foram aplicadas, modificar o estilo de um elemento por exemplo
  */
}
