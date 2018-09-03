import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue.component';
import { VenueService } from './venue.service';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [VenueComponent, VenueDetailComponent],
  providers: [VenueService],
  exports: [RouterModule]
})
export class VenueModule { }
