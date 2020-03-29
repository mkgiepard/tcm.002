import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  createForm: FormGroup;
  project: Project;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder, 
    private router: Router) {
      this.createForm = this.fb.group({
        name: ["", Validators.required],
        subtitle: "",
        author: "",
        status: "NEW",
        create_date: new Date(),
      });
     }

  ngOnInit() {
  }

  addProject(name, subtitle, author) {
    this.project = {
      name: name,
      subtitle: subtitle,
      author: author,
      status: "NEW",
      create_date: new Date()
    }
    this.projectService.addProject(name, subtitle, author);
    this.router.navigate(['/project-list']);
  }

}
