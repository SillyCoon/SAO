import { TimesService } from './times.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DonationTime } from 'src/app/shared/models/donation-time';
import { MatSortHeader, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  displayedColumns = ['id', 'point', 'date', 'time', 'record'];

  editedRowId: string;

  times: MatTableDataSource<any>;

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
