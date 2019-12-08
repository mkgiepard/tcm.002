import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlanCreateComponent } from './test-plan-create.component';

describe('TestPlanCreateComponent', () => {
  let component: TestPlanCreateComponent;
  let fixture: ComponentFixture<TestPlanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
