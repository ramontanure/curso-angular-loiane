import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  // Em uma aplicacao não vamos ter dados assim estáticos, pra isso vamos ter uma classe servico, pra buscar dados de um servidor
  cursos: string[] = [];
  // Constructor é o primeiro metodo a ser executada, é o que vai criar a instancia
  constructor(protected _cursosService: CursosService) {}
  // Quando a gente obtem dados é legal que a gente use o ngOnInit, é o metodo que vai ser executado quando a classe for inicializada
  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }
}
