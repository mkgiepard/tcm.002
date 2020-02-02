import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppMaterialModule } from './app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { TestPlanViewComponent } from './components/test-plan-view/test-plan-view.component';
import { TestPlanCreateComponent } from './components/test-plan-create/test-plan-create.component';
import { TestEffortViewComponent } from './components/test-effort-view/test-effort-view.component';
import { TestEffortCreateComponent } from './components/test-effort-create/test-effort-create.component';
import { TestPlanListComponent } from './components/test-plan-list/test-plan-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectCardComponent,
    ProjectCreateComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    TestPlanViewComponent,
    TestPlanCreateComponent,
    TestEffortViewComponent,
    TestEffortCreateComponent,
    TestPlanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule,
    AppMaterialModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
