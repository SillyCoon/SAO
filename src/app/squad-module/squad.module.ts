import { SquadRoutingModule } from './squad-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadIconComponent } from './squad-icon/squad-icon.component';
import { SquadsComponent } from './squads/squads.component';

@NgModule({
  declarations: [
    SquadIconComponent,
    SquadsComponent
  ],
  imports: [
    CommonModule,
    SquadRoutingModule
  ]
})
export class SquadModule { }
