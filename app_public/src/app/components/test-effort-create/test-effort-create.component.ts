import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TEST_PLAN_DATA_SELECTED } from "../../models/test-plan.model";
import { TestPlanService } from "../../services/test-plan.service";

@Component({
  selector: "app-test-effort-create",
  templateUrl: "./test-effort-create.component.html",
  styleUrls: ["./test-effort-create.component.css"],
})
export class TestEffortCreateComponent implements OnInit {
  tpColumns: string[] = ["name", "author", "total tests", "action"];
  tpDataSource = new MatTableDataSource();
  tpSelectedDataSource = new MatTableDataSource(TEST_PLAN_DATA_SELECTED);

  constructor(private tpService: TestPlanService) {}

  ngOnInit() {
    this.fetchTestData();
  }

  fetchTestData() {
    this.tpService.getTestPlans().subscribe((data) => {
      this.tpDataSource.data = data;
    });
  }

  applyFilter(filterValue: string) {
    this.tpDataSource.filter = filterValue.trim().toLowerCase();
  }
}
