import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { GroupviewComponent} from '../components/groupview/groupview.component';
import { ClientviewComponent} from '../components/clientview/clientview.component';
import { TodosComponent} from '../components/todos/todos.component';

const routes: Routes = [
  { path: 'groupview', component: GroupviewComponent},
  { path: 'clientview', component: ClientviewComponent},
  { path: 'clientview/:id', component: ClientviewComponent},
  { path: 'todos', component: TodosComponent},
  { path: '', redirectTo: '/groupview', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // this is the root
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
