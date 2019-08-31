import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference-programme',
  templateUrl: './conference-programme.component.html',
  styleUrls: ['./conference-programme.component.css'],
  providers: []
})
export class ConferenceProgrammeComponent implements OnInit {


  public content = [
    [
      { title: null, startTime: "20190909 09:15", endTime: "20190909 14:00"},
      { title: 'Registration (Schofield)', startTime: new Date(2019, 8, 9, 14, 0), endTime: new Date(2019, 8, 9, 14, 45) }
    ],
    [],
    [],
    [],
    []
  ];

  /**
   * The table data
   * An Array of Arrays of events
   * The first array represents the time in 15 min slots
   * The second array represents each day mon - fri
   * null means dont render anything
   */
  public converted: Array<Array<any>> = [];
  


  constructor() { 

   

  }

  ngOnInit() {
  }

  private convertData() {
      
  }
    

}
