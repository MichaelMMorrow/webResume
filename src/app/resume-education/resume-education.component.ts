import { Component, OnInit } from '@angular/core';
import { RESUMESUBJECT } from '../resume-subject';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.css']
})
export class ResumeEducationComponent implements OnInit {

  subject = RESUMESUBJECT;

  constructor() { }

  openLink(linkUrl: string){
    console.log(linkUrl);
    window.open(linkUrl);
  }

  ngOnInit(): void {
  }

}
