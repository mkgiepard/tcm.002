import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TestPlanService } from "../../services/test-plan.service";

@Component({
  selector: "app-test-plan-list",
  templateUrl: "./test-plan-list.component.html",
  styleUrls: ["./test-plan-list.component.css"],
})
export class TestPlanListComponent implements OnInit {
  tpColumns: string[] = ["name", "author", "total tests", "action"];
  tpDataSource = new MatTableDataSource();

  constructor(private tpService: TestPlanService) {}

  ngOnInit() {
    this.fetchTestPlanData();
  }

  fetchTestPlanData() {
    this.tpService.getTestPlans().subscribe((data) => {
      this.tpDataSource.data = data;
    });
  }

  applyFilter(filterValue: string) {
    this.tpDataSource.filter = filterValue.trim().toLowerCase();
  }
}
