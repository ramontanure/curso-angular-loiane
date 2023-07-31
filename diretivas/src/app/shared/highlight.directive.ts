import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  // Fica escutando o atributo backgroundColor mudar e quando mudar ele seta um novo backgroundColor para aquele hospedeiro
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
