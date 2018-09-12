import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVenue } from '../models/venue.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  updateVenue(venue: IVenue): Observable<IVenue> {
    let url = `/api/venues/` + venue.id;
    return this.httpClient.put<IVenue>(url, venue, httpOptions);
  }
  
  createVenue(venue: IVenue): Observable<IVenue> {
    let url = `/api/venues`
    return this.httpClient.post<IVenue>(url, venue, httpOptions);
  }

}
