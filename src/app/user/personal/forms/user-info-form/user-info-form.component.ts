import { PasswordErrorStateMatcher } from './error-state-matcher';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss']
})
export class UserInfoFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  userInfoFormGroup: FormGroup;
  matcher = new PasswordErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.userInfoFormGroup = this._formBuilder.group({
      email: ['ahtunget@gmail.com', Validators.email],
      passwordFormGroup: this._formBuilder.group({
        password: ['12345678', Validators.minLength(8)],
        secondPassword: ['12345678'],
      }, {
          validator: this.passwordEqualityValidator
        })
    });
  }

  passwordEqualityValidator: ValidatorFn = (fg: FormGroup): ValidationErrors | null => {
    const pass = fg.controls.password.value;
    const confirmPass = fg.controls.secondPassword.value;
    return pass === confirmPass ? null : { notEquals: true };
  }
}
