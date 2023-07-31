import { Injectable } from '@angular/core';

// Significa que essa classe pode ser injetada em outra classe para que o uso dela ser feito
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  // Aqui vamos acessar o servidor e enviar para o component esses dados que foram feitos na requisição, e o componente vai mostrar esses dados a partir do template
  constructor() {}

  getCursos(): string[] {
    return ['Java', 'Angular', 'ExtJs'];
  }
}
