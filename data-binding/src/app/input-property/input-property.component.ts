import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // Podemos declarar os inputs aqui
  // inputs: ['nomeCuso']
})
export class InputPropertyComponent implements OnInit {
  // Decorator Input, ele também faz parte do core, com isso a gente consegue expor uma propriedade chamada nome pro seu seletor
  // Aceita um parametro que é uma string podemos internamente usar a variavel como nomeCurso e externamente como nome
  @Input('nome') nomeCurso: string = '';

  constructor() {}

  ngOnInit(): void {}
}
