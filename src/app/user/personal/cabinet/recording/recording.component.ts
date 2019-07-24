import { CabinetService } from './../services/cabinet.service';
import { DonationTime } from '../../../../shared/models/donation-time';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabinet-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {

  displayedColumns = ['id', 'point', 'date', 'time', 'record'];

  times: DonationTime[] = [];
  buttonText = 'Записаться';

  constructor(private cabinetService: CabinetService) { }

  ngOnInit() {
    this.cabinetService.getAvailableTimes('123').subscribe(times => {
      this.times = times;
    });
  }

  record(timeId: number) {
    console.log(timeId);
    this.cabinetService.hasRecord.next(true);
    this.times = [{id: '1', pointName: 'Мариинская', pointId: '1', date: new Date('07.20.2019 10:30')} as DonationTime];
    this.buttonText = 'Изменить';
    // this.cabinetService.testSubject
    //   .next({ id: '1', pointName: 'Мариинская', pointId: '1', date: new Date('07.20.2019 10:30') } as DonationTime)
    this.cabinetService.record(timeId, 1).subscribe();
  }

}
