import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  mainFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.mainFormGroup = this._formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      secondPassword: ['', Validators.minLength(8)],
      name: ['', Validators.pattern(/[а-яА-я]/)],
      surname: ['', Validators.pattern(/[а-яА-я]/)],
      patronymic: ['', Validators.pattern(/[а-яА-я]/)],
      phone: ['', [Validators.maxLength(10), Validators.pattern(/\d{10}/)]],
      vk: ['']
    });
  }

  ngOnInit() {
    this.formReady.emit(this.mainFormGroup);
  }



}
