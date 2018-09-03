import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue.component';
import { VenueService } from './venue.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VenueComponent],
  providers: [VenueService]
})
export class VenueModule { }
