import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { TestPlan, TestCase } from "../../models/test-plan.model";
import { TestEffortService } from "../../services/test-effort.service";
import { TestPlanService } from "../../services/test-plan.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-test-effort-view",
  templateUrl: "./test-effort-view.component.html",
  styleUrls: ["./test-effort-view.component.css"],
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
export class TestEffortViewComponent implements OnInit {
  columnsToDisplay = [
    "index",
    "title",
    "priority",
    "status",
    "comment",
    "action",
  ];
  groupColumnsToDisplay = ["groupHeader", "comment", "action"];
  testPlanData: TestPlan;
  dataSource: TestCase[];
  expandedElement: TestCase | null;
  statusMap = new Map([
    ["new", "trip_origin"],
    ["passed", "done"],
    ["failed", "clear"],
    ["blocked", "pause"],
    ["skipped", "skip_next"],
  ]);

  constructor(
    private teService: TestEffortService,
    private tpService: TestPlanService
  ) {}

  ngOnInit() {
    this.fetchTestData();
  }

  fetchTestData(): void {
    this.teService.getTestData(1).subscribe((data) => {
      this.dataSource = data;
    });
    this.tpService
      .getTestPlan(1)
      .subscribe((data) => (this.testPlanData = data));
  }

  isGroup(index, item): boolean {
    return item.isGroupBy ? true : false;
  }

  isTest(index, item): boolean {
    return item.title ? true : false;
  }

  getIconName(status: string): string {
    return this.statusMap.get(status);
  }

  updateStatus(id: number, status: string) {
    for (let i = 0; i < this.dataSource.length; i++) {
      if ((<TestCase>this.dataSource[i]).id === id) {
        (<TestCase>this.dataSource[i]).status = status;
      }
    }
  }
}
