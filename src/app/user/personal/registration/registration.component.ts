import { DonorInfo } from './../models/donor-info';
import { RegistrationService } from '../services/registration.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
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
  // universityInfoForm: FormGroup;
  isBudget = true;
  isLoaded = false;

  constructor(
    private _formBuilder: FormBuilder,
    public educationFormDialog: MatDialog,
    public registrationService: RegistrationService) { }

  ngOnInit() {
    this.userInfoForm = this._formBuilder.group({
      mock: null
    });

    // Костыль для диалогового окна
    Promise.resolve().then(() => { this.openEducationFormDialog(); });
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
      this.isLoaded = true;
    });
  }

  // Так как форма состоит из нескольких, мы каждую пихаем в общую
  formInitializer(name: string, form: FormGroup) {
    this.userInfoForm.setControl(name, form);
  }

  register() {
    const userBasicInfoForm: AbstractControl = this.userInfoForm.get('basicInfo');
    const donorBasicInfoForm: AbstractControl = this.userInfoForm.get('donor');

    if (userBasicInfoForm.valid && donorBasicInfoForm.valid) {

      const donorBasicInfo = donorBasicInfoForm.value;
      const userBasicInfo = userBasicInfoForm.value;
      // Так как FormGroup включает пароль и подтверждение, надо взять только сам пароль
      const password = userBasicInfo.passwordFormGroup.password;
      delete userBasicInfo.passwordFormGroup;

      const donorInfo: DonorInfo = {
        weightId: donorBasicInfo.weight,
        citizenshipId: donorBasicInfo.citizenship,
        ...userBasicInfo,
        password: password
      };
      console.log(donorInfo);

      this.registrationService.sendRegistrationData(donorInfo).subscribe();

    } else {
      this.userInfoForm.markAsDirty();
    }

  }
}
