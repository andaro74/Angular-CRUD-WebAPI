import { Component, OnInit } from '@angular/core';
import { IEntertainer } from '../../models/entertainer.model';
import { EntertainerService } from '../entertainer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entertainer-detail',
  templateUrl: './entertainer-detail.component.html',
  styleUrls: ['./entertainer-detail.component.css']
})
export class EntertainerDetailComponent implements OnInit {
  entertainer: IEntertainer;
  id: number = 0;
  formGroup: FormGroup; 

  constructor(private service: EntertainerService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public snackBar: MatSnackBar) {

    this.entertainer = <IEntertainer>{};
    this.formGroup = this.fb.group({
      'businessName': [this.entertainer.businessName, Validators.required],
      'description': [this.entertainer.description, Validators.required],
      'website': [this.entertainer.website],
      'phone': [this.entertainer.phone],
      'email': [this.entertainer.email, Validators.email],
      'firstName': [this.entertainer.firstName, Validators.required],
      'lastName': [this.entertainer.lastName, Validators.required],
      'photoUrl': [this.entertainer.photoUrl],
      'street': [this.entertainer.street, Validators.required],
      'city': [this.entertainer.city, Validators.required],
      'state': [this.entertainer.state, Validators.required],
      'zip': [this.entertainer.zip, Validators.required],
      'country': [this.entertainer.country, Validators.required]
    });
  }

    ngOnInit() {
     
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        if (!this.id) {
          return;
        }
        this.getEntertainer(this.id);
      });
    }

    getEntertainer(id: number) {
      this.service.getEntertainer(id).subscribe(entertainer => {
        this.entertainer = entertainer;
        this.formGroup.patchValue(this.entertainer);
      })
  }

  onSubmit() {
    this.entertainer = this.formGroup.value;


    //this.venue.name = this.venueForm.controls['name'].value;
    //this.venue.description = this.venueForm.controls['description'].value;
    //this.venue.website = this.venueForm.controls['website'].value;
    //this.venue.phone = this.venueForm.controls['phone'].value;
    //this.venue.email = this.venueForm.controls['email'].value;
    //this.venue.contactFirstName = this.venueForm.controls['contactFirstName'].value;
    //this.venue.contactLastName = this.venueForm.controls['contactLastName'].value;
    //this.venue.photoUrl = this.venueForm.controls['photoUrl'].value;
    //this.venue.street = this.venueForm.controls['street'].value;
    //this.venue.city = this.venueForm.controls['city'].value;
    //this.venue.state = this.venueForm.controls['state'].value;
    //this.venue.zip = this.venueForm.controls['zip'].value;
    //this.venue.country = this.venueForm.controls['country'].value;

    if (!this.id) {
      this.service.createEntertainer(this.entertainer).subscribe(entertainer => {
        this.entertainer = entertainer;
      })
    } else {
      this.service.updateEntertainer(this.id, this.entertainer).subscribe(entertainer => {
        console.log("Updated " + this.id);
        this.entertainer = entertainer;
      });
    }
    this.openSnackBar("Saved", "Success");
    //this.location.back();
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
