import { Component, OnInit } from '@angular/core';

export interface Project {
  name: string;
  subtitle: string;
  status: string;
}

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
