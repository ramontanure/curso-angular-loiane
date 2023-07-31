import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
// Nesse arquivo que vamos declarar nossas rotas
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

/* A referencia desse objeto não muda
A classe Routes é propria do angular 2 e ele espera receber um array contendo as rotas dentro.]
As rotas são compostas por objetos e nesses objetos precisamos declarar alguns atributos
*/

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  //   Quando a gente quer passar parametros para nossas rotas, colocamo o caminho e o nome do parametro
  { path: 'curso/:id', component: CursoDetalheComponent },

  // Se o caminho for localhost:4200/login quero que ele me encaminhe pro component de Login
  { path: 'login', component: LoginComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },

  // path vai dizer qual é o campinho, e o component é o componente a ser renderizado nesse caminho
  //   Se eu colocar vazio, vai ser localhost:4200 quero que renderize o Home component
  { path: '', component: HomeComponent },
];

// routing é do tipo ModuleWithProviders, significa que essa const routing é que contem a definicao das configurações das rotas
// Esse arquivo está representando um modulo de rotas
// O que vamos usar aqui é o forRoot por que contem as rotas de toda a aplicação, ou seja as rotas raizes da aplicacao.Rotas chaves, rotas principais.
/* Se a gente quiser criar rotas de funcionalidades, por exemplo se eu tiver um cursos, quero tratar isso como funcionalidade, cursos/id cursos/id/editar,
 para não poluir esse arquivo aqui, da mesma forma que fazemos com os modulos podemos fazer nas rotas, a unica diferenca das duas é que a forRoot, é a configuração
 das rotas raizes da aplicacao, e forChild das rotas de funcionalidades */
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(APP_ROUTES);
