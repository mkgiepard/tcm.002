import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'subtitle', 'status', 'author', 'action'];
  projects: Project[];
  dataSource = new MatTableDataSource();

  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    this.fetchProjects();
  }

  fetchProjects() {
    this.projects = this.projectService.getProjects();
    this.dataSource.data = this.projects;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
