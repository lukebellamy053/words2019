import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from 'src/app/pipes/external-string.pipe';

@Component({
  selector: '[app-conference-info]',
  templateUrl: './conference-info.component.html',
  styleUrls: ['./conference-info.component.css']
})
export class ConferenceInfoComponent implements OnInit {

  conferenceInfo: any[] = [];

  constructor() { }

  ngOnInit() {
    this.conferenceInfo = new ExternalStringPipe().transform('conference_info groups')
  }

}
