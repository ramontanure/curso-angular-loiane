import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
// Interface chamada PipeTransform e precisamos colocar o metodo tranform
export class CamelCasePipe implements PipeTransform {
  // É o metodo que vai transformar o valor, para apresentarmos na tela
  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let result = '';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(value: string) {
    return value.substring(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }
}
