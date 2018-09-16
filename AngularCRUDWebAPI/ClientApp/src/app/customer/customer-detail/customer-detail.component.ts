import { Component, OnInit } from '@angular/core';
import { ICustomer} from '../../models/customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: ICustomer;
  id: number = 0;
  formGroup: FormGroup;

  constructor(private service: CustomerService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private router: Router) {

    this.formGroup = this.fb.group({       businessName: [''],       website: [''],       phone: ['', Validators.required],       email: ['', Validators.required],       firstName: ['', Validators.required],       lastName: ['', Validators.required],       photoUrl: [''],       street: ['', Validators.required],       city: ['', Validators.required],       state: ['', Validators.required],       zip: ['', Validators.required],       country: ['', Validators.required]     }); 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (!this.id) {
        return;
      }
      this.getCustomer(this.id);
    });
  }

  getCustomer(id: number) {
    this.service.getCustomer(id).subscribe(customer => {
      this.customer = customer;
      this.formGroup.patchValue(this.customer);
    })
  }

  onSubmit(formValue) {
    this.customer = formValue;

    if (!this.id) {
      this.service.createCustomer(this.customer).subscribe(customer => {
        this.customer = customer;
        this.router.navigate(['customers']);
      })
    } else {
      this.service.updateCustomer(this.id, this.customer).subscribe(customer => {
        console.log("Updated " + this.id);
        this.customer = customer;
        this.openSnackBar("Saved", "Success");
      });
    }
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
