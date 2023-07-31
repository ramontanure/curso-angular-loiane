import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css'],
})
export class OperadorElvisComponent implements OnInit {
  // Operador que fornece uma maneira de fazer uma navegação segura entre os objetos

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
