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

  getCitizenships(): Observable<DropdownElement[]> {
    return this.http.get<DropdownElement[]>(`${this.baseUrl}citizenships`);
  }

  getWeights(): Observable<DropdownElement[]> {
    return this.http.get<DropdownElement[]>(`${this.baseUrl}weights`);
  }
}
