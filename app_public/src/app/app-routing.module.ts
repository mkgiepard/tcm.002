import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { TestPlanViewComponent } from './components/test-plan-view/test-plan-view.component';
import { TestPlanCreateComponent } from './components/test-plan-create/test-plan-create.component';
import { TestEffortViewComponent } from './components/test-effort-view/test-effort-view.component';
import { TestEffortCreateComponent } from './components/test-effort-create/test-effort-create.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'project-create', component: ProjectCreateComponent, data: { title: 'Project Create Component' } },
  { path: 'project-list', component: ProjectListComponent, data: { title: 'Project List Component' } },
  { path: 'project-edit/:id', component: ProjectEditComponent, data: { title: 'Project Edit Component' } },
  { path: 'project-view/:id', component: ProjectViewComponent, data: { title: 'Project View Component' } },
  { path: 'test-plan-view/:id', component: TestPlanViewComponent, data: { title: 'Test Plan View Component' } },
  { path: 'test-plan-create', component: TestPlanCreateComponent, data: { title: 'Test Plan Create Component' } },
  { path: 'test-effort-view/:id', component: TestEffortViewComponent, data: { title: 'Test Effort View Component' } },
  { path: 'test-effort-create', component: TestEffortCreateComponent, data: { title: 'Test Effort Create Component' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
