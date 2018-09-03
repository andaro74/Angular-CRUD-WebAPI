import { Component, OnInit } from '@angular/core';
import { IVenue } from '../models/venue.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  public venue: IVenue;

  constructor() {
    this.venue = {
      id: 1,
      description: "Concert Hall",
      contactInfo: {
        firstname: "",
        lastname: "",
        website: "hollywoodbowl.com",
        businessName: "Hollywood Bowl",
        phone: "(323) 850-2000",
        email: "contact@hollywoodbowl.com",
        address: {
          street: "2301 N Highland Ave",
          city: "Los Angeles",
          state: "CA",
          zip: "90068",
          country: "USA"
        }
      }
    
    };
    
  }

  ngOnInit() {

  }

}
