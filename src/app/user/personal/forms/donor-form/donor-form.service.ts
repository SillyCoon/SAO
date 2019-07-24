import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { DropdownElement } from '../../models/dropdown-element';

@Injectable({
  providedIn: 'root'
})
export class DonorFormService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCitizenshipOptions(): Observable<DropdownElement[]> {
    return null;this.http.get<DropdownElement[]>(`${this.baseUrl}citizenships`);
  }

  getWeightOptions(): Observable<DropdownElement[]> {
    return null;this.http.get<DropdownElement[]>(`${this.baseUrl}weights`);
  }

  getRegistrationOptions(): Observable<DropdownElement[]> {
    return null;this.http.get<DropdownElement[]>(`${this.baseUrl}residencies`);
  }
}
