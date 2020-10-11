import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-project-edit",
  templateUrl: "./project-edit.component.html",
  styleUrls: ["./project-edit.component.css"],
})
export class ProjectEditComponent implements OnInit {
  id: number;
  project: Project;
  updateForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.projectService.getProjectById(id).subscribe((project) => {
      this.project = project;
      this.updateForm.get("id").setValue(this.project.id);
      this.updateForm.get("name").setValue(this.project.name);
      this.updateForm.get("subtitle").setValue(this.project.subtitle);
      this.updateForm.get("author").setValue(this.project.author);
      this.updateForm.get("status").setValue(this.project.status);
      if (this.project.create_date != null) {
        this.updateForm
          .get("create_date")
          .setValue(this.project.create_date.toLocaleString());
      }
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      id: null,
      name: ["", Validators.required],
      subtitle: "",
      author: "",
      status: "",
      create_date: null,
    });
  }

  updateProject(project: Project): void {
    this.projectService
      .updateProject(project)
      .subscribe(() => this.router.navigate(["/project-list"]));
  }
}
