import { WellKnownRoles } from './../login/model/well-known-roles';
import { DropdownElement } from '../models/dropdown-element';
import { DonorInfo } from '../models/donor-info';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {

  baseUrl = 'http://localhost:3000/';

  donorUrl = 'auth/registration';

  roleOptionsUrl = 'role-option/';

  constructor(private http: HttpClient) { }

  sendRegistrationData(donorInfo: DonorInfo): Observable<any> {
    return this.http.post<any>(this.baseUrl + this.donorUrl, donorInfo);
  }

  getDonors(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
