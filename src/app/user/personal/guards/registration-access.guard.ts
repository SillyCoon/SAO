import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationAccessGuard implements CanActivate {

  constructor(public authService: AuthenticationService, public router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isOnlyBasicAccess) {
      return true;
    }
    return false;
  }
}
