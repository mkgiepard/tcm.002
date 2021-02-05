import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { TestPlan, TestCase } from "../../models/test-plan.model";
// TODO: replace with TestPlanService
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
  tc: TestCase = {
    id: 0,
    index: -1,
    title: "",
    priority: "P3",
    status: "NEW",
    steps: "",
  };
  testCaseData: TestCase[];
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
  }

  addTestCase(): void {
    const x: TestCase = {
      index: this.testCaseData.length + 1,
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
      steps: "",
    };
  }

  isGroup(index, item): boolean {
    return item.isGroupBy ? true : false;
  }

  isTest(index, item): boolean {
    return item.title ? true : false;
  }
}
