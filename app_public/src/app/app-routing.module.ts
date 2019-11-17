import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TestPlanViewComponent } from './components/test-plan-view/test-plan-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'project-create', component: ProjectCreateComponent, data: { title: 'Project Create Component' } },
  { path: 'project-list', component: ProjectListComponent, data: { title: 'Project List Component' } },
  { path: 'test-plan-view/:id', component: TestPlanViewComponent, data: { title: 'Test Plan View Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
