import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.scss']
})
export class DonorFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  donorFormGroup: FormGroup;

  weights = [
    { id: 1, text: 'Больше 58 килограмм' },
    { id: 2, text: 'От 50 до 58 кг' }
  ];

  citizenships = [
    { id: 1, text: 'Российское' },
    { id: 2, text: 'Другой страны' }
  ];

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.donorFormGroup = this._formBuilder.group({
      weight: [''],
      citizenship: ['']
    });

    this.formReady.emit(this.donorFormGroup);
  }
}
