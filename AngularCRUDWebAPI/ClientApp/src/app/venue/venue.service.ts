import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IVenue } from '../models/venue.model';

@Injectable()
export class VenueService {

  constructor(private httpClient: HttpClient) {
  }

  getVenues(): Observable<IVenue[]> {
    let url = `/api/venues`;
    return this.httpClient.get<IVenue[]>(url);
  }

  getVenue(id: number): Observable<IVenue> {
    let url = `/api/venues/` + id;
    return this.httpClient.get<IVenue>(url);
  }

}
