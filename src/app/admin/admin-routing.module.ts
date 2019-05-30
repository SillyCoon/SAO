import { TimeLoadComponent } from './times/time-load/time-load.component';
import { DonorsComponent } from './donors/donors.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'donors', component: DonorsComponent},
    {path: 'times', component: TimesComponent, children: [
      {path: 'load', component: TimeLoadComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {

}
