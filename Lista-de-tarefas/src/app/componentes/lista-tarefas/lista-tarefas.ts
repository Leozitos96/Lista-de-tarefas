import { Component } from '@angular/core';
import { Tarefa } from '../../modelos/tarefa';

@Component({
  standalone: false,
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.html',
  styleUrls: ['./lista-tarefas.css']
})
export class ListaTarefasComponent {

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Comer no magrão chapa quente', concluida: false },
    { id: 2, titulo: 'Fazer o site do Napolion Luxury Cars', concluida: false },
    { id: 3, titulo: 'Andar de BMW X1', concluida: true },
  ];

  novaTarefaTitulo: string = '';
  private proximoId: number = 4;

  adicionarTarefa(): void {
    if (this.novaTarefaTitulo.trim() === '') return;

    const novaTarefa: Tarefa = {
      id: this.proximoId,
      titulo: this.novaTarefaTitulo,
      concluida: false
    };

    this.tarefas.push(novaTarefa);
    this.proximoId++;
    this.novaTarefaTitulo = '';
  }

  alternarStatusTarefa(idDaTarefa: number): void {
    const tarefa = this.tarefas.find(t => t.id === idDaTarefa);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }

  excluirTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }
}
