import { Component, OnInit } from '@angular/core';
import { PROJECT_DATA } from '../../models/project.model';
import { TEST_PLAN_DATA } from '../../models/test-plan.model';
import { MatTableDataSource } from '@angular/material';

interface TestEffort {
  id: string;
  name: string;
  author: string;
  create_date: Date;
  status: string;
  total: number;
  passed: number;
  failed: number;
  blocked: number;
}

const TEST_EFFORT_DATA: TestEffort[] = [
  {
    id: '1', name: 'SelfTest regression - build 2020.01.26',
    author: 'Mario Bros', create_date: new Date('2020-01-26'),
    status: 'Active', total: 100, passed: 50, failed: 45, blocked: 5
  },
  {
    id: '2', name: 'SelfTest regression - build 2020.01.25',
    author: 'Mario Bros', create_date: new Date('2020-01-25'),
    status: 'Active', total: 100, passed: 51, failed: 44, blocked: 5
  },
  {
    id: '3', name: 'SelfTest regression - build 2020.01.24',
    author: 'Mario Bros', create_date: new Date('2020-01-24'),
    status: 'Active', total: 100, passed: 52, failed: 43, blocked: 5
  },
];

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
