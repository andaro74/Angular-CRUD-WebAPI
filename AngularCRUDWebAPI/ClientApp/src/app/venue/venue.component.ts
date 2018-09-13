import { Component, OnInit } from '@angular/core';
import { IVenue } from '../models/venue.model';
import { VenueService } from './venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  public venues: IVenue[];
  
   displayedColumns: string[] = ['id', 'name', 'description', 'select'];

  constructor(private service: VenueService, private router:Router) {
    //this.venue = {
    //  id: 1,
    //  name: "Hollywood Bowl",
    //  description: "Concert Hall",
    //  website: "hollywoodbowl.com",
    //  phone: "(323) 850-2000",
    //  email: "contact@hollywoodbowl.com",
    //  street: "2301 N Highland Ave",
    //  city: "Los Angeles",
    //  state: "CA",
    //   zip: "90068",
    //  country: "USA",
    //  photoUrl:""
    //};

  }
  
  addNew(){
    this.router.navigate(['venue']);
  }

  ngOnInit() {
    this.service.getVenues().subscribe(venues => {
      this.venues = venues;
    })
  }
  
   cancel() {
    this.router.navigate(['home']);
  }

}
