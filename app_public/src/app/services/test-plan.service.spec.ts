import { TestBed } from "@angular/core/testing";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestPlanService } from "./test-plan.service";

describe("TestPlanService", () => {
  let service: TestPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TestPlanService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
