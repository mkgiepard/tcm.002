import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { TestPlan, TestCase } from "../../models/test-plan.model";
import { ActivatedRoute } from "@angular/router";
import { TestPlanService } from "../../services/test-plan.service";

@Component({
  selector: "app-test-plan-view",
  templateUrl: "./test-plan-view.component.html",
  styleUrls: ["./test-plan-view.component.css"],
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
export class TestPlanViewComponent implements OnInit {
  displayedColumns: string[] = ["index", "title", "priority", "status"];
  columnsToDisplay = ["index", "title", "priority", "status"];
  testPlanData: TestPlan;
  dataSource: TestCase[];

  expandedElement: TestCase | null;
  constructor(
    private route: ActivatedRoute,
    private tpService: TestPlanService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.tpService.getTestPlan(id).subscribe((data) => {
      this.testPlanData = data;
      this.dataSource = data.testCases;
    });
  }
}
