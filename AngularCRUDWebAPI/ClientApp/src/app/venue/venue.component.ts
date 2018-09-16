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
  isWaiting: Boolean = false;
  
   displayedColumns: string[] = ['id', 'name', 'description', 'select'];

  constructor(private service: VenueService, private router:Router) {
  }
  
  addNew(){
    this.router.navigate(['venue']);
  }

  ngOnInit() {
    this.isWaiting = true;
    this.service.getVenues().subscribe(venues => {
      this.venues = venues;
      this.isWaiting = false;
    })
  }
  
   cancel() {
    this.router.navigate(['home']);
  }

}
