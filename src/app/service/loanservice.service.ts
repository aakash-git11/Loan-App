import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  private loanData: any;
  private loggedinUserInfo:any;
  private headers= new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private httpClient: HttpClient) { }

  getLoanDetails(): Observable<any> {
    return this.httpClient.get("http://localhost:2891/api/Loan/getLoanDetails");

  }  
  addNewLoan(objAddNewLoan: any) {
    console.log(objAddNewLoan.value);
    return this.httpClient.post<any>(
      "http://localhost:2891/api/Loan/addNewLoan", objAddNewLoan.value);
  }

  updateLoanDetails(objEditLoanDeatils :any){
    console.log(objEditLoanDeatils);
    return this.httpClient.post<any>(
      "http://localhost:2891/api/Loan/updateLoanDetails",objEditLoanDeatils,{
        headers:this.headers
      });
  }

  userLogin(loginData:any){
    console.log(loginData.value);
    return this.httpClient.post<any>("http://localhost:2891/api/User/userLogin",loginData.value)
  }

  cancelLoan(LoanId:any){
    console.log(LoanId);
    return this.httpClient.put<any>("http://localhost:2891/api/Loan/cancelLoan/"+LoanId,{
      LoanId:LoanId
    })
  }

  setLoanDataForEdit(loanDetails:any) {
    console.log("in the service"+loanDetails);
    this.loanData = loanDetails;
  }

  getLoanDataForEdit() {
    return this.loanData;
  }
  setLoggedinUserInfo(data:any){
    this.loggedinUserInfo=data;
  }
  getLoggedinUserInfo(){
    return this.loggedinUserInfo;
  }
}
