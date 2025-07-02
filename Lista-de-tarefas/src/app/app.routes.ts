import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './componentes/lista-tarefas/lista-tarefas';
export const routes: Routes = [{ path: '', redirectTo: 'lista-tarefas', pathMatch: 'full' },
  { path: 'lista-tarefas', component: ListaTarefasComponent }];
