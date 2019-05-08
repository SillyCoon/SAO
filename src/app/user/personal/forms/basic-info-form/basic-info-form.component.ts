import { PasswordErrorStateMatcher } from './error-state-matcher';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'user-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  mainFormGroup: FormGroup;
  matcher = new PasswordErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      email: ['', Validators.email],
      passwordFormGroup: this._formBuilder.group({
        password: ['', Validators.minLength(8)],
        secondPassword: [''],
      }, {
          validator: this.passwordEqualityValidator
        }),
      firstName: ['', Validators.pattern(/[а-яА-я]/)],
      lastName: ['', Validators.pattern(/[а-яА-я]/)],
      patronymic: ['', Validators.pattern(/[а-яА-я]/)],
      phone: ['', [Validators.maxLength(10), Validators.pattern(/\d{10}/)]],
      vk: ['']
    });

    this.formReady.emit(this.mainFormGroup);
  }

  passwordEqualityValidator: ValidatorFn = (fg: FormGroup): ValidationErrors | null => {
    const pass = fg.controls.password.value;
    const confirmPass = fg.controls.secondPassword.value;
    return pass === confirmPass ? null : { notEquals: true };
  }

}

