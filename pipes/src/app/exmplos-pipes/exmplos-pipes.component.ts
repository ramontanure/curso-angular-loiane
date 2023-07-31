import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exmplos-pipes',
  templateUrl: './exmplos-pipes.component.html',
  styleUrls: ['./exmplos-pipes.component.css'],
})
export class ExmplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Angular 2', 'Java'];

  constructor() {}

  ngOnInit(): void {}
}
