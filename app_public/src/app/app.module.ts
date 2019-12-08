import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  MatToolbarModule,
  MatIconModule, 
  MatSidenavModule, 
  MatListModule,
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatCardModule, 
  MatTableModule,
  MatRadioModule 
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TestPlanViewComponent } from './components/test-plan-view/test-plan-view.component';
import { TestPlanCreateComponent } from './components/test-plan-create/test-plan-create.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectCardComponent,
    ProjectCreateComponent,
    ProjectListComponent,
    TestPlanViewComponent,
    TestPlanCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule,
    CommonModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatCardModule, 
    MatTableModule, 
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
