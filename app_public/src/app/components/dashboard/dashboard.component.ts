import { Component, OnInit } from '@angular/core';
import { Project, PROJECT_DATA } from '../../models/project';

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
