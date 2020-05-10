// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { TestBed } from "@angular/core/testing";
import { ProjectService } from "./project.service";

describe("ProjectService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it("should be created", () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
