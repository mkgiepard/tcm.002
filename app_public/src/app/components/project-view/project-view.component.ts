import { Component, OnInit, Input } from "@angular/core";
import { PROJECT_DATA } from "../../models/project.model";
import { TEST_EFFORT_DATA } from "../../models/test-effort.model";
import { Project } from "../../models/project.model";
import { MatTableDataSource } from "@angular/material/table";
import { ProjectService } from "../../services/project.service";
import { TestPlanService } from "../../services/test-plan.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { TestPlan } from "src/app/models/test-plan.model";

@Component({
  selector: "app-project-view",
  templateUrl: "./project-view.component.html",
  styleUrls: ["./project-view.component.css"],
})
export class ProjectViewComponent implements OnInit {
  @Input() projectData: Project;

  // TODO: retrieve via a service call
  tpColumns: string[] = ["name", "author", "created", "total tests"];
  teColumns: string[] = [
    "name",
    "author",
    "created",
    "status",
    "total",
    "passed",
    "failed",
    "blocked",
  ];
  tpDataSource = new MatTableDataSource();
  teDataSource = new MatTableDataSource(TEST_EFFORT_DATA);

  constructor(
    private projectService: ProjectService,
    private testPlanService: TestPlanService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
    this.getTestPlans();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.projectService
      .getProjectById(id)
      .subscribe((project) => (this.projectData = project));
  }

  // TODO: move it to the TestPlanService
  getTestPlans(): void {
    let testplans: TestPlan[] = [];
    this.testPlanService.getTestPlans().subscribe((data) => {
      data.forEach((element) => {
        if (element.project_id == this.projectData.id) {
          console.log(testplans);
          testplans.push(element);
        }
      });
      this.tpDataSource.data = testplans;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.projectService
    //   .updateProject(this.project)
    //   .subscribe(() => this.goBack());
  }
}
