import { HttpClient } from '@angular/common/http';
import { MaterialAppModule } from './../ngmaterial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DonorsComponent } from './donors/donors.component';
import { TimesComponent } from './times/times.component';
import { TimeLoadComponent } from './times/time-load/time-load.component';
import { EditableRowComponent } from './editable-row/editable-row.component';
import { ConfigsComponent } from './configs/configs.component';
import { DocumentsComponent } from './configs/documents/documents.component';
import { UserRolesComponent } from './configs/user-roles/user-roles.component';
import { DonationPointsComponent } from './configs/donation-points/donation-points.component';
import { RecordsComponent } from './records/records.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AdminComponent,
    DonorsComponent,
    TimesComponent,
    TimeLoadComponent,
    EditableRowComponent,
    ConfigsComponent,
    DocumentsComponent,
    UserRolesComponent,
    DonationPointsComponent,
    RecordsComponent,
    HistoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAppModule
  ],
  providers: [
    HttpClient
  ]
})
export class AdminModule { }
