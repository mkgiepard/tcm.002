import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "../../app.material.module";
import { TestEffortViewComponent } from "./test-effort-view.component";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("TestEffortViewComponent", () => {
  let component: TestEffortViewComponent;
  let fixture: ComponentFixture<TestEffortViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestEffortViewComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEffortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
