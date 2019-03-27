import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  mainFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: [''],
      secondPassword: [''],
      name: [''],
      surname: [''],
      patronymic: [''],
      phone: [''],
      vk: [''],
      isBudget: [''],
      institute: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
