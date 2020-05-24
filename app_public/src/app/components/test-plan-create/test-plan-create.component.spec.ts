import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { TestPlanCreateComponent } from "./test-plan-create.component";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("TestPlanCreateComponent", () => {
  let component: TestPlanCreateComponent;
  let fixture: ComponentFixture<TestPlanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPlanCreateComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
