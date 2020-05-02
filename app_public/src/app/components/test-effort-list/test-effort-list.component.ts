import { Component, OnInit } from '@angular/core';
import { TEST_EFFORT_DATA } from '../../models/test-effort.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test-effort-list',
  templateUrl: './test-effort-list.component.html',
  styleUrls: ['./test-effort-list.component.css']
})
export class TestEffortListComponent implements OnInit {
  teColumns: string[] = 
    ['name', 'author', 'created', 'status', 'total', 'passed', 'failed', 'blocked'];  
  teDataSource = new MatTableDataSource(TEST_EFFORT_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.teDataSource.filter = filterValue.trim().toLowerCase();
  }
}
