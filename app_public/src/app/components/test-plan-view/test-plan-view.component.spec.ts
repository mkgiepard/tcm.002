import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlanViewComponent } from './test-plan-view.component';

describe('TestPlanViewComponent', () => {
  let component: TestPlanViewComponent;
  let fixture: ComponentFixture<TestPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
