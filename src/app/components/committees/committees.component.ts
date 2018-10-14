import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from '../../pipes/external-string.pipe';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {

  committees: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.committees = new ExternalStringPipe().transform('committees groups');
  }

}
