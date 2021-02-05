import { TestPlan, TestCase } from "../test-plan.model";

export const TEST_CASES_DATA: TestCase[] = [
  {
    index: 1,
    title: "Verify if a User can sign in with a newly created account",
    priority: "P0",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx;\n\nStep 1: aaaaaaaa;\nStep 2: bbbbbbbb;\nStep 3: ccccccc",
  },
  {
    index: 2,
    title: "Verify if already created User can sign in",
    priority: "P1",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 3,
    title: "Verify event recurring event creation with custom recurring rule",
    priority: "P2",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 4,
    title: "Verify event update with a start time before end time",
    priority: "P3",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 5,
    title: "Verify recurring event exception update",
    priority: "P4",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 6,
    title: "Verify create bubble with long strings",
    priority: "P5",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 7,
    title: "Verify month view on HD resolution screen",
    priority: "P6",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 8,
    title: "Verify Back button funtionlity on create event bubble",
    priority: "P7",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 9,
    title: "Check CUJ in a11y mode",
    priority: "P8",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 10,
    title: "Check UI with a11y color inspector",
    priority: "P9",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 11,
    title: "Check the app loading time with enormous set of data",
    priority: "P10",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 12,
    title: "zzz Check the app loading time with enormous set of data",
    priority: "P10",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
];

export const TEST_PLAN_DATA_MULTI: TestPlan[] = [
  {
    id: 1,
    name: "Test Plan A.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 1,
  },
  {
    id: 2,
    name: "Test Plan B.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 1,
  },
  {
    id: 3,
    name: "Test Plan C.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 1,
  },
  {
    id: 4,
    name: "Test Plan D.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 2,
  },
  {
    id: 5,
    name: "Test Plan E.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 2,
  },
  {
    id: 6,
    name: "Test Plan F.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 3,
  },
  {
    id: 7,
    name: "Test Plan G.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 4,
  },
  {
    id: 8,
    name: "Test Plan H.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 5,
  },
  {
    id: 9,
    name: "Test Plan I.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 5,
  },
  {
    id: 10,
    name: "Test Plan J.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 5,
  },
  {
    id: 11,
    name: "Test Plan K.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 5,
  },
  {
    id: 12,
    name: "Test Plan L.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 5,
  },
];

export const TEST_PLAN_DATA_SELECTED: TestPlan[] = [
  {
    id: 1,
    name: "Test Plan L.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 1,
  },
  {
    id: 2,
    name: "Test Plan M.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
    project_id: 1,
  },
];
