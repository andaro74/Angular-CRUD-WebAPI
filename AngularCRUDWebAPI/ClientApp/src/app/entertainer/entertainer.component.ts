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
  constructor(private service:EntertainerService, private router:Router) { }

  ngOnInit() {
    this.service.getEntertainers().subscribe(entertainers => {
      this.entertainers = entertainers;
    })
  }

  addNew() {
    this.router.navigate(['entertainer']);
  }
}
