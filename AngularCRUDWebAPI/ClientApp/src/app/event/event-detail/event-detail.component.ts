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
import { Local } from '../../../../node_modules/protractor/built/driverProviders';

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
  minDate = new Date();
  maxDate = new Date(2020, 0, 1);
  isWaiting: Boolean = false;

  constructor(private eventService: EventService,
    private venueService: VenueService,
    private entertainerService: EntertainerService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router) {

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      startTime: ['10:30', Validators.required],
      photoUrl: [''],
      endDate: [new Date(), Validators.required],
      endTime: ['12:30', Validators.required],
      venueId: ['', Validators.required],
      entertainerId: ['', Validators.required],
      customerId: ['', Validators.required],
      paidAmount: ['0', Validators.required],
      totalAmount: ['0', Validators.required]
      });
  }

  ngOnInit() {
    this.isWaiting=true;
    this.venueService.getVenues().subscribe(venues => {
      this.venues = venues;
    });

    this.entertainerService.getEntertainers().subscribe(entertainers => {
      this.entertainers = entertainers;
    });

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
        if (!this.id) {
        this.isWaiting=false;
        return;
      }
      this.getEvent(this.id);
    });
  }

  getEvent(id: number) {
    this.eventService.getEvent(id).subscribe(event => {
      this.event = event;

      this.formGroup.patchValue(this.event);
      var startHourMinutes=this.getTimeFromDate(event.startDate);
      this.formGroup.controls["startTime"].setValue(startHourMinutes);

      var endHourMinutes=this.getTimeFromDate(event.endDate);
        this.formGroup.controls["endTime"].setValue(endHourMinutes);
        this.isWaiting=false;
    });
  }
  

  onSubmit(formValue) {
    console.log(formValue);
    this.event = formValue;
    this.event.startDate = this.updateDateWithTime(formValue.startTime, formValue.startDate);
    this.event.endDate = this.updateDateWithTime(formValue.endTime, formValue.endDate);

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

 updateDateWithTime(timeValue:string, dateValue:String):Date {
        
    var timeComponents=timeValue.split(":");
    var hour=+timeComponents[0];
     var indexOfColon=dateValue.toString().indexOf(':');

     var firstPartDate=dateValue.toString().substring(0,indexOfColon-2);
     var secondPartDate=dateValue.toString().substring(indexOfColon+3);


    var modDate= firstPartDate + timeValue + secondPartDate;
    return new Date(modDate);
}

 getTimeFromDate(dateValue: Date):String {

    var dateTimeValue=new Date(dateValue);
    var timeOffsetInHR:number = dateTimeValue.getTimezoneOffset() / 60;

     var indexOfT=dateValue.toString().indexOf('T');
     var hourMinutes= dateValue.toString().substr(indexOfT+1);

     var localHour=+hourMinutes.substring(0,2) - timeOffsetInHR;
     if (localHour < 0) {
         localHour=24+localHour;
     }

     hourMinutes=localHour.toString().padStart(2, "0") + hourMinutes.substring(2);
     return hourMinutes;
   }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
