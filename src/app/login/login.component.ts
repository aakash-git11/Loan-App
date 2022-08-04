import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { LoanserviceService } from '../service/loanservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  users: any[] = [];
  userType: string = "";
  constructor(private readonly loanservice: LoanserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'Username': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, [Validators.required])
    });
  }

  getErrorUsername() {
    return this.loginForm.get('Username')?.hasError('required') ? 'Username is required' :
      this.loginForm.get('Username')?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    return this.loginForm.get('Password')?.hasError('required') ? 'password is required' : '';
  }

  login(loginData: any) {
    console.log(loginData);
    this.loanservice.userLogin(loginData).subscribe(res => {
      console.log(res);
      if (res.statusCode == 200) {
        alert(res.message);
        this.loanservice.setLoggedinUserInfo(res.user);
        if (res.user.userType == 'admin')
          this.router.navigate(['loandetailsadmin']);
        else
          this.router.navigate(['loandetails']);
      }
      else {
        alert("Login failed! please check username and password");
      }
    })
  }
}




