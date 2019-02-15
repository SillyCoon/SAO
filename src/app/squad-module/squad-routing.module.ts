import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquadsComponent } from './squads/squads.component';

const routes: Routes = [
  { path: '', component: SquadsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquadRoutingModule { }
