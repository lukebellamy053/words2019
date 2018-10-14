import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from '../../pipes/external-string.pipe';

@Component({
  selector: 'app-invited-speakers',
  templateUrl: './invited-speakers.component.html',
  styleUrls: ['./invited-speakers.component.css']
})
export class InvitedSpeakersComponent implements OnInit {

  speakers: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.speakers = new ExternalStringPipe().transform('speakers speakyBois');
  }

}
