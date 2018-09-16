import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> { 
    let url = `/api/customers`;
    return this.httpClient.get<ICustomer[]>(url);
  }

  getCustomer(id: number): Observable<ICustomer> {
    let url = `/api/customers/` + id;
    return this.httpClient.get<ICustomer>(url);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    let url = `/api/customers/` + id;
    return this.httpClient.put<ICustomer>(url, customer, httpOptions);
  }

  createCustomer(customer: ICustomer): Observable<ICustomer> {
    let url = `/api/customers`;
    return this.httpClient.post<ICustomer>(url, customer, httpOptions);
  }
}
