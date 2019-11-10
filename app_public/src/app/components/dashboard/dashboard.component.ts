import { Component, OnInit } from '@angular/core';

export interface Project {
  name: string;
  subtitle: string;
  status: string;
}

const PROJECT_DATA: (Project)[] = [
  {name: 'Project A', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project B', subtitle: 'Sanity tests', status: 'blocked'},
  {name: 'Project C', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project D', subtitle: 'Customer acceptance tests', status: 'active'},
  {name: 'Project E', subtitle: 'Regression tests', status: 'closed'},
  {name: 'Project F', subtitle: 'Regression tests', status: 'active'},
  {name: 'Project G', subtitle: 'Regression tests', status: 'panic'},
  {name: 'Project H', subtitle: 'Integration tests', status: 'new'},
  {name: 'Project I', subtitle: 'Smoke tests', status: 'new'},
  {name: 'Project J', subtitle: 'Sanity tests', status: 'new'},
];

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
