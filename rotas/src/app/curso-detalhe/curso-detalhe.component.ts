import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  // Obter id da rota aqui no nosso componente
  id: number = 0;
  inscricao: Subscription = new Subscription();
  curso: any;

  //Existe uma classe do angular 2 chamada ActivateRoute, ou seja rota ativa, que podemos injetar no construtor
  // Temos aqui uma instancia, temos atributos desse objeto que podemos acessar para obtermos o parametro
  constructor(
    private route: ActivatedRoute,
    // Classe que contem os metodos responsaveis para gente conseguir fazer o redirecionamento dentro do código.
    private router: Router,
    private cursosService: CursosService
  ) {
    // Snapshot seria uma foto desse exato momento da rota que estamos, e dentro dele temos o parametro
    // Esses params são dinamicos, não é toda hora que vamos ter o id
    // Podemos acessar esse id dizendo que é uma chave do objeto parametro
    // Ele não ta atualizando por que a gente ta obtendo o parametro do id no constructor, quando essa classe é inicializacada e obtemos a foto da primeira rota
    // this.id = this.route.snapshot.params['id'];
    // Dentro do objeto route temos um atributo chamada params, e ele é do tipo BehaviorSubject que significa que é um valor que pode mudar com o tempo
    // Como ele retorna um BehaviorSubject significa que podemos nos inscrever e ficar escutando as mudancas desse subject
  }

  ngOnInit(): void {
    // ngOnInit é executado quando a classe é inicializada
    // Aqui vamos pegar os params e vamos nos inscrever e acada mudança que acontecer nesse atributo params, ele retorna um BehaviorSubject
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
