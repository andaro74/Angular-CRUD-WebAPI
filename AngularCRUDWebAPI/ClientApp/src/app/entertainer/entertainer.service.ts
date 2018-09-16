import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntertainer } from '../models/entertainer.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EntertainerService {

  constructor(private httpClient: HttpClient) { }

   getEntertainers():Observable<IEntertainer[]> {
    let url = `/api/entertainers`;
    return this.httpClient.get<IEntertainer[]>(url);
  }

  getEntertainer(id: number): Observable<IEntertainer> {
    let url = `/api/entertainers/` + id;
    return this.httpClient.get<IEntertainer>(url);
  }

  updateEntertainer(id: number, entertainer: IEntertainer): Observable<IEntertainer> {
    let url = `/api/entertainers/` + id;
    return this.httpClient.put<IEntertainer>(url, entertainer, httpOptions);
  }

  createEntertainer(entertainer: IEntertainer): Observable<IEntertainer> {
    let url = `/api/entertainers`;
    return this.httpClient.post<IEntertainer>(url, entertainer, httpOptions);
  }

  

}
