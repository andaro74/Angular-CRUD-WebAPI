import { Component, OnInit } from '@angular/core';
import { IVenue } from '../../models/venue.model';
import { VenueService } from '../venue.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})
export class VenueDetailComponent implements OnInit {
  venue: IVenue;
  id: number = 0;
  venueForm: FormGroup; //reprents the form that is displayed.

  constructor(private service: VenueService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) {
    this.venue = <IVenue>{};
    this.venueForm = fb.group({
      'name': [this.venue.name, Validators.required],
      'description': [this.venue.description, Validators.required],
      'website': [this.venue.website],
      'phone': [this.venue.phone],
      'email': [this.venue.email, Validators.email],
      'contactFirstName': [this.venue.contactFirstName, Validators.required],
      'contactLastName': [this.venue.contactLastName, Validators.required],
      'photoUrl': [this.venue.photoUrl],
      'street': [this.venue.street, Validators.required],
      'city': [this.venue.city, Validators.required],
      'state': [this.venue.state, Validators.required],
      'zip': [this.venue.zip, Validators.required],
      'country': [this.venue.country, Validators.required]
    });
  }

  ngOnInit() {
    this.venue = <IVenue>{};
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        return;
      }
      this.getVenue(this.id);
    });

  }

  getVenue(id: number) {
    this.service.getVenue(id).subscribe(venue => {
      this.venue = venue;
      this.venueForm.controls['name'].setValue(this.venue.name);
      this.venueForm.controls['description'].setValue(this.venue.description);
      this.venueForm.controls['website'].setValue(this.venue.website);
      this.venueForm.controls['phone'].setValue(this.venue.phone);
      this.venueForm.controls['email'].setValue(this.venue.email);
      this.venueForm.controls['contactFirstName'].setValue(this.venue.contactFirstName);
      this.venueForm.controls['contactLastName'].setValue(this.venue.contactLastName);
      this.venueForm.controls['photoUrl'].setValue(this.venue.photoUrl);
      this.venueForm.controls['street'].setValue(this.venue.street);
      this.venueForm.controls['city'].setValue(this.venue.city);
      this.venueForm.controls['state'].setValue(this.venue.state);
      this.venueForm.controls['zip'].setValue(this.venue.zip);
      this.venueForm.controls['country'].setValue(this.venue.country);

    })
  }

  onSubmit() {
    this.venue.name = this.venueForm.controls['name'].value;
    this.venue.description = this.venueForm.controls['description'].value;
    this.venue.website = this.venueForm.controls['website'].value;
    this.venue.phone = this.venueForm.controls['phone'].value;
    this.venue.email = this.venueForm.controls['email'].value;
    this.venue.contactFirstName = this.venueForm.controls['contactFirstName'].value;
    this.venue.contactLastName = this.venueForm.controls['contactLastName'].value;
    this.venue.photoUrl = this.venueForm.controls['photoUrl'].value;
    this.venue.street = this.venueForm.controls['street'].value;
    this.venue.city = this.venueForm.controls['city'].value;
    this.venue.state = this.venueForm.controls['state'].value;
    this.venue.zip = this.venueForm.controls['zip'].value;
    this.venue.country = this.venueForm.controls['country'].value;
  
    if (!this.id) {
      this.service.createVenue(this.venue).subscribe(venue => {
        this.venue = venue;
      })
    } else
    {
      this.service.updateVenue(this.id, this.venue).subscribe(venue => {
        console.log("Updated " + this.id);
        this.venue = venue;
      });
    }
    this.location.back();
  }



}
