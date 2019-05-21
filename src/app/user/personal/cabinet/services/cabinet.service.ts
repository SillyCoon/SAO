import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor() { }

  getAvailableTimes(id: string) {
    return of({date: '', transfusionPoint: ''});
  }

}
