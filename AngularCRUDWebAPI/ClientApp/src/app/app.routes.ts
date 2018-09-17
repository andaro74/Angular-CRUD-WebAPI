import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue.component';
import { VenueDetailComponent } from './venue/venue-detail/venue-detail.component';
import { EntertainerDetailComponent } from './entertainer/entertainer-detail/entertainer-detail.component';
import { EntertainerComponent } from './entertainer/entertainer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'venues', component: VenueComponent },
  { path: 'venues/:id', component: VenueDetailComponent },
  { path: 'venue', component: VenueDetailComponent },
  { path: 'entertainers', component: EntertainerComponent },
  { path: 'entertainers/:id', component: EntertainerDetailComponent },
  { path: 'entertainer', component: EntertainerDetailComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'customer', component: CustomerDetailComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'event', component: EventDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
