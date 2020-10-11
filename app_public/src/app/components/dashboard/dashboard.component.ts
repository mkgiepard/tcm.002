import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectService } from "src/app/services/project.service";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  dataSource: Project[];
  project_name: string;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.dataSource = projects;
    });
  }
}
