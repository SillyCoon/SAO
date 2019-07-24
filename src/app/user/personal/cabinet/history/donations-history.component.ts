import { DonationHistory } from './../models/donation-history';
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

  history = [
    {id: '1', pointName: 'Экспоцентр', pointId: '1', date: new Date('04.11.2019 11:30')} as DonationHistory,
    {id: '2', pointName: 'Первый мед', pointId: '2', date: new Date('01.05.2019 11:30')} as DonationHistory,
    {id: '3', pointName: 'Экспоцентр', pointId: '1', date: new Date('08.11.2018 10:30')} as DonationHistory,
  ];

  times: DonationTime[] = [];

  constructor(private cabinetService: CabinetService) { }

  ngOnInit() {
    this.cabinetService.getDonationsHistory('123').subscribe(donations => {
      this.times = donations;
    });
  }

  getTotalDonations() {
    return this.history.length;
  }

}
