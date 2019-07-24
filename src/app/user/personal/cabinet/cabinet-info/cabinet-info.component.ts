import { Observable } from 'rxjs';
import { DonationTime } from '../../../../shared/models/donation-time';
import { CabinetService } from './../services/cabinet.service';
import { DonationPoint } from './../models/donation-point';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet-info',
  templateUrl: './cabinet-info.component.html',
  styleUrls: ['./cabinet-info.component.scss']
})
export class CabinetInfoComponent implements OnInit {

  points: DonationPoint[];
  lastDonation: DonationTime;
  daysPassed: number = 40;
  canDonate: boolean;
  donationsCounter: number;

  hasRecord$: Observable<boolean>;

  constructor(private cabinetService: CabinetService) { }

  ngOnInit() {
    this.loadAvailablePoints('123');
    this.loadLastDonation('123');
    this.loadDonationsQuantity('123');
    this.hasRecord$ = this.cabinetService.hasRecord.asObservable();
  }

  loadDonationsQuantity(donorId: string) {
    this.cabinetService.getDonationsQuantity(donorId).subscribe(quantity => {
      this.donationsCounter = quantity;
    });
  }

  loadAvailablePoints(donorId: string) {
    this.cabinetService.getAvailableDonationPoints(donorId).subscribe(points => {
      this.points = points;
    });
  }

  loadLastDonation(donorId: string) {
    this.cabinetService.getLastDonation(donorId).subscribe(donation => {
      this.lastDonation = donation;
      // this.daysPassed = Math.trunc((new Date() - donation.date) / 1000 / 60 / 60 / 24); // Миллисекунды в дни
      this.canDonate = this.daysPassed >= 60 ? true : false;
    });
  }


}
