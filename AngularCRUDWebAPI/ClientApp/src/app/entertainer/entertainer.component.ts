import { Component, OnInit } from '@angular/core';
import { IEntertainer } from '../models/entertainer.model';
import { EntertainerService } from './entertainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entertainer',
  templateUrl: './entertainer.component.html',
  styleUrls: ['./entertainer.component.css']
})
export class EntertainerComponent implements OnInit {

  entertainers: IEntertainer[];
    displayedColumns: string[] = ['id', 'name', 'description', 'select'];
    isWaiting: Boolean = false;

  constructor(private service:EntertainerService, private router:Router) { }

    ngOnInit() {
    this.isWaiting = true;
    this.service.getEntertainers().subscribe(entertainers => {
        this.entertainers = entertainers;
        this.isWaiting = false;
    })
  }

  addNew() {
    this.router.navigate(['entertainer']);
  }
}
