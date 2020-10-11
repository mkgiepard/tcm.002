import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppMaterialModule } from "../../app.material.module";
import { DashboardComponent } from "./dashboard.component";
import { ProjectCardComponent } from "../project-card/project-card.component";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ProjectCardComponent],
      imports: [AppMaterialModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
