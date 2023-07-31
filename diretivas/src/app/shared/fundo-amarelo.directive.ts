import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Seletor como colchetes, para utilizar essa diretiva
  selector: 'p[fundoAmarelo]',
})
export class FundoAmareloDirective {
  // Para a gente modificar atributo, propriedades da tag p
  // O angular tem uma classe que representa qualquer elemento do dom qualquer tag

  // Injeção de dependencia
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Elemento nativo que esse seletor está sendo usado
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    // O elementRef tem um disclamer, evitar utilizar ele, estamos fazendo acesso direto para a tag p e isso pode ocorrer problemas
    // Melhor prática
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}

//  Criar uma diretiva de atributo customizada, vamos focar em dois conceitos Element Ref faz referencia ao elemento do dom e renderer que é o renderizador responsavel por
// fazer manipulação do DOM

// Diretiva é um componente sem template, vamos tratar apenas a parte lógica
// vamos criar uma diretiva que vai modificar a cor de fundo de um elemento dom
// ng g d vai criar apenas 1 arquivo
// diretiva vai ser compartilhado por toda aplicacao shared é um diretorio compartilhado por todos componentes
