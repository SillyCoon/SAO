import { TimesService } from './times.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationTime } from 'src/app/shared/models/donation-time';
import { MatSortHeader, MatSort, MatTableDataSource } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  displayedColumns = ['id', 'point', 'date', 'time', 'quantity', 'isStopped', 'configs', ];

  expandedTime: any;

  editedRowId: string;

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

  @ViewChild(MatSort) sort: MatSort;

  constructor(private timeService: TimesService) { }

  ngOnInit() {
    this.loadTimes();
  }

  update(id: string) {
    this.editedRowId = id;
  }

  loadTimes() {
    this.timeService.getTimes().subscribe((times: DonationTime[]) => {
      this.times = new MatTableDataSource(times);
      this.times.sort = this.sort;
    });
  }

}
