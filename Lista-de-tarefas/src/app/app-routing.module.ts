import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './componentes/lista-tarefas/lista-tarefas';

const routes: Routes = [
  { path: 'lista-tarefas', component: ListaTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }