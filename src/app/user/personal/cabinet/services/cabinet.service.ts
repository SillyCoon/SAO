import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of, BehaviorSubject, Subject } from 'rxjs';
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

  testSubject: Subject<DonationTime> = new Subject();

  obsTest = this.testSubject.asObservable();

  constructor(private http: HttpClient) { }

  getLastDonation(donorId?: string): Observable<DonationTime> {
    return of({ id: '1', date: new Date('04.11.2019 11:30'), pointId: '1', pointName: 'Экспоцентр' } as DonationTime)
  }

  getAvailableTimes(donorId?: string): Observable<DonationTime[]> {
    return of([
      {id: '1', pointName: 'Мариинская', pointId: '1', date: new Date('07.20.2019 10:30')} as DonationTime,
      {id: '2', pointName: 'Первый мед', pointId: '2', date: new Date('07.20.2019 11:30')} as DonationTime,
      {id: '3', pointName: 'Экспоцентр', pointId: '1', date: new Date('07.21.2018 8:30')} as DonationTime,
    ] as DonationTime[]
  );
    // return this.http.get(environment.api.baseUrl + 'records').pipe(
    //   map((data: any[]) =>
    //     data.map(record => {
    //       return {
    //         id: record.id,
    //         pointId: record.pointId,
    //         pointName: record.name,
    //         date: record.time
    //       };
    //     })
    //   )
    // );
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
