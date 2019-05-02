import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { YesNoDialogData } from './dialog-data';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: 'yes-no-dialog.component.html',
})

// tslint:disable-next-line: component-class-suffix
export class YesNoDialog {

  constructor(
    public dialogRef: MatDialogRef<YesNoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogData) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
