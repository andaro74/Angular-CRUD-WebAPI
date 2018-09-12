import { Component, OnInit } from '@angular/core';
import { IVenue } from '../../models/venue.model';
import { VenueService } from '../venue.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MaterialModule } from './../../modules/material.module';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
  venue: IVenue;
  id:number=0;
  constructor(private service:VenueService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
  this.venue=<IVenue>{};
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      
      if (this.id===0){
      return;
      }
      this.getVenue(this.id);
    });

  }

  getVenue(id: number) {
    this.service.getVenue(id).subscribe(venue => {
      this.venue = venue;
    })
  }

  onSubmit() {
    if (this.id===0){
      this.service.createVenue(this.venue).subscribe(venue=> {
        this.venue = venue;
        
      })
    }else {
  
    this.service.updateVenue(this.venue).subscribe(venue => {
      console.log("Updated " + venue.id);
      this.venue = venue;
    });
    
    
    }
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}
