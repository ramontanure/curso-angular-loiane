import { NgModule } from '@angular/core';
// CommonModule é do modulo de funcionalidade tambem contem as diretivas e pipes mais comuns para gente utilizar e vai ficar disponiveis pros componentes
import { CommonModule } from '@angular/common';

// Boas praticas do Angular 2
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

// Diferença grande entre o modulo raiz e o modulo de funcionalidade, não vai ter o bootstrap, pode ter providers
// Se os components declarados desse modulo precisa usar formularios a gente deve importar tambem

// Para usar o componente cursos nesse modulo precisamos declarar ele aqui, cursos Component pertence a esse modulo
@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule],
  // metadado dizendo quais as declarations desse modulo que vai ficar visivel para fora
  exports: [CursosComponent],
  providers: [CursosService],
})
export class CursosModule {}
// Podemos manter componentes privados que só pertencem a esse modulo
// Conseguimos controlar o que um modulo pode ver, e o que outro não pode ver
