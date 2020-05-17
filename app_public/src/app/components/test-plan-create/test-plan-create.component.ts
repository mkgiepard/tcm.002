import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  TestPlan,
  TestCase,
  TestCaseGroup,
} from "../../models/test-plan.model";

@Component({
  selector: "app-test-plan-create",
  templateUrl: "./test-plan-create.component.html",
  styleUrls: ["./test-plan-create.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("25ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class TestPlanCreateComponent implements OnInit {
  columnsToDisplay = ["index", "title", "priority", "status", "action"];
  tc: TestCase = {
    index: -1,
    title: "",
    priority: "P3",
    status: "NEW",
    steps: ""
  }

  testCaseData: (TestCase | TestCaseGroup)[] = [
    { groupIndex: "1.1", groupName: "Functional > CUJ", isGroupBy: true },
    {
      index: 1,
      title: "Verify if a User can sign in with a newly created account",
      priority: "P0",
      status: "NEW",
      steps:
        "Preconditions: xxxxxxxxxxxxxxxxxxxx;\n\nStep 1: aaaaaaaa;\nStep 2: bbbbbbbb;\n" +
        "Step 3: ccccccc",
    },
    {
      index: 2,
      title: "Verify if already created User can sign in",
      priority: "P1",
      status: "NEW",
      steps:
        "Preconditions: xxxxxxxxxxxxxxxxxxxx; Step 1: aaaaaaaa; Step 2: bbbbbbbb; " +
        "Step 3: ccccccc",
    },
  ];
  testPlanData = {
    testCases: this.testCaseData,
  };

  expandedElement: TestCase | null;

  constructor() {}

  ngOnInit() {}

  addGroup(): void {
    const x: TestCaseGroup = {
      groupIndex: "1.2",
      groupName: "Functional > UI",
      isGroupBy: true,
    };
    this.testCaseData = this.testCaseData.concat(x);
  }

  addTestCase(): void {
    const id = this.testCaseData.length + 1;
    const x: TestCase = {
      index: id,
      title: this.tc.title,
      priority: this.tc.priority,
      status: "NEW",
      steps: this.tc.steps,
    };
    this.testCaseData = this.testCaseData.concat(x);
    this.tc = {
      index: -1,
      title: "",
      priority: "P3",
      status: "NEW",
      steps: ""
    }
  }

  isGroup(index, item): boolean {
    return item.groupIndex ? true : false;
  }

  isTest(index, item): boolean {
    return item.title ? true : false;
  }
}
