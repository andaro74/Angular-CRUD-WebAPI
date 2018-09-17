import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../models/event.model';
import { IVenue } from '../../models/venue.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VenueService } from '../../venue/venue.service';
import { EntertainerService } from '../../entertainer/entertainer.service';
import { IEntertainer } from '../../models/entertainer.model';
import { ICustomer } from '../../models/customer.model';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  venues: IVenue[];
  entertainers: IEntertainer[];
  customers: ICustomer[];
  id: number = 0;
  formGroup: FormGroup;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(private eventService: EventService,
    private venueService: VenueService,
    private entertainerService: EntertainerService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router) {

    this.formGroup = this.fb.group({       name: ['', Validators.required],       description: ['', Validators.required],       startDate: ['', Validators.required],       photoUrl: [''],       endDate: ['', Validators.required],       venueId: ['', Validators.required],       venues: [],       entertainerId: ['', Validators.required],       entertainers: [],       customerId: ['', Validators.required],       paidAmount: ['0', Validators.required],       totalAmount: ['0', Validators.required]       });
  }

  ngOnInit() {

    this.venueService.getVenues().subscribe(venues => {
      this.venues = venues;
      this.formGroup.controls.venues.setValue(this.venues);
    });

    this.entertainerService.getEntertainers().subscribe(entertainers => {
      this.entertainers = entertainers;
      this.formGroup.controls.entertainers.setValue(this.entertainers);
    });

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.formGroup.controls.customers.setValue(this.customers);
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        return;
      }
      this.getEvent(this.id);
    });
  }

  getEvent(id: number) {
    this.eventService.getEvent(id).subscribe(event => {
      this.event = event;
      this.formGroup.patchValue(this.event);
    });
  }
  

  onSubmit(formValue) {
    this.event = formValue;

    if (!this.id) {
      this.eventService.createEvent(this.event).subscribe(event => {
        this.event = event;
        this.router.navigate(['events']);
      })
    } else {
      this.eventService.updateEvent(this.id, this.event).subscribe(event => {
        console.log("Updated " + this.id);
        this.event = event;
        this.openSnackBar("Saved", "Success");
      });
    }
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
