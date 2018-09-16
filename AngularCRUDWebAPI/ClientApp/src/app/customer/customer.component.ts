import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/customer.model';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[];
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'select']
  isWaiting: Boolean = false;

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.isWaiting = true;
    this.service.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.isWaiting = false;
    })
  }

  addNew() {
    this.router.navigate(['customer']);
  }

}
