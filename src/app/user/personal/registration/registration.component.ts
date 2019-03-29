import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userInfoForm: FormGroup;
  universityInfoForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userInfoForm = this._formBuilder.group({
      mock: null
    });
  }

  formInitializer(name: string, form: FormGroup) {
    this.userInfoForm.setControl(name, form);
  }
}
