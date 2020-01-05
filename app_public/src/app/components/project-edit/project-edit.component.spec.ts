import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../app.material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectEditComponent } from './project-edit.component';

describe('ProjectEditComponent', () => {
  let component: ProjectEditComponent;
  let fixture: ComponentFixture<ProjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEditComponent ],
      imports: [AppMaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
