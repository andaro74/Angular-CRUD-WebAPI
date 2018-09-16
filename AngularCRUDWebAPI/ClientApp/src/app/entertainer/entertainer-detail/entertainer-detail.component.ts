import { Component, OnInit } from '@angular/core';
import { IEntertainer } from '../../models/entertainer.model';
import { EntertainerService } from '../entertainer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entertainer-detail',
  templateUrl: './entertainer-detail.component.html',
  styleUrls: ['./entertainer-detail.component.css']
})
export class EntertainerDetailComponent implements OnInit {
  entertainer: IEntertainer;
  id: number = 0;
  formGroup: FormGroup; 

  constructor(private service: EntertainerService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public snackBar: MatSnackBar) {

    this.formGroup = this.fb.group({       businessName: ['', Validators.required],       description: ['', Validators.required],       website: [''],       phone: ['', Validators.required],       email: ['', Validators.required],       firstName: ['', Validators.required],       lastName: ['', Validators.required],       photoUrl: [''],       street: ['', Validators.required],       city: ['', Validators.required],       state: ['', Validators.required],       zip: ['', Validators.required],       country: ['', Validators.required]     }); 
  }

 ngOnInit() {

      this.route.params.subscribe(params => {
        this.id = +params['id'];
        if (!this.id) {
          return;
        }
        this.getEntertainer(this.id);
      });
    }

    getEntertainer(id: number) {
      this.service.getEntertainer(id).subscribe(entertainer => {
        this.entertainer = entertainer;
        this.formGroup.patchValue(this.entertainer);
      })
  }

  onSubmit(formValue) {
    this.entertainer = formValue;

    if (!this.id) {
      this.service.createEntertainer(this.entertainer).subscribe(entertainer => {
        this.entertainer = entertainer;
      })
    } else {
      this.service.updateEntertainer(this.id, this.entertainer).subscribe(entertainer => {
        console.log("Updated " + this.id);
        this.entertainer = entertainer;
      });
    }
    this.openSnackBar("Saved", "Success");
    //this.location.back();
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
