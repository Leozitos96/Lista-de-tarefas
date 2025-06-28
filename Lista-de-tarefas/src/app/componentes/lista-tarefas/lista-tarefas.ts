import { Component } from '@angular/core';

import { Tarefa } from '../../modelos/tarefa';


@Component({

  selector: 'app-lista-tarefas',

  templateUrl: './lista-tarefas.component.html',

  styleUrls: ['./lista-tarefas.component.css']

})

export class ListaTarefas {


  tarefas: Tarefa[] = [

    { id: 1, titulo: 'Aprender Angular', concluida: true },

    { id: 2, titulo: 'Aprender TypeScript', concluida: true },

    { id: 3, titulo: 'Fazer esta atividade', concluida: false },

  ];


  novaTarefaTitulo: string = '';

  private proximoId: number = 4; // Para gerar IDs únicos


  adicionarTarefa(): void {

    if (this.novaTarefaTitulo.trim() === '') {

      return;

    }


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

}
