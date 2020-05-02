import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TEST_PLAN_DATA_MULTI } from '../../models/test-plan.model';

@Component({
  selector: 'app-test-plan-list',
  templateUrl: './test-plan-list.component.html',
  styleUrls: ['./test-plan-list.component.css']
})
export class TestPlanListComponent implements OnInit {
  tpColumns: string[] = ['name', 'author', 'total tests', 'action'];
  tpDataSource = new MatTableDataSource(TEST_PLAN_DATA_MULTI);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.tpDataSource.filter = filterValue.trim().toLowerCase();
  }

}
