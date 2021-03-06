import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-create",
  templateUrl: "./project-create.component.html",
  styleUrls: ["./project-create.component.css"],
})
export class ProjectCreateComponent implements OnInit {
  createForm: FormGroup;
  public project: Project;
  public id: number;
  public savingProject = false;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createNewProjectIntance();
    this.createForm = this.fb.group({
      name: [this.project.name, Validators.required],
      subtitle: this.project.subtitle,
      author: this.project.author,
      status: this.project.status,
      create_date: this.project.create_date,
    });
  }

  createNewProjectIntance() {
    this.project = {
      id: -1,
      name: "",
      subtitle: "",
      author: "Jon Deo",
      status: "NEW",
      create_date: new Date(),
    };
  }

  addNewProject(project: Project): void {
    this.projectService.addProject(project).subscribe((project) => {
      this.project = project;
      this.router.navigate(["/project-list"]);
    });
  }
}
