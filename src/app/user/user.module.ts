import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserToolbarComponent } from './user-toolbar/user-toolbar.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DonationComponent } from './donation/donation.component';
import { EventComponent } from './event/event.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContraindsComponent } from './contrainds/contrainds.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    UserComponent,
    UserToolbarComponent,
    WelcomeComponent,
    DonationComponent,
    EventComponent,
    RecommendationsComponent,
    ContraindsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialAppModule
  ]
})
export class UserModule { }
