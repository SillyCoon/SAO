import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      // { path: 'welcome', component: WelcomeComponent },
      // { path: 'personal', loadChildren: './personal/personal.module#PersonalModule' },
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
