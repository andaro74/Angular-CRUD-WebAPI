import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue.component';
import { VenueService } from './venue.service';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VenueComponent, VenueDetailComponent],
  providers: [VenueService]
})
export class VenueModule { }
