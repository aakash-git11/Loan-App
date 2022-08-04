import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanserviceService } from '../service/loanservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user:any;
  constructor(private readonly loanService:LoanserviceService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.loanService.getLoggedinUserInfo();
  }
  logout(){
   if(this.user){
    this.router.navigate(["login"]);
   }

  }
}
