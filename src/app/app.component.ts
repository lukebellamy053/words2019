import { Component, OnInit } from '@angular/core';
import { ExternalStringPipe } from './pipes/external-string.pipe';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Words 2019';
  dates = [];

  public static getImage(section: string): string {
    const images: String[] = new ExternalStringPipe().transform(section) || [];
    const index = Math.floor(Math.random() * images.length);
    return `'url(\"/assets/imgs/overlay.png\"), url(\"/assets/imgs/overlay.png\"), url(\"` + images[index] + `\");'`;
  }


  ngOnInit() {
    $(document).on('click', 'a[href^="#"]', function(event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });

    new ExternalStringPipe().transform('dates groups').forEach((group) => {
      this.dates = this.dates.concat(group.dates);
    });
  }
}
