// Vamos trabalhar bastante com a EcmaScript 2015
// Modulos do ecma Script 2015
import { Component } from '@angular/core';

// Nome de classe é cammel case
// Precisamos falar para o angular que essa classe é um componente do angular
// Decorator é uma maneira de passar informações
// Nesse caso vamos passar pro transpile que é o compilador typescript que essa classe é um componente do angular
@Component({
  // Aqui temos alguns detalhes que vai ser passados, que chama metadados
  // Uma boa prática é a uti olização de WebComponents, permite que a gente crie componentes html customizados
  // Seletor é nome da tag html para utilizar esse component
  selector: 'meu-primeiro-component',
  // Aqui seria o código html
  template: ` <p>Meu primeiro component com Angular 2</p> `,
})
export class MeuPrimeiroComponent {
  // Aqui é onde vamos colocar nosso código javascript e toda nossa lógica de programação
  // dinamico
}

// Para importar essa classe em outro lugar precisamos exportar
// Sem exportar ela é vista apenas internamente nesse arquivo
