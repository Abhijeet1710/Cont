import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  editing:boolean = false;

  constructor(private router : Router) { 
    const user = localStorage.getItem('user');
    
    if(!user) {
      alert("You are not logged in log in first")
      router.navigate(['SignIn'])
    }
  }

  ngOnInit(): void {
  }

  closeEditProfile() {
    this.editing = false;
  }

  openEditProfile() {
    this.editing = true;
  }

}
