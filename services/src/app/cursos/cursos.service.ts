import { Injectable } from '@angular/core';

// Falamos que essa classe é injetavel em outras classes
@Injectable()
export class CursosService {
  /* No mundo ideal não queremos fazer a instancia manualmente,
  Injecao de dependencia vai criar essa instancia automaticamente, e seus metodos  */
  constructor() {
    console.log('teste');
  }

  getCursos() {
    return ['Angular 2', 'Java', 'Phonegap'];
  }
}

/* Injeção de dependencia: Injentando uma dependencia, 
O que é uma dependencia de classe? 
ClasseA para que possa funcionar precisa de uma instancia de outra classeB  */
