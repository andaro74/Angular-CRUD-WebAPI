import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue.component';
import { VenueDetailComponent } from './venue/venue-detail/venue-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'venues', component: VenueComponent },
  { path: 'venues/:id', component: VenueDetailComponent },
  { path: 'venue', component: VenueDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
