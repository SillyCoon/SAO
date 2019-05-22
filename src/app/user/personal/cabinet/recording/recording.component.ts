import { CabinetService } from './../services/cabinet.service';
import { DonationTime } from './../../models/donation-time';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabinet-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {

  displayedColumns = ['id', 'point', 'date', 'time', 'record'];

  times: DonationTime[] = [];

  constructor(private cabinetService: CabinetService) { }

  ngOnInit() {
    this.cabinetService.getAvailableTimes('123').subscribe(times => {
      this.times = times;
    });
  }

  record(timeId: string) {
    console.log(timeId);
    this.cabinetService.record(timeId, '123').subscribe();
  }

}
