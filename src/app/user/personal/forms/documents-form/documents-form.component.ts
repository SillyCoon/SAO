import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-documents-form',
  templateUrl: './documents-form.component.html',
  styleUrls: ['./documents-form.component.scss']
})
export class DocumentsFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  documentsFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.documentsFormGroup = this._formBuilder.group({
      passSeries: ['', Validators.minLength(4)],
      passNumber: ['', Validators.minLength(6)],
      issuePlace: ['', Validators.minLength(8)],
      issueDate: [''],
      registrationAdress: [''],
      SNILS: ['', [Validators.pattern(/^\d{3}-\d{3}-\d{3}-\d{2}$/), Validators.minLength(10)]],
      INN: ['', [Validators.pattern(/0-9\-/)]]
    });

    this.formReady.emit(this.documentsFormGroup);
  }

}
