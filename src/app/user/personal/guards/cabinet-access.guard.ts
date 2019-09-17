import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CabinetAccessGuard implements CanActivate {

  constructor(public authService: AuthenticationService, public router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isOnlyBasicAccess && this.authService.isLoggedIn()) {
      return true;
    } else if (this.authService.isOnlyBasicAccess) {
      this.router.navigateByUrl('/user/personal/register');
    } else if (this.authService.isLoggetOut) {
      this.router.navigateByUrl('/user/personal/login');
    }
    return false;
  }
}
