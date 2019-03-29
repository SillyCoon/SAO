import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'user-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.scss']
})
export class UnivercityFormComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  universityFormGroup: FormGroup;

  institutes = [{ id: 'one', name: 'ИКНТ' }, { id: 'one', name: 'ИКНТ' }, { id: 'one', name: 'ИКНТ' }];

  filteredInstitutes: Observable<any[]>;

  constructor(private _formBuilder: FormBuilder) {

    this.universityFormGroup = this._formBuilder.group({
      studyGroup: ['', Validators.required],
      recordBook: [''],
      institute: [''],
      studyForm: [''],
    });
  }

  ngOnInit() {
    this.formReady.emit(this.universityFormGroup);
    this.filteredInstitutes = this.universityFormGroup.get('institute').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.institutes.filter(institute => institute.name.toLowerCase().includes(filterValue));
  }
}
