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
import { TestEffortService } from "../../services/test-effort.service";

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
  tg: TestCaseGroup = {
    id: 0,
    index: "",
    name: "",
    isGroupBy: true,
  };
  tc: TestCase = {
    id: 0,
    index: -1,
    title: "",
    priority: "P3",
    status: "NEW",
    steps: "",
  };
  groups: TestCaseGroup[];
  testCaseData: (TestCase | TestCaseGroup)[];
  testPlanData = {
    testCases: this.testCaseData,
  };

  expandedElement: TestCase | null;
  selectedGroup: string;
  selectedGroupIdForTC: number;

  constructor(private teService: TestEffortService) {}

  ngOnInit() {
    this.fetchTestData();
  }

  fetchTestData(): void {
    this.teService.getTestData(1).subscribe((data) => {
      this.testCaseData = data;
    });
    this.teService.getTestGroupsByTestPlanId(1).subscribe((data) => {
      this.groups = data;
    });
  }

  addGroup(): void {
    const id = this.testCaseData.length + 1;
    const x: TestCaseGroup = {
      index: "1." + id,
      name: `${this.selectedGroup} > ${this.tg.name}`,
      isGroupBy: true,
    };
    this.testCaseData = this.testCaseData.concat(x);
    this.tg = {
      groupIndex: "",
      groupName: "",
      isGroupBy: true,ś
    };
  }

  addTestCase(): void {
    const id = this.getNextTCindexForGroup(this.selectedGroupIdForTC);
    const x: TestCase = {
      index: id,
      title: this.tc.title,
      priority: this.tc.priority,
      status: "NEW",
      steps: this.tc.steps,
      group_id: this.selectedGroupIdForTC,
    };
    this.testCaseData = this.testCaseData.concat(x);
    this.tc = {
      index: -1,
      title: "",
      priority: "P3",
      status: "NEW",
      steps: "",
    };
  }

  getNextTCindexForGroup(groupId: number) {
    let counter = 0;
    for (let i = 0; i < this.testCaseData.length; i++) {
      if ((<TestCase>this.testCaseData[i]).group_id === groupId) counter++;
    }
    return counter + 1;
  }

  isGroup(index, item): boolean {
    return item.isGroupBy ? true : false;
  }

  isTest(index, item): boolean {
    return item.title ? true : false;
  }
}
