import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
    imports:
        [
            MatButtonModule,
            MatToolbarModule,
            MatIconModule
        ],
    exports:
        [
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
        ]
})
export class MaterialAppModule { }
