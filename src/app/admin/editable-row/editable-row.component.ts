import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'app-editable-row',
  templateUrl: './editable-row.component.html',
  styleUrls: ['./editable-row.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableRowComponent),
      multi: true
    }
  ]
})
export class EditableRowComponent implements OnInit, ControlValueAccessor {


  isEditable: boolean;

  @Input() value;
  @Input() set editable(value: boolean) {
    this.isEditable = value;
  }

  control: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
    this.control.setValue(this.value);
  }

  writeValue(value: string): void {
    this.control.setValue(value);
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
