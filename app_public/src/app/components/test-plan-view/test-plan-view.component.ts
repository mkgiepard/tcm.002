import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TestPlan, TestCase, TEST_PLAN_DATA} from '../../models/test-plan.model';

@Component({
  selector: 'app-test-plan-view',
  templateUrl: './test-plan-view.component.html',
  styleUrls: ['./test-plan-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('25ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TestPlanViewComponent implements OnInit {
  displayedColumns: string[] = ['index', 'title', 'priority', 'status'];
  columnsToDisplay = ['index', 'title', 'priority', 'status'];
  testPlanData = TEST_PLAN_DATA;
  dataSource = TEST_PLAN_DATA.testCases;

  expandedElement: TestCase | null;
  constructor() { }

  ngOnInit() {
  }

  isGroup(index, item): boolean {
    return item.groupIndex ? true : false;
  }

  isTest(index, item): boolean {
    return item.title ? true : false;
  }

}
