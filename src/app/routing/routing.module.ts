import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { GroupviewComponent} from '../components/groupview/groupview.component';
import { ClientviewComponent} from '../components/clientview/clientview.component';
import { TodosComponent} from '../components/todos/todos.component';
import {CltAAComponent} from '../components/clientview/clt-aa/clt-aa.component';
import {CltOverviewComponent} from '../components/clientview/clt-overview/clt-overview.component';
import {CltPosComponent} from '../components/clientview/clt-pos/clt-pos.component';

const routes: Routes = [
  { path: 'groupview', component: GroupviewComponent},
  { path: 'clientview', component: ClientviewComponent},
  { path: 'clientview/:id', component: ClientviewComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'cltaa', component: CltAAComponent},
  { path: 'cltoverview', component: CltOverviewComponent},
  { path: 'cltpos', component: CltPosComponent},
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
