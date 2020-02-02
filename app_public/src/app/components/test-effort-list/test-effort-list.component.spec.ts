import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../app.material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestEffortListComponent } from './test-effort-list.component';

describe('TestEffortListComponent', () => {
  let component: TestEffortListComponent;
  let fixture: ComponentFixture<TestEffortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEffortListComponent ],
      imports: [AppMaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEffortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
