import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectEditComponent } from "./project-edit.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core";
import { ProjectService } from "../../services/project.service";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Observable, of } from "rxjs";
import { Project } from "../../models/project.model";

describe("ProjectEditComponent", () => {
  let component: ProjectEditComponent;
  let fixture: ComponentFixture<ProjectEditComponent>;
  let rootElement: DebugElement;

  const projectServiceStub = {
    project: {
      id: 1,
      name: "testing",
      subtitle: "subtitle-testing",
      author: "joe deo",
      status: "NEW",
      create_date: new Date("2019-11-12"),
    },

    getProjectById(id: number): Observable<Project> {
      component.project = this.project;
      return of(this.project);
    },

    updateProject: async function (project) {
      component.project = project;
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEditComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: ProjectService, useValue: projectServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
