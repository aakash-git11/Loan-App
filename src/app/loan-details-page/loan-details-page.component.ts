import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanserviceService } from '../service/loanservice.service';

@Component({
  selector: 'app-loan-details-page',
  templateUrl: './loan-details-page.component.html',
  styleUrls: ['./loan-details-page.component.css']
})
export class LoanDetailsPageComponent implements OnInit { 
  searchValue:string="";
  loanDetailsData:any[]=[];
  constructor(private readonly loanservice: LoanserviceService) {
   }

  ngOnInit(): void {   
    this.loanservice.getLoanDetails()
      .subscribe(res=> {
        console.log(res);
        this.loanDetailsData = res;
      })
  }

}
