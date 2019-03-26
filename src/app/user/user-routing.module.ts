import { AboutUsComponent } from './about-us/about-us.component';
import { EventComponent } from './event/event.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DonationComponent } from './donation/donation.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContraindsComponent } from './contrainds/contrainds.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'welcome', component: WelcomeComponent },
      //{ path: 'personal', loadChildren: './personal/personal.module#PersonalModule' },
      { path: 'about-donation', component: DonationComponent },
      { path: 'about-event', component: EventComponent },
      { path: 'recommendations', component: RecommendationsComponent },
      { path: 'contraindications', component: ContraindsComponent },
      { path: 'about-us', component: AboutUsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule {

}
