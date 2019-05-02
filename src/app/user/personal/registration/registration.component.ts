import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { YesNoDialog } from '../yes-no-dialog/yes-no-dialog.component';
import { YesNoDialogData } from '../yes-no-dialog/dialog-data';

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userInfoForm: FormGroup;
  universityInfoForm: FormGroup;
  isBudget = true;

  constructor(
    private _formBuilder: FormBuilder,
    public educationFormDialog: MatDialog,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.userInfoForm = this._formBuilder.group({
      mock: null
    });

    // TODO: Ошибка, лучше от нее потом избавиться
    this.openEducationFormDialog();
  }

  // Проверяем, какой формы обучения студент. Если контрактной, то часть полей он не заполняет
  openEducationFormDialog() {
    const dialogRef = this.educationFormDialog.open(YesNoDialog, {
      width: '250px',
      data: {
        title: 'Небольшая проверка перед регистрацией',
        content: 'Вы являетесь студентом бюджетной формы обучения?',
        confirmation: this.isBudget
      } as YesNoDialogData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isBudget = result;
    });
  }

  formInitializer(name: string, form: FormGroup) {
    this.userInfoForm.setControl(name, form);
  }
}
