import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanInformComponent } from './loan-inform/loan-inform.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DeDupeVerficationComponent } from './de-dupe-verfication/de-dupe-verfication.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { LiabilityAssetComponent } from './liability-asset/liability-asset.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoginFeeComponent } from './login-fee/login-fee.component'; 
import { DocumentChecklistComponent } from './document-checklist/document-checklist.component';
import { RoleAuthService } from 'src/app/role-auth.service';

const routes: Routes = [
    {path:'' ,redirectTo:'loan-info',pathMatch:'full'},
    {path:'loan-info' ,component:LoanInformComponent},
    {path:'persnl-details' ,component:PersonalDetailsComponent},
    {path:'dupe-verific' ,component:DeDupeVerficationComponent}, 
    {path:'emp-details' ,component:EmploymentDetailsComponent},
    {path:'income-details' ,component:IncomeDetailsComponent}, 
    {path:'bank-details' , component:BankDetailsComponent},
    {path:'assets' ,component:LiabilityAssetComponent},
    {path:'ref-details' ,component:ReferenceDetailsComponent},
    {path:'prop-details' ,component:PropertyDetailsComponent},
    {path:'loginfee' ,component:LoginFeeComponent},
    {path:'document-checklist' ,component:DocumentChecklistComponent}
        
 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseapplicationNewRoutingModule { }
