import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainerDetailComponent } from './entertainer-detail/entertainer-detail.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EntertainerComponent } from './entertainer.component';
import { EntertainerService } from './entertainer.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    EntertainerComponent,
    EntertainerDetailComponent
  ],
  providers: [EntertainerService],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class EntertainerModule { }
