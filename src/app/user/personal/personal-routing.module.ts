import { LoginComponent } from './login/login.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';


const routes: Routes = [
  {
    path: '', component: PersonalComponent, children: [
      { path: 'cabinet', component: CabinetComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
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
})

export class PersonalRoutingModule {

}
