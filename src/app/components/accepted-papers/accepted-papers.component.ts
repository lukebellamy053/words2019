import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from 'src/app/pipes/external-string.pipe';

@Component({
  selector: 'app-accepted-papers',
  templateUrl: './accepted-papers.component.html',
  styleUrls: ['./accepted-papers.component.css']
})
export class AcceptedPapersComponent implements OnInit {

  acceptedPapers: any[] = [];

  constructor() { }

  ngOnInit() {
    this.acceptedPapers = new ExternalStringPipe().transform('submissions accepted_papers papers');
  }

  getAuthorString(authors: string[]): string {
    let authorString = '';
    if (typeof authors === 'string' || authors instanceof String) {
      return authors.toString();
    } else {
      for (let i = 0; i < authors.length; i++) {
        authorString = authorString.concat(authors[i], ', ');
      };
      return authorString.substring(0, authorString.length - 3);
    }
  }

}
