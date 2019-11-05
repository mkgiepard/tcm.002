import { Component, OnInit } from '@angular/core';

export interface Project {
  name:  string;
  subtitle: string;
  status: string;
}

const PROJECT_DATA: (Project)[] = [
  {name: 'Project Red', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project Green', subtitle: 'Sanity tests', status: 'blocked'},
  {name: 'Project Blue', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project Pink', subtitle: 'Customer acceptance tests', status: 'active'},
  {name: 'Project White', subtitle: 'Regression tests', status: 'closed'},
  {name: 'Project Black', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project Yellow', subtitle: 'Regression tests', status: 'panic'},
  {name: 'Project Orange', subtitle: 'Integration tests', status: 'new'},
  {name: 'Project Cyan', subtitle: 'Smoke tests', status: 'new'},
  {name: 'Project Gray', subtitle: 'Sanity tests', status: 'new'},
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource = PROJECT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
