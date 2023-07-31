import { Component } from '@angular/core';

// Componente raiz da aplicação, aqui vai ser renderizado todos os componentes da nossa aplicação
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Olá mundo';
}
