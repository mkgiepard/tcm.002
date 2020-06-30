import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Project } from "../models/project.model";
import {
  TestCase,
  TestCaseGroup,
  TestPlan,
  TEST_PLAN_DATA_MULTI,
} from "../models/test-plan.model";
import { PROJECT_DATA } from "../models/fake-data/project-data";
import { TEST_CASE_GROUP_DATA } from "../models/fake-data/test-case-group-data";
import { TEST_CASE_DATA } from "../models/fake-data/test-case-data";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = PROJECT_DATA;
    const testGroups: TestCaseGroup[] = TEST_CASE_GROUP_DATA;
    const testCases: TestCase[] = TEST_CASE_DATA;
    const testPlans: TestPlan[] = TEST_PLAN_DATA_MULTI;
    console.log("in-memory-data > " + projects.length);
    return { projects, testGroups, testCases, testPlans };
  }

  genId<T extends Project | TestCaseGroup | TestCase>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map((t) => t.id)) + 1 : 11;
  }
}
