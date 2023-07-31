import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  // Atributo
  nomePortal: string = 'http://loiane.training';
  cursos: string[];
  // Injeção por constructor
  constructor(public cursosService: CursosService) {
    // Pra fazer referencia a essa variavel dentro do código do componente js a gente acessa via this
    // Instancia de classe e a gente consegue acessar os metodos
    // Com a injeção de dependencia ele já faz a instancia da classe pra gente automaticamente, assim todos os metodos que tiverem lá dentro, como o http, vai ser instanciado
    // var servivo = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {}
}
