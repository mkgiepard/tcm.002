export interface TestPlan {
  id: string;
  name: string;
  author: string;
  create_date: Date;
  testCases: (TestCase | TestCaseGroup)[];
}

export interface TestCase {
  id?: number; // TODO: make it mandatory
  index: number;
  title: string;
  priority: string;
  status: string;
  steps: string;
  tags?: string[];
  author_id?: number;
  group_id?: number;
  project_id?: number;
  test_plan_id?: number;
  created?: Date;
}

export interface TestCaseGroup {
  id?: number; // TODO: make it mandatory
  index?: string;
  name?: string;
  author_id?: number;
  parent_id?: number;
  project_id?: number;
  test_plan_id?: number;
  groupIndex?: string; // TODO: deprecate
  groupName?: string; // TODO: deprecate
  isGroupBy: boolean;
  created?: Date;
}

export const TEST_CASES_DATA: (TestCase | TestCaseGroup)[] = [
  { groupIndex: "1.1", groupName: "Functional > CUJ", isGroupBy: true },
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
  { groupIndex: "1.2", groupName: "Functional > non CUJ", isGroupBy: true },
  {
    index: 1,
    title: "Verify event recurring event creation with custom recurring rule",
    priority: "P2",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  { groupIndex: "1.3", groupName: "Functional > Error Cases", isGroupBy: true },
  {
    index: 1,
    title: "Verify event update with a start time before end time",
    priority: "P3",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    groupIndex: "1.4",
    groupName: "Functional > Corner Cases",
    isGroupBy: true,
  },
  {
    index: 1,
    title: "Verify recurring event exception update",
    priority: "P4",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  { groupIndex: "2", groupName: "Layout", isGroupBy: true },
  {
    index: 1,
    title: "Verify create bubble with long strings",
    priority: "P5",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 2,
    title: "Verify month view on HD resolution screen",
    priority: "P6",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  { groupIndex: "3", groupName: "Navigation", isGroupBy: true },
  {
    index: 1,
    title: "Verify Back button funtionlity on create event bubble",
    priority: "P7",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  { groupIndex: "4", groupName: "A11y", isGroupBy: true },
  {
    index: 1,
    title: "Check CUJ in a11y mode",
    priority: "P8",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  {
    index: 2,
    title: "Check UI with a11y color inspector",
    priority: "P9",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
  { groupIndex: "5", groupName: "Performance", isGroupBy: true },
  {
    index: 1,
    title: "Check the app loading time with enormous set of data",
    priority: "P10",
    status: "NEW",
    steps:
      "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; Step 3: ccccccc",
  },
];

export const TEST_PLAN_DATA: TestPlan = {
  id: "1",
  name: "Test Plan A.001",
  author: "Mario Bros",
  create_date: new Date("2019-11-17"),
  testCases: TEST_CASES_DATA,
};

export const TEST_PLAN_DATA_MULTI: TestPlan[] = [
  {
    id: "1",
    name: "Test Plan A.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "2",
    name: "Test Plan B.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "3",
    name: "Test Plan C.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "4",
    name: "Test Plan D.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "5",
    name: "Test Plan E.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "6",
    name: "Test Plan F.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "7",
    name: "Test Plan G.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "8",
    name: "Test Plan H.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "9",
    name: "Test Plan I.003",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "10",
    name: "Test Plan J.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "11",
    name: "Test Plan K.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "12",
    name: "Test Plan L.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
];

export const TEST_PLAN_DATA_SELECTED: TestPlan[] = [
  {
    id: "1",
    name: "Test Plan L.001",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
  {
    id: "2",
    name: "Test Plan M.002",
    author: "Mario Bros",
    create_date: new Date("2019-11-17"),
    testCases: TEST_CASES_DATA,
  },
];
