import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../app.material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectListComponent } from './project-list.component';
import { Project } from '../../models/project.model';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListComponent ],
      imports: [AppMaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set instance correctly', () => {
    expect(component).not.toBeNull();
  });

  it('should be no projects if there is no data', () => {
    // TODO: this should use some kind of mock of a ProjectService
    component.projects = [];
    expect(component.projects.length).toBe(0);
  });

  it('should be contacts if there are data', () => {
    const newProject: Project = {
       name: 'Project A',
       subtitle: 'Sanity tests',
       status: 'New', 
       author: 'Mario Bros', 
       create_date: new Date('2019.11.12')
    };
    component.projects = [newProject];
    expect(component.projects.length).toBe(1);
  });
});
