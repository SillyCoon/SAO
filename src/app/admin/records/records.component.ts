import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  records = [
    {id: 1, firstName: 'Алексей', lastName: 'Иванов', }
  ]

  times: MatTableDataSource<any> = new MatTableDataSource([
    {
      id: 1, point: 'Первый мед', date: new Date('11.08.1997'), quantity: 16, isStopped: false
    },
    {
      id: 2, point: 'Первый мед', date: new Date('11.08.1997'), quantity: 15, isStopped: false
    },
    {
      id: 3, point: 'Экспоцентр', date: new Date('11.08.1997'), quantity: 17, isStopped: true
    },
    {
      id: 4, point: 'Экспоцентр', date: new Date('11.08.1997'), quantity: 18, isStopped: true
    },
    {
      id: 5, point: 'Алмазова', date: new Date('11.08.1997'), quantity: 15, isStopped: false
    }
  ]);


  constructor() { }

  ngOnInit() {
  }

}

