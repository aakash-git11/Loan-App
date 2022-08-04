import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewLoanComponent } from './create-new-loan/create-new-loan.component';
import { EditLoanDetailsComponent } from './edit-loan-details/edit-loan-details.component';
import { LoanDetailsAdminComponent } from './loan-details-admin/loan-details-admin.component';
import { LoanDetailsPageComponent } from './loan-details-page/loan-details-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'loandetails',component:LoanDetailsPageComponent},
  {path:'loandetailsadmin',component:LoanDetailsAdminComponent},
  {path:'loandetailsadmin/addnewloan',component:CreateNewLoanComponent},
  {path:'loandetailsadmin/editloan/:loanId',component:EditLoanDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
