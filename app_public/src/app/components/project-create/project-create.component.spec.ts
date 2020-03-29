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
import { throwToolbarMixedModesError } from '@angular/material';

describe('ProjectCreateComponent', () => {
  let component: ProjectCreateComponent;
  let fixture: ComponentFixture<ProjectCreateComponent>;
  let rootElement: DebugElement;

  const projectServiceStub = {
    project: {
      name: 'testing',
      subtitle: 'subtitle-testing',
      author: 'joe deo',
    },

    addProject: async function(name: string, subtitle: string, author: string) {
      component.project = {
        name: name,
        subtitle: subtitle,
        author: author,
        status: "NEW",
        create_date: new Date()
      }
    },

    getProjectByName: async function(name: string) {
      component.project = this.project;
      return this.project;
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
