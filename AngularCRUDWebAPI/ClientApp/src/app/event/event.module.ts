import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventComponent, EventDetailComponent]
})
export class EventModule { }
