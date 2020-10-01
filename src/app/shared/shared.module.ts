import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [GlobalLoaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports:[
    GlobalLoaderComponent
  ]
})
export class SharedModule { }
