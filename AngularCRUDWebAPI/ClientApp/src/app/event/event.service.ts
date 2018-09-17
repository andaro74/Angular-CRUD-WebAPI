import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from './../models/event.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor(private httpClient:HttpClient) {
    }

    getEvents():Observable<IEvent[]> {
        let url=`/api/events`;
        return this.httpClient.get<IEvent[]>(url);
    }


    getEvent(id: number): Observable<IEvent> {
        let url=`/api/events/` + id;
        return this.httpClient.get<IEvent>(url);
    }


    createEvent(event: IEvent): Observable<IEvent> {
        let url=`/api/events`;
        return this.httpClient.post<IEvent>(url,event,httpOptions);
    }


    updateEvent(id:number, event: IEvent): Observable<IEvent> {
        let url=`/api/events/` + id;
        return this.httpClient.put<IEvent>(url, event, httpOptions);
    }










}
