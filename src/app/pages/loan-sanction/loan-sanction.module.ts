import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanSanctionRoutingModule } from './loan-sanction-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SenctionSideBarComponent } from './senction-side-bar/senction-side-bar.component';
import { CpvVarificationComponent } from './cpv-varification/cpv-varification.component';
import { PdReportComponent } from './pd-report/pd-report.component';
import { LoanAppraisalComponent } from './loan-appraisal/loan-appraisal.component';
import { UnderwritingDetailsComponent } from './underwriting-details/underwriting-details.component';
import { GuarantorDetailsComponent } from './guarantor-details/guarantor-details.component';
import { HunterDetailsComponent } from './hunter-details/hunter-details.component';
import { BaseapplicationNewModule } from '../baseapplication-new/baseapplication-new.module';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component'; 
import { BureauDetailsComponent } from './bureau-details/bureau-details.component';

@NgModule({
  declarations: [
    SenctionSideBarComponent,
    CpvVarificationComponent,
    PdReportComponent,
    LoanAppraisalComponent,
    UnderwritingDetailsComponent,
    GuarantorDetailsComponent,
    HunterDetailsComponent,
    InsuranceDetailsComponent,
    BureauDetailsComponent,
  ],
  imports: [
    CommonModule,
    LoanSanctionRoutingModule,
    FormsModule,ReactiveFormsModule
    ,MaterialModule,BaseapplicationNewModule
  ]
})
export class LoanSanctionModule { }
