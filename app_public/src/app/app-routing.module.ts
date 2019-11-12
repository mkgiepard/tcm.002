import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'project-create', component: ProjectCreateComponent, data: { title: 'Project Create Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
