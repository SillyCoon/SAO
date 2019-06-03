import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


  periods = [{ title: 'Сентябрь 2019', succesful: 50, unsuccessfull: 20 }, { title: 'Октябрь 2019', succesful: 46, unsuccessfull: 13 }];

  displayedColumns = ['day', 'hour', 'successful', 'respectful', 'disrespectful'];

  historyData = [
    { date: new Date('11.08.2000 11:30'), successful: 10, respectful: 4, disrespectful: 3 },
    { date: new Date('11.09.2000 11:30'), successful: 12, respectful: 5, disrespectful: 2 },
    { date: new Date('11.10.2000 11:30'), successful: 13, respectful: 4, disrespectful: 0 },
    { date: new Date('11.11.2000 11:30'), successful: 14, respectful: 6, disrespectful: 0 },
    { date: new Date('11.12.2000 11:30'), successful: 9, respectful: 3, disrespectful: 1 }
  ];

  date = new Date()
  constructor() { }

  ngOnInit() {
  }

}
