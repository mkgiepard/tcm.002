import { TestCase } from "./test-plan.model";

export interface TestEffort {
  id: number;
  name: string;
  author: string;
  create_date: Date;
  status: string;
  total: number;
  passed: number;
  failed: number;
  blocked: number;
  testPlanReference?: number[];
  testCaseData?: { [testPlanId: number]: TestCase[] };
}

// TestEffort should have:
// - list of test plans as a reference (?)
// - copy of test cases from test plans
//
// step 1: one test plan only!

export const TEST_EFFORT_DATA: TestEffort[] = [
  {
    id: 1,
    name: "SelfTest regression - build 2020.01.26",
    author: "Mario Bros",
    create_date: new Date("2020-01-26"),
    status: "Active",
    total: 100,
    passed: 50,
    failed: 45,
    blocked: 5,
  },
  {
    id: 2,
    name: "SelfTest regression - build 2020.01.25",
    author: "Mario Bros",
    create_date: new Date("2020-01-25"),
    status: "Active",
    total: 100,
    passed: 51,
    failed: 44,
    blocked: 5,
  },
  {
    id: 3,
    name: "SelfTest regression - build 2020.01.24",
    author: "Mario Bros",
    create_date: new Date("2020-01-24"),
    status: "Active",
    total: 100,
    passed: 52,
    failed: 43,
    blocked: 5,
  },
];
