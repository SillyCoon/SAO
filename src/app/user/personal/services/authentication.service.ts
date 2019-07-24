import { WellKnownRoles } from './../login/model/well-known-roles';
import { BaseUser } from './../login/model/base-user';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { SessionService } from './session.service';


@Injectable()
export class AuthenticationService {

  public userContext: User;

  private readonly baseUrl = environment.api.baseUrl;
  private loginPath = this.baseUrl + environment.api.auth.login;
  private basicRegistrationPath = this.baseUrl + environment.api.auth.basicRegistration;

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  /**
   * Регистрирует пользователя или входит в лк
   * @param user имя пользователя и пароль
   * @param isFirstTime базовая регистрация или логин
   */
  login(user: BaseUser, isFirstTime: boolean): Observable<string> {

    const path = isFirstTime ? this.basicRegistrationPath : this.loginPath;
    return this.http.post(path, user, { responseType: 'text' }).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }

  private setSession(token: string) {
    const decoded = jwt_decode(token);
    const user: User = {
      id: decoded.userId,
      username: decoded.username,
      roles: [decoded.roles]
    };

    console.log(user);
    this.userContext = user;
    localStorage.setItem('id_token', token);
    localStorage.setItem('expires_at', decoded.exp);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
  }

  public isLoggedIn = (): boolean =>
    this.getExpiration() >= Date.now() ? true : false;


  public isLoggetOut = (): boolean => !this.isLoggedIn;

  public isOnlyBasicAccess = (): boolean => {
    return this.userContext.roles.includes(WellKnownRoles.basic) ? true : false;
  }

  private getExpiration(): number {
    const expiresAt = +localStorage.getItem('expires_at');
    return expiresAt * 1000;
  }



}
