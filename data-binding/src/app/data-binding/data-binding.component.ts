import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  // Atributo do tipo string inicializado com esse valor
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  constructor() {}

  ngOnInit(): void {}

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado() {
    return alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    // É um objeto que dentro dele contem as informações do evento que foi criado, e um deles é o target.value contendo o valor do campo
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento: any) {
    this.valorSalvo = evento;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
