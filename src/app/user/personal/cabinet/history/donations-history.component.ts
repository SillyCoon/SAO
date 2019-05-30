import { CabinetService } from './../services/cabinet.service';
import { Component, OnInit } from '@angular/core';
import { DonationTime } from '../../../../shared/models/donation-time';

@Component({
  selector: 'cabinet-donations-history',
  templateUrl: './donations-history.component.html',
  styleUrls: ['./donations-history.component.scss']
})
export class DonationsHistoryComponent implements OnInit {

  displayedColumns = ['id', 'point', 'date', 'time'];

  times: DonationTime[] = [];

  constructor(private cabinetService: CabinetService) { }

  ngOnInit() {
    this.cabinetService.getDonationsHistory('123').subscribe(donations => {
      this.times = donations;
    });
  }

  getTotalDonations() {
    return this.times.length;
  }

}
