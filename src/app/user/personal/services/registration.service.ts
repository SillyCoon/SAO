import { DropdownElement } from '../models/dropdown-element';
import { DonorInfo } from '../models/donor-info';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl = 'http://localhost:3000/';

  donorUrl = 'donor-info/';

  constructor(private http: HttpClient) { }

  sendRegistrationData(donorInfo: DonorInfo): Observable<any> {
    return this.http.post<any>(this.baseUrl + this.donorUrl, donorInfo);
  }

  getDonors(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getCitizenships(): Observable<DropdownElement> {
    return this.http.get<DropdownElement>(`${this.baseUrl}citizenships`);
  }

  getRegistration(): Observable<DropdownElement> {
    return this.http.get<DropdownElement>(`${this.baseUrl}citizenships`);
  }

  getWeights(): Observable<DropdownElement> {
    return this.http.get<DropdownElement>(`${this.baseUrl}weights`);
  }
}
