import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from '../../pipes/external-string.pipe';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  list_items: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.list_items = new ExternalStringPipe().transform('submissions scope points') || [];
  }

}
