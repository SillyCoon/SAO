import { HistoryComponent } from './history/history.component';
import { TimeLoadComponent } from './times/time-load/time-load.component';
import { DonorsComponent } from './donors/donors.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesComponent } from './times/times.component';
import { ConfigsComponent } from './configs/configs.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'donors', component: DonorsComponent },
      {
        path: 'times', component: TimesComponent, children: [
          { path: 'load', component: TimeLoadComponent }
        ]
      },
      { path: 'records', component: RecordsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'configs', component: ConfigsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule {

}
