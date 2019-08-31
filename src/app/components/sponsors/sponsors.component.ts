import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from 'src/app/pipes/external-string.pipe';

@Component({
  selector: '[app-sponsors]',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  public sponsors: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.sponsors = new ExternalStringPipe().transform('sponsors') || [];
  }

}
