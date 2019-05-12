import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as moment from 'moment';
import { shareReplay, tap } from 'rxjs/operators';
import { Moment } from 'moment';


@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<User> {
    // TODO: shareReplay()
    return this.http.post<User>('http://localhost:3000/users/login', { login, password }).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  private setSession(authResult) {
    const expiresAt = moment().add('10000000000000', 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggetOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): Moment {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

}
