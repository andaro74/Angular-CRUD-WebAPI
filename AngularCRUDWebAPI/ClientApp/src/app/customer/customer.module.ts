import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from './customer.service';
import { MaterialModule } from './../modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,
  ],
  providers: [CustomerService],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CustomerModule { }
