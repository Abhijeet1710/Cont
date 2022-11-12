import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  editing:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeEditProfile() {
    this.editing = false;
  }

  openEditProfile() {
    this.editing = true;
  }

}
