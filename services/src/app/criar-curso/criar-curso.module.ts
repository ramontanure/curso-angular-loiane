import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './../cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';
// Modulo de funcionalidade
@NgModule({
  declarations: [CriarCursoComponent],
  imports: [CommonModule],
  exports: [CriarCursoComponent],
  providers: [CursosService],
})
export class CriarCursoModule {}
