import { Component, OnInit } from "@angular/core";
import { ExternalStringPipe } from "../../pipes/external-string.pipe";

@Component({
  selector: "[app-invited-speakers]",
  templateUrl: "./invited-speakers.component.html",
  styleUrls: ["./invited-speakers.component.css"]
})
export class InvitedSpeakersComponent implements OnInit {
  speakers: Array<any> = [];
  abstract: Array<any> = [];
  keys: Array<string> = [];

  constructor() {}

  ngOnInit() {
    this.speakers = new ExternalStringPipe().transform("speakers speakyBois");
    this.abstract = new ExternalStringPipe().transform("speakers abstract");
  }

  getKey(index: number, incHash: boolean = false) {
    if (!this.keys[index]) {
      this.keys[index] = this.randomKey();
    }

    return (incHash ? "#" : "") + this.keys[index];
  }

  randomKey() {
    var text = "A";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
