import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefas } from './componentes/lista-tarefas/lista-tarefas';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListaTarefas
  ],
  providers: [],
})

export class AppModule { }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'Lista de Tarefas';
}