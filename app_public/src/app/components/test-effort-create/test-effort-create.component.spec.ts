import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "../../app.material.module";
import { TestEffortCreateComponent } from "./test-effort-create.component";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("TestEffortCreateComponent", () => {
  let component: TestEffortCreateComponent;
  let fixture: ComponentFixture<TestEffortCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestEffortCreateComponent],
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEffortCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
