import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-documents-form',
  templateUrl: './documents-form.component.html',
  styleUrls: ['./documents-form.component.scss']
})
export class DocumentsFormComponent implements OnInit {

  documentsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
