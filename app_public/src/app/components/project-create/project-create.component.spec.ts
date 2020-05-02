import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppMaterialModule } from '../../app.material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCreateComponent } from './project-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { RouterTestingModule } from '@angular/router/testing';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

describe('ProjectCreateComponent', () => {
  let component: ProjectCreateComponent;
  let fixture: ComponentFixture<ProjectCreateComponent>;
  let rootElement: DebugElement;

  const projectServiceStub = {
    project: {
      id: 1,
      name: 'testing',
      subtitle: 'subtitle-testing',
      author: 'joe deo',
    },

    addProject: async function(project) {
      component.project = project;
    },

    getProjectByName: async function(name: string) {
      component.project = this.project;
      return this.project;
    },

    getLastId: async function() {
      return 1;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateComponent ],
      imports: [AppMaterialModule, NoopAnimationsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{provide: ProjectService, useValue: projectServiceStub}]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: []
      }
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
