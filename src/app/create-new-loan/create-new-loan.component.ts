import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanserviceService } from '../service/loanservice.service';

@Component({
  selector: 'app-create-new-loan',
  templateUrl: './create-new-loan.component.html',
  styleUrls: ['./create-new-loan.component.css']
})
export class CreateNewLoanComponent implements OnInit {
  AddNewLoanForm!: FormGroup;
  constructor(private LoanService:LoanserviceService,private router:Router) { }

  ngOnInit(): void {
    this.AddNewLoanForm = new FormGroup({
      'LoanNumber': new FormControl(null, [Validators.required]),
      'LoanAccountHolderFirstName': new FormControl(null, [Validators.required]),
      'LoanAccountHolderLastName': new FormControl(null, [Validators.required]),
      'PropertyAddress': new FormControl(null, [Validators.required]),
      'LoanType': new FormControl(null, [Validators.required]),
      'LoanTerm': new FormControl(null, [Validators.required]),
      'LoanAmmount': new FormControl(null, [Validators.required])
    });

  }
  getErrorLoanNumber() {
    return this.AddNewLoanForm.get('LoanNumber')?.hasError('required') ? 'LoanNumber is required' : '';
  }
  getErrorLoanAccountHolderFirstName() {
    return this.AddNewLoanForm.get('LoanAccountHolderFirstName')?.hasError('required') ? 'LoanAccountHolderFirstName is required' : '';
  }
  getErrorLoanAccountHolderLastName() {
    return this.AddNewLoanForm.get('LoanAccountHolderLastName')?.hasError('required') ? 'LoanAccountHolderName Lastis required' : '';
  }
  getErrorPropertyAddress() {
    return this.AddNewLoanForm.get('PropertyAddress')?.hasError('required') ? 'PropertyAddress is required' : '';
  }
  getErrorLoanType() {
    return this.AddNewLoanForm.get('LoanType')?.hasError('required') ? 'LoanType is required' : '';
  }
  getErrorLoanTerm() {
    return this.AddNewLoanForm.get('LoanTerm')?.hasError('required') ? 'LoanTerm is required' : '';
  }
  getErrorLoanAmmount() {
    return this.AddNewLoanForm.get('LoanAmmount')?.hasError('required') ? 'LoanAmmount is required' : '';
  }

  AddNewLoan(data:any){
    this.LoanService.addNewLoan(data).subscribe(res=>{
      console.log(res);
      alert(res.message);
      if(res.statusCode==400){
        
      } 
      else{
        this.router.navigate(['loandetailsadmin']);
      }    
      
      
    })
  }
  resetForm(){
  this.AddNewLoanForm.reset();    
  }
}
