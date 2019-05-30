import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { DonationTime } from '../../../../shared/models/donation-time';
import { environment } from 'src/environments/environment';
import { map, timeInterval } from 'rxjs/operators';
import { DonationPoint } from '../models/donation-point';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {


  canDonate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  hasRecord: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) { }

  getLastDonation(donorId?: string): Observable<DonationTime> {
    return of({ id: '1', date: new Date(2019, 3, 1, 0, 0, 0, 0), pointId: '1', pointName: 'Экспоцентр' } as DonationTime)
  }

  getAvailableTimes(donorId?: string): Observable<DonationTime[]> {
    return this.http.get(environment.api.baseUrl + 'records').pipe(
      map((data: any[]) =>
        data.map(record => {
          return {
            id: record.id,
            pointId: record.pointId,
            pointName: record.name,
            date: record.time
          };
        })
      )
    );
  }

  getAvailableDonationPoints(donorId?: string): Observable<DonationPoint[]> {
    return this.http.get(environment.api.baseUrl + 'donation-points').pipe(
      map((points: any[]) => {
        return points.map(point => {
          return { ...point } as DonationPoint;
        });
      })
    );
  }

  getDonationsHistory(donorId?: string): Observable<DonationTime[]> {
    return this.http.get(environment.api.baseUrl + 'records').pipe(
      map((data: any[]) =>
        data.map(record => {
          return {
            id: record.id,
            pointId: record.pointId,
            pointName: record.name,
            date: record.time
          };
        })
      )
    );
  }

  getDonationsQuantity(donorId?: string): Observable<number> {
    return of(3);
  }


  // Error handler если все места уже заняты
  record(timeId: number, donorId?: number) {
    return this.http.post(environment.api.baseUrl + 'donor-times', { donorId, donationTimeId: timeId });
  }

}
