import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-binding';
}

/* No angular temos 4 formas de fazermos o data binding
 O data binding é uma forma de associar informações, dados do nosso componente para o template, 
 e vice versa do template para o componente

 atributo ou metodo que retorna um valor conseguimos associar isso no template
 e com os eventos quando um usuario por exemplo clicar em um botão temos o event binding que faz que o componente escute isso

 formas:

 {{Interpolation}}
 Pegar valor de um atributo ou metodo e ter a saida dessa informação no template

 [propriedade]="valor"
 Vinculação de propriedade(property binding)
 Saida de um atributo do componente para o template 

 (evento)="handler"
 Contrario, conseguimos escutar o evento do template como por exemplo o click de um botão, foco de input

 Two = data binding
 [(ngModel)]="propriedade"
 Conseguimos manter tanto o template quanto o componente atualizados, trabalhar com formularios
*/
