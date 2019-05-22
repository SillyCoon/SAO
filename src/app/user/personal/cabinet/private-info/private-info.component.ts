import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DonorInfo } from '../../models/donor-info';

@Component({
  selector: 'cabinet-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss']
})
export class PrivateInfoComponent implements OnInit {

  userInfoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public educationFormDialog: MatDialog) { }

  ngOnInit() {
    this.userInfoForm = this._formBuilder.group({
      mock: null
    });
  }

  formInitializer(name: string, form: FormGroup) {
    this.userInfoForm.setControl(name, form);
  }


  // TODO: Переделать на подтверждение изменений, а не регистрацию
  onSubmit() {
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

      // this.registrationService.sendRegistrationData(donorInfo).subscribe();

    } else {
      this.userInfoForm.markAsDirty();
    }

  }

}
