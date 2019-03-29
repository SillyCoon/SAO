import { PersonalRoutingModule } from './personal-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialAppModule } from 'src/app/ngmaterial.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CabinetComponent } from './cabinet/cabinet.component';
import { PersonalComponent } from './personal.component';
import { BasicInfoFormComponent } from './forms/basic-info-form/basic-info-form.component';
import { UnivercityFormComponent } from './forms/university-form/university-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    CabinetComponent,
    PersonalComponent,
    BasicInfoFormComponent,
    UnivercityFormComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MaterialAppModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PersonalModule { }
