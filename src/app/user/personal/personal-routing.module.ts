import { CabinetAccessGuard } from './guards/cabinet-access.guard';
import { BasicAccessGuard } from './guards/basic-access.guard';
import { PrivateInfoComponent } from './cabinet/private-info/private-info.component';
import { LoginComponent } from './login/login.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { AccessGuard } from './guards/access.guard';
import { RecordingComponent } from './cabinet/recording/recording.component';
import { DonationsHistoryComponent } from './cabinet/history/donations-history.component';
import { CabinetInfoComponent } from './cabinet/cabinet-info/cabinet-info.component';
import { RegistrationAccessGuard } from './guards/registration-access.guard';


const routes: Routes = [
  {
    path: '', component: PersonalComponent, children: [
      {
        path: 'cabinet', component: CabinetComponent, canActivate: [CabinetAccessGuard], children: [
          { path: 'info', component: CabinetInfoComponent },
          { path: 'record', component: RecordingComponent },
          { path: 'private-info', component: PrivateInfoComponent },
          { path: 'donations-history', component: DonationsHistoryComponent },
        ]
      },
      { path: 'register', component: RegistrationComponent, canActivate: [RegistrationAccessGuard] },
      { path: 'login', component: LoginComponent, canActivate: [BasicAccessGuard] }
      // { path: 'about-donation', component: DonationComponent },
      // { path: 'about-event', component: EventComponent },
      // { path: 'recommendations', component: RecommendationsComponent },
      // { path: 'contraindications', component: ContraindsComponent },
      // { path: 'about-us', component: AboutUsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AccessGuard, BasicAccessGuard, RegistrationAccessGuard, CabinetAccessGuard]
})

export class PersonalRoutingModule {

}
