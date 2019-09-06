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

  constructor(private _formBuilder: FormBuilder) {

  }

  // TODO: Отображение лейблов у вк и телефона смещено вправо

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      firstName: ['Алексей', Validators.pattern(/[а-яА-я]/)],
      lastName: ['Иванов', Validators.pattern(/[а-яА-я]/)],
      patronymic: ['Анатольевич', Validators.pattern(/[а-яА-я]/)],
      phone: ['9062683961', [Validators.maxLength(10), Validators.pattern(/\d{10}/)]],
      vk: ['brother_of_cola'] // TODO: валидатор для VK
    });

    this.formReady.emit(this.mainFormGroup);
  }


}

