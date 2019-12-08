import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEffortViewComponent } from './test-effort-view.component';

describe('TestEffortViewComponent', () => {
  let component: TestEffortViewComponent;
  let fixture: ComponentFixture<TestEffortViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEffortViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEffortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
