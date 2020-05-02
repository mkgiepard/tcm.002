import { Component, OnInit } from '@angular/core';
import { PROJECT_DATA } from '../../models/project.model';
import { TEST_PLAN_DATA } from '../../models/test-plan.model';
import { TEST_EFFORT_DATA } from '../../models/test-effort.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})

export class ProjectViewComponent implements OnInit {
  tpColumns: string[] = ['name', 'author', 'created', 'total tests'];
  teColumns: string[] = 
    ['name', 'author', 'created', 'status', 'total', 'passed', 'failed', 'blocked'];
  tpDataSource = new MatTableDataSource([TEST_PLAN_DATA]);
  teDataSource = new MatTableDataSource(TEST_EFFORT_DATA);
  projectData = PROJECT_DATA[0];

  constructor() { }
  ngOnInit() {
  }

}
