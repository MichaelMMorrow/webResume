import { Component, OnInit } from '@angular/core';
import { RESUMESUBJECT } from '../resume-subject';
import {MatDialog} from '@angular/material/dialog';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  subject = RESUMESUBJECT;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GoogleMapComponent, {
    });
  }

  openLink(linkUrl: string){
    console.log(linkUrl);
    window.open(linkUrl);
  }

  ngOnInit(): void {
  }

}
