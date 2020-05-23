import { TestBed } from "@angular/core/testing";
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestEffortService } from "./test-effort.service";

describe("TestEffortService", () => {
  let service: TestEffortService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TestEffortService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
