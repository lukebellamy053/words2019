import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from '../../pipes/external-string.pipe';

@Component({
  selector: '[app-important-dates]',
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.css']
})
export class ImportantDatesComponent implements OnInit {

  groups: Array<any> = [];
  dates: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.groups = new ExternalStringPipe().transform('dates groups') || [];
    this.groups.forEach((group, index) => {
      this.dates[index] = group.dates || [];
    });
  }

}
