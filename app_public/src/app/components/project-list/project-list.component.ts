import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"],
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "subtitle",
    "status",
    "author",
    "action",
  ];
  projects: Project[];
  dataSource = new MatTableDataSource();

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.dataSource.data = projects;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProject(id): void {
    this.projectService.deleteProject(Number(id));
    this.fetchProjects();
  }
}
