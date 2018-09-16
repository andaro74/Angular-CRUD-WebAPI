import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { VenueComponent } from './venue.component';
import { VenueService } from './venue.service';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    //FormBuilder,
    ReactiveFormsModule,
    //Validators,
    MaterialModule
  ],
  declarations: [VenueComponent, VenueDetailComponent],
  providers: [VenueService],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //FormBuilder,
    //Validators,
    MaterialModule]
})
export class VenueModule { }
