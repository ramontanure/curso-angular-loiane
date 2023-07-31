import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  // Quero que o componente pai, possa saber quando o valor mudou no meu contador
  // Emissor de evento
  // Expor um evento, expor um valor para o componente pai
  @Output() mudouValor = new EventEmitter();
  // ViewChild serve para acessar dados do elemento dom ou tags
  // Precisamos passar o nome da variavel do template
  // ViewChild serve para acessar dados do elemento dom ou tags
  // Precisamos passar o nome da variavel do template
  @ViewChild('campoInput', { static: true })
  campoValorInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
