import { HttpClient } from '@angular/common/http';
import { MaterialAppModule } from './../ngmaterial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DonorsComponent } from './donors/donors.component';
import { TimesComponent } from './times/times.component';
import { PointsComponent } from './points/points.component';
import { TimeLoadComponent } from './times/time-load/time-load.component';
import { EditableRowComponent } from './editable-row/editable-row.component';

@NgModule({
  declarations: [AdminComponent, DonorsComponent, TimesComponent, PointsComponent, TimeLoadComponent, EditableRowComponent],
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
