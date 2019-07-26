import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BasicAccessGuard implements CanActivate {

  constructor(public authService: AuthenticationService, public router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    // console.log(this.authService.isOnlyBasicAccess);

    if (this.authService.isOnlyBasicAccess) {
      this.router.navigateByUrl('/user/personal/register');
      return false;
    } else {
      return true;
    }

  }
}
