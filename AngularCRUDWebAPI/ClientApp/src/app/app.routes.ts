import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue.component';
import { VenueDetailComponent } from './venue/venue-detail/venue-detail.component';
import { EntertainerDetailComponent } from './entertainer/entertainer-detail/entertainer-detail.component';
import { EntertainerComponent } from './entertainer/entertainer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'venues', component: VenueComponent },
  { path: 'venues/:id', component: VenueDetailComponent },
  { path: 'venue', component: VenueDetailComponent },
  { path: 'entertainers', component: EntertainerComponent },
  { path: 'entertainers/:id', component: EntertainerDetailComponent },
  { path: 'entertainer', component: EntertainerDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
