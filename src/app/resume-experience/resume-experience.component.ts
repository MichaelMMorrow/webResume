import { Component, OnInit } from '@angular/core';
import { RESUMESUBJECT } from '../resume-subject';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.css']
})
export class ResumeExperienceComponent implements OnInit {

  subject = RESUMESUBJECT;

  constructor() { }

  openLink(linkUrl: string){
    console.log(linkUrl);
    window.open(linkUrl);
  }

  ngOnInit(): void {
  }

}
