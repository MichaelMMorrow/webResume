import { Component, OnInit } from '@angular/core';
import { RESUMESUBJECT } from '../resume-subject';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  styleUrls: ['./resume-summary.component.css']
})
export class ResumeSummaryComponent implements OnInit {

  subject = RESUMESUBJECT;

  constructor() { }

  ngOnInit(): void {
  }

}
