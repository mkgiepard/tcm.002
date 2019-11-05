import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project_name: string;
  @Input() project_subtitle: string;
  @Input() project_status: string;

  constructor() { }

  ngOnInit() {
  }

}
