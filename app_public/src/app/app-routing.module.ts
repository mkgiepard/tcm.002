import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TestPlanViewComponent } from './components/test-plan-view/test-plan-view.component';
import { TestPlanCreateComponent } from './components/test-plan-create/test-plan-create.component';
import { TestEffortViewComponent } from './components/test-effort-view/test-effort-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'project-create', component: ProjectCreateComponent, data: { title: 'Project Create Component' } },
  { path: 'project-list', component: ProjectListComponent, data: { title: 'Project List Component' } },
  { path: 'test-plan-view/:id', component: TestPlanViewComponent, data: { title: 'Test Plan View Component' } },
  { path: 'test-plan-create', component: TestPlanCreateComponent, data: { title: 'Test Plan Create Component' } },
  { path: 'test-effort-view/:id', component: TestEffortViewComponent, data: { title: 'Test Effort View Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
