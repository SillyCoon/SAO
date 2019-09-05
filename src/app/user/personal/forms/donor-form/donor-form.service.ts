import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { DropdownElement } from '../../models/dropdown-element';
import { WellKnownRoles } from '../../login/model/well-known-roles';

@Injectable({
  providedIn: 'root'
})
export class DonorFormService {

  baseUrl = 'http://localhost:3000/role-option/';

  constructor(private http: HttpClient) { }

  getCitizenshipOptions(): Observable<DropdownElement[]> {
    return this.http.get<DropdownElement[]>(this.baseUrl + WellKnownRoles.citizen);
  }

  getRegistrationOptions(): Observable<DropdownElement[]> {
    return this.http.get<DropdownElement[]>(this.baseUrl + WellKnownRoles.resident);
  }

  getWeightOptions(): Observable<DropdownElement[]> {
    return this.http.get<DropdownElement[]>(this.baseUrl + WellKnownRoles.weight);
  }
}
