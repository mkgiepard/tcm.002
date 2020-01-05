import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../app.material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectViewComponent } from './project-view.component';

describe('ProjectViewComponent', () => {
  let component: ProjectViewComponent;
  let fixture: ComponentFixture<ProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectViewComponent ],
      imports: [AppMaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
