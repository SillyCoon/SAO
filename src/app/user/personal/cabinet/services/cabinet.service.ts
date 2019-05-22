import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DonationTime } from '../../models/donation-time';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor(private http: HttpClient) { }

  getAvailableTimes(donorId?: string): Observable<DonationTime[]> {
    return of([
      { id: '1', point: 'Экспоцентр', date: new Date('2018-03-16 11:30') } as DonationTime,
      { id: '2', point: 'Кек лол кто я вообще', date: new Date('2018-03-17 11:30') } as DonationTime,
      { id: '3', point: '1 мед', date: new Date('2018-03-16 11:30') } as DonationTime
    ]);
  }

  getDonationsHistory(donorId?: string): Observable<DonationTime[]> {
    return of([
      { id: '1', point: 'Экспоцентр', date: new Date('2018-03-16 11:30') } as DonationTime,
      { id: '2', point: '31', date: new Date('2018-03-17 11:30') } as DonationTime,
      { id: '3', point: '1 мед', date: new Date('2018-03-16 11:30') } as DonationTime
    ]);
  }

  record(timeId: string, donorId?: string) {
    return of();
  }

}
