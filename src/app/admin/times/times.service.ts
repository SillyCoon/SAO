import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DonationTime } from 'src/app/shared/models/donation-time';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private http: HttpClient) { }

  getTimes(): Observable<DonationTime[]> {
    return this.http.get(environment.api.baseUrl + 'records').pipe(
      map((data: any[]) =>
        data.map(record => {
          return {
            id: record.id,
            pointId: record.pointId,
            pointName: record.name,
            date: record.time,
            donorsQuantity: record.donors_quantity,
            isStopped: record.is_stopped
          };
        })
      )
    );
  }
}
