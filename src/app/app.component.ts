import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Words 2019';

  ngOnInit() {
    $(document).on('click', 'a[href^="#"]', function(event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }
}