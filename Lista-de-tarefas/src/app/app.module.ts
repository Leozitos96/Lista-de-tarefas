
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // 1. IMPORTE AQUI


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListaTarefasComponent } from './componentes/lista-tarefas/lista-tarefas';


@NgModule({

  declarations: [

    AppComponent,

    ListaTarefasComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    FormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }