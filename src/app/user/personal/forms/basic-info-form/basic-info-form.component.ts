import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordEqualityValidator } from 'src/app/shared/confirm-equal-validator.directive';

@Component({
  selector: 'user-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  mainFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      email: ['', Validators.email],
      passwordFormGroup: this._formBuilder.group({
        password: ['', Validators.minLength(8)],
        secondPassword: ['', Validators.minLength(8)],
      }, {
          validator: PasswordEqualityValidator
        }),
      firstName: ['', Validators.pattern(/[а-яА-я]/)],
      lastName: ['', Validators.pattern(/[а-яА-я]/)],
      patronymic: ['', Validators.pattern(/[а-яА-я]/)],
      phone: ['', [Validators.maxLength(10), Validators.pattern(/\d{10}/)]],
      vk: ['']
    });

    this.formReady.emit(this.mainFormGroup);
  }

}
