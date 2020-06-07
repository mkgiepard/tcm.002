import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TestPlanListComponent } from "./test-plan-list.component";
import { RouterTestingModule } from "@angular/router/testing";
// Http testing module and mocking controller
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("TestPlanListComponent", () => {
  let component: TestPlanListComponent;
  let fixture: ComponentFixture<TestPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPlanListComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
