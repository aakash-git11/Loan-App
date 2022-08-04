import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanserviceService } from '../service/loanservice.service';

@Component({
  selector: 'app-loan-details-admin',
  templateUrl: './loan-details-admin.component.html',
  styleUrls: ['./loan-details-admin.component.css']
})
export class LoanDetailsAdminComponent implements OnInit {
  searchValue: string = "";
  loanDetailsData: any[] = [];
  constructor(private readonly loanservice: LoanserviceService) {

  }
  ngOnInit(): void {    
    this.loanservice.getLoanDetails()
      .subscribe(res => {
        console.log(res);
        this.loanDetailsData = res;
      })
  }
  populateLoanDeatils(data:any){
    this.loanservice.setLoanDataForEdit(data);
    console.log(data);
  }  
}

