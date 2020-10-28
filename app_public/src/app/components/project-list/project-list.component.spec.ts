import {
  async,
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick,
} from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectListComponent } from "./project-list.component";
import { Project } from "../../models/project.model";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from "rxjs";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ProjectService } from "src/app/services/project.service";

describe("ProjectListComponent", () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  const projectServiceStub = {
    projects: [
      {
        id: 1,
        name: "Project A",
        status: "New",
        author: "Mario Bros",
        create_date: new Date("2019.11.12"),
      },
    ],
    getProjects: function () {
      return of(this.projects);
    },
    getProjectById: function (id: number) {
      return of(this.projects[0]);
    },
    addProject: function (project: Project) {
      this.projects.push(project);
    },
    updateProject: function (project: Project) {
      this.projects.splice(0, 1, project);
    },
    deleteProject: function (project: Project | number) {
      this.projects = [];
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: ProjectService, useValue: projectServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it("should be no projects if there is no data", () => {
    projectServiceStub.projects = [];
    component.fetchProjects();
    expect(component.projects.length).toEqual(0);
  });

  it("should be projects if there are data", () => {
    expect(component.projects.length).toEqual(1);
  });
});
