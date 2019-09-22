import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpvVarificationComponent } from './cpv-varification/cpv-varification.component';
import { PdReportComponent } from './pd-report/pd-report.component';
import { LoanAppraisalComponent } from './loan-appraisal/loan-appraisal.component';
import { UnderwritingDetailsComponent } from './underwriting-details/underwriting-details.component';
import { GuarantorDetailsComponent } from './guarantor-details/guarantor-details.component';
import { HunterDetailsComponent } from './hunter-details/hunter-details.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component'; 
import { BureauDetailsComponent } from './bureau-details/bureau-details.component';

const routes: Routes = [
  
  {path:'',redirectTo:'cvp-verification',pathMatch:'full' },
  {path:'cvp-verification' , component:CpvVarificationComponent},
  {path:'pd-report' , component:PdReportComponent},
  {path:'loan-appraisal' , component:LoanAppraisalComponent},
  {path:'underwriting' , component:UnderwritingDetailsComponent},
  {path:'guarantor' , component:GuarantorDetailsComponent},
  {path:'hunter' , component:HunterDetailsComponent},
  {path:'insurance-details' , component:InsuranceDetailsComponent}, 
  {path:'bureau-details' , component:BureauDetailsComponent,}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanSanctionRoutingModule { }
