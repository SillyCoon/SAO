import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private authService: AuthenticationService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log('submit');
    const val = this.loginForm.value;
    if (val.login && val.password) {
      // this.authService.login(val.login, val.password).subscribe(() => {
      //   console.log('User is loggen in');
      //   this.router.navigateByUrl('/user/personal/cabinet');
      // });
      this.router.navigateByUrl('/user/personal/cabinet');
    }
  }
}
