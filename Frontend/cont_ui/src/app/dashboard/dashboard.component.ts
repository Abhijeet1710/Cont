import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  editing: boolean = false;
  userData: any;
  // allProjects =  [
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin", "Java", "Android", "Kotlin", "Java", "Android", "Kotlin", "Java", "Android"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["C++", "Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   },
  //   {
  //     name: "Github API",
  //     description: "📒 GitHub Profile is a complete 💎Kotlin-Android 📱 application built to demonstrate the use of Modern development tools with best practices implementation",
  //     tech: ["Kotlin"],
  //     likes: 20
  //   }

  // ];

  allProjects: any;

  constructor(private router: Router, private _snackBar: MatSnackBar, private dashboardService: DashboardService) {
    const user = JSON.parse(localStorage.getItem('user'));

    this.userData = { ...user };

    if (!user) {
      router.navigate(['SignIn'])
    }
  }

  ngOnInit(): void {
    this.dashboardService.getAllProjects().subscribe(
      (res: any) => {
        this.allProjects = res.data;
      },
      (err) => {

      }
    )
  }

  loadUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);

    this.userData = { ...user };
  }

  updateUserData() {
    this.dashboardService.updateUserData(this.userData)
      .subscribe((data: any) => {
        console.log(data);

        localStorage.setItem('user', JSON.stringify(data.data));
        this.loadUser();
        this._snackBar.open(`😊 Updated Succesfully`, '', { duration: 2000 });
        this.closeEditProfile();
      }, (err) => {
        console.log(err.error.message);

      })
  }

  closeEditProfile() {
    this.editing = false;
  }

  openEditProfile() {
    this.editing = true;
  }

}
