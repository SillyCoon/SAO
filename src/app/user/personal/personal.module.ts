import { AuthInterceptor } from './authentication.interceptor';
import { AuthenticationService } from './services/authentication.service';
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
import { DocumentsFormComponent } from './forms/documents-form/documents-form.component';
import { DonorFormComponent } from './forms/donor-form/donor-form.component';
import { YesNoDialog } from './yes-no-dialog/yes-no-dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecordingComponent } from './cabinet/recording/recording.component';
import { DonationsHistoryComponent } from './cabinet/history/donations-history.component';
import { PrivateInfoComponent } from './cabinet/private-info/private-info.component';
import { CabinetInfoComponent } from './cabinet/cabinet-info/cabinet-info.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    CabinetComponent,
    PersonalComponent,
    BasicInfoFormComponent,
    UnivercityFormComponent,
    DocumentsFormComponent,
    DonorFormComponent,
    YesNoDialog,
    RecordingComponent,
    DonationsHistoryComponent,
    RecordingComponent,
    PrivateInfoComponent,
    CabinetInfoComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MaterialAppModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    YesNoDialog
  ]
})
export class PersonalModule { }
