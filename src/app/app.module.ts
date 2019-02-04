import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AppRoutingModule } from './app-routing.module';

// Material module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { AboutComponent } from './about/about.component';
import { SquadsComponent } from './squads/squads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReportsComponent } from './reports/reports.component';
import { SquadIconComponent } from './squad-icon/squad-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    SquadsComponent,
    GalleryComponent,
    ReportsComponent,
    SquadIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
