import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { LoanserviceService } from '../service/loanservice.service';

@Component({
  selector: 'app-edit-loan-details',
  templateUrl: './edit-loan-details.component.html',
  styleUrls: ['./edit-loan-details.component.css']
})
export class EditLoanDetailsComponent implements OnInit {

  private EditLoanData: any;
  EditLoanForm!: FormGroup;
  constructor(private readonly loanService: LoanserviceService, private readonly router: Router) { }

  ngOnInit(): void {
    this.EditLoanData = this.loanService.getLoanDataForEdit();
    console.log(this.EditLoanData);

    this.EditLoanForm = new FormGroup({
      'LoanId':new FormControl(this.EditLoanData.loanId),
      'LoanNumber': new FormControl(this.EditLoanData.loanNumber),
      'LoanAccountHolderFirstName': new FormControl(this.EditLoanData.loanAccountHolderFirstName, [Validators.required]),
      'LoanAccountHolderLastName': new FormControl(this.EditLoanData.loanAccountHolderLastName, [Validators.required]),
      'PropertyAddress': new FormControl(this.EditLoanData.propertyAddress, [Validators.required]),
      'LoanType': new FormControl(this.EditLoanData.loanType, [Validators.required]),
      'LoanTerm': new FormControl(this.EditLoanData.loanTerm, [Validators.required]),
      'LoanAmmount': new FormControl(this.EditLoanData.loanAmmount, [Validators.required])
    });
    //this.EditLoanForm.;
    // this.EditLoanForm.controls['LoanNumber'].disable({onlySelf:true});
  }
  getErrorLoanAccountHolderFirstName() {
    return this.EditLoanForm.get('LoanAccountHolderFirstName')?.hasError('required') ? 'LoanAccountHolderFirstName is required' : '';
  }
  getErrorLoanAccountHolderLastName() {
    return this.EditLoanForm.get('LoanAccountHolderLastName')?.hasError('required') ? 'LoanAccountHolderName Lastis required' : '';
  }
  getErrorPropertyAddress() {
    return this.EditLoanForm.get('PropertyAddress')?.hasError('required') ? 'PropertyAddress is required' : '';
  }
  getErrorLoanType() {
    return this.EditLoanForm.get('LoanType')?.hasError('required') ? 'LoanType is required' : '';
  }
  getErrorLoanTerm() {
    return this.EditLoanForm.get('LoanTerm')?.hasError('required') ? 'LoanTerm is required' : '';
  }
  getErrorLoanAmmount() {
    return this.EditLoanForm.get('LoanAmmount')?.hasError('required') ? 'LoanAmmount is required' : '';
  }
  updateLoanDeatils() {
    console.log(this.EditLoanForm);
    this.loanService.updateLoanDetails(this.EditLoanForm.value).subscribe(res => {
      console.log(res);
      alert(res.message);
      if (res.statusCode == 200) {
        this.router.navigate(['loandetailsadmin']);
      }
      else {
        alert(res.message);
      }
    })
  }
  editCancel(){
    this.router.navigate(["loandetailsadmin"])
  }

}
