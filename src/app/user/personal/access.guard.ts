import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccessGuard implements CanActivate {

  constructor(public authService: AuthenticationService, public router: Router) { }

  canActivate(): Observable<boolean> | boolean {

    // if (this.authService.isLoggetOut()) {
    //   this.router.navigate(['login']);
    //   return false;
    // } else {
      return true;
    // }
  }
}
