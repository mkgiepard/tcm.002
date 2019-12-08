import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TestPlan, TestCase, TEST_PLAN_DATA} from '../../models/test-plan.model';

@Component({
  selector: 'app-test-effort-view',
  templateUrl: './test-effort-view.component.html',
  styleUrls: ['./test-effort-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('25ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TestEffortViewComponent implements OnInit {
  columnsToDisplay = ['index', 'title', 'priority', 'status', 'comment', 'action'];
  groupColumnsToDisplay = [ 'groupHeader', 'comment', 'action']
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
