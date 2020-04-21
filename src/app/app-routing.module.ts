import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepListComponent } from './subcomponents/dep-list/dep-list.component';
import { DepartamentoFormComponent } from './subcomponents/departamento-form/departamento-form.component';
import { DepUpdateFormComponent } from './subcomponents/dep-update-form/dep-update-form.component';

const routes: Routes =[
  { path: 'dep', component: DepListComponent },
  { path: 'adddep', component: DepartamentoFormComponent },
  { path: 'edit', component: DepUpdateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
