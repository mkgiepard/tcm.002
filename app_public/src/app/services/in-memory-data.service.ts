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

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = PROJECT_DATA;
    const testGroups: TestCaseGroup[] = [
      {
        id: 1,
        index: "1",
        name: "Functional",
        author_id: 1,
        parent_id: 0,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
      {
        id: 2,
        index: "1.1",
        name: "Functional > UI",
        author_id: 1,
        parent_id: 1,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
      {
        id: 3,
        index: "1.2",
        name: "Functional > CUJ",
        author_id: 1,
        parent_id: 1,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
      {
        id: 4,
        index: "2",
        name: "Performance",
        author_id: 1,
        parent_id: 0,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
      {
        id: 5,
        index: "2.1",
        name: "Performance > Network",
        author_id: 1,
        parent_id: 4,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
      {
        id: 6,
        index: "3",
        name: "Security",
        author_id: 1,
        parent_id: 0,
        project_id: 1,
        test_plan_id: 1,
        isGroupBy: true,
        created: new Date("2020-05-23"),
      },
    ];
    const testCases: TestCase[] = [
      {
        id: 1,
        index: 1,
        title: "Verify if a User can sign in with a newly created account",
        priority: "P2",
        status: "NEW",
        steps:
          "1. Do something\n2. Then do something else\nVRF: AAA is not green",
        tags: [],
        author_id: 1,
        group_id: 1,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 2,
        index: 2,
        title: "Verify if already created User can sign in",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 1,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 3,
        index: 3,
        title:
          "Verify event recurring event creation with custom recurring rule",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 1,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 4,
        index: 1,
        title: "Test case A",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 2,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 5,
        index: 2,
        title: "Test case B",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 2,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 6,
        index: 1,
        title: "Test case C",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 3,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 7,
        index: 1,
        title: "Test case D",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 4,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
      {
        id: 8,
        index: 2,
        title: "Test case E",
        priority: "P2",
        status: "NEW",
        steps: "",
        tags: [],
        author_id: 1,
        group_id: 4,
        project_id: 1,
        test_plan_id: 1,
        created: new Date("2020-05-23"),
      },
    ];
    const testPlans: TestPlan[] = TEST_PLAN_DATA_MULTI;
    console.log("in-memory-data > " + projects.length);
    return { projects, testGroups, testCases, testPlans };
  }

  genId(projects: Project[]): number {
    return projects.length > 0
      ? Math.max(...projects.map((project) => project.id)) + 1
      : 11;
  }
}
