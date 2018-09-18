import { Component, OnInit } from '@angular/core';
import { IEvent } from './../models/event.model';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: IEvent[];
  public displayedColumns: string[] = ['id', 'name', 'description', 'startDate', 'totalAmount', 'select']
  isWaiting: Boolean = false;
  constructor(private service:EventService, private router:Router) { }

  ngOnInit() {
    this.isWaiting = true;
    this.service.getEvents().subscribe(events => {
      this.events = events;
      this.isWaiting=false;
    })
  }

  addNew() {
    this.router.navigate(['event']);
  }
}
