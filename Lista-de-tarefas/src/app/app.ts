import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefas } from './componentes/lista-tarefas/lista-tarefas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lista de Tarefas';
}
