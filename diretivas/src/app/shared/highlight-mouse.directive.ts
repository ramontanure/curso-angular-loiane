import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  // Como podemos escutar evento de um elemento html que tá utilizando nossa diretiva aqui dentro
  // Ele vai escutar no elemento que é o host, ou seja é o elemento hospedeiro dessa diretiva no caso a p

  // Decorator e colocamos como parametro o nome do evento que vamos escutar, quando a gente colocar o mouse em cima da tag p
  // Quando ele passar o mouse em cima vai fazer tal ação
  @HostListener('mouseenter') onMouseOver() {
    // Conseguimos modificar a cor do elemento dom hospedeiro dessa diretiva para a cor amarela quando disparar o mouse em cima
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    // HostBinding permite que a gente faça uma associação de um determinado atributo aqui da nossa diretiva, para um determinado atributo do html

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Conseguimos modificar a cor do elemento dom hospedeiro dessa diretiva para a cor amarela quando disparar o mouse em cima
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'white';
  }
  // Atributo do estilo do elemento
  // @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
