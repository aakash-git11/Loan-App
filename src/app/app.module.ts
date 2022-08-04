import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoanDetailsPageComponent } from './loan-details-page/loan-details-page.component';
import { LoansearchfilterPipe } from './filters/loansearchfilter.pipe';
import { CommonModule } from '@angular/common';
import { LoanDetailsAdminComponent } from './loan-details-admin/loan-details-admin.component';
import { CreateNewLoanComponent } from './create-new-loan/create-new-loan.component';
import { EditLoanDetailsComponent } from './edit-loan-details/edit-loan-details.component';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoanDetailsPageComponent,
    LoansearchfilterPipe,
    LoanDetailsAdminComponent,
    CreateNewLoanComponent,
    EditLoanDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
