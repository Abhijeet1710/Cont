import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  userData:any;
  aboutMe:[];
  editingAboutMe = false;

  constructor(private router : Router, private _snackBar: MatSnackBar, private dashboardService : DashboardService) { }

  updateAboutMe() {
    this.dashboardService.updateUserData(this.userData)
    .subscribe((data: any) => {
      console.log(data);
      
      localStorage.setItem('user', JSON.stringify(data.data));
      
      this.loadUser();
      this._snackBar.open(`😊 Updated Succesfully`, '', {duration: 2000});
      this.editingAboutMe = false;
    }, (err) => {
      console.log(err.error.message);
      this._snackBar.open(`🤔 Some Internal Error`, '', {duration: 2000});
    })
  }

  my = [
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    }

  ]

  myPart = [
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation 📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    },
    {
      name: "Github API",
      description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
      tech: "Kotlin",
      likes: 20
    }

  ]

  loadUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    console.log(user);

    this.userData = {...user};
    this.aboutMe = this.userData.aboutMe.split(",");

    console.log(this.aboutMe);
    
  }

  ngOnInit(): void {
    this.loadUser();
  }

}
