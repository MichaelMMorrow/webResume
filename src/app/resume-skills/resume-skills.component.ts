import { Component, OnInit } from '@angular/core';
import { RESUMESUBJECT } from '../resume-subject';
import { Skill } from '../subject';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.css']
})
export class ResumeSkillsComponent implements OnInit {

  subject = RESUMESUBJECT;
  selectedSkill?: Skill;
  skillDetail(selectedSkill:Skill): void {
    this.selectedSkill = selectedSkill;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
