import { DonorInfo } from './../models/donor-info';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  sendRegistrationData(donorInfo: DonorInfo): Observable<any> {
    return this.http.post<any>('http://localhost:3000/donor-info/', donorInfo);
  }
}
