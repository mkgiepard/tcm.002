import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TestPlanViewComponent } from "./test-plan-view.component";
import { RouterTestingModule } from "@angular/router/testing";
// Http testing module and mocking controller
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("TestPlanViewComponent", () => {
  let component: TestPlanViewComponent;
  let fixture: ComponentFixture<TestPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPlanViewComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
