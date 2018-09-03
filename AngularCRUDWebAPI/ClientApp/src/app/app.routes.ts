import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './venue/venue.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'counter', component: CounterComponent },
  //{ path: 'fetch-data', component: FetchDataComponent },
  { path: 'venue', component: VenueComponent }
];

export const routing = RouterModule.forRoot(routes);
