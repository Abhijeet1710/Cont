import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpOpened: boolean = true;
  loginForm : FormGroup;

  constructor(private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {



  }

  openSignInContent() {
    this.signUpOpened = false;
  }

  openSignUpContent() {
    this.signUpOpened = true;
  }

  signIn() {    
    if(true) {
      this.route.navigate(['/dashboard']);
    }
  }

  signUp() {
    this._snackBar.open("Sign Up Successfull", '', {duration: 2000});
  }

}
