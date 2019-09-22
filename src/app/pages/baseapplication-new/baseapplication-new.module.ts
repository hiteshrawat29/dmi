import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { BaseapplicationNewRoutingModule } from './baseapplication-new-routing.module';
import { LoanInformComponent } from './loan-inform/loan-inform.component';
import { LoanSideBarComponent } from './loan-side-bar/loan-side-bar.component';
import { LeadInformBarComponent } from './lead-inform-bar/lead-inform-bar.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DeDupeVerficationComponent } from './de-dupe-verfication/de-dupe-verfication.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { LiabilityAssetComponent } from './liability-asset/liability-asset.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoginFeeComponent } from './login-fee/login-fee.component';
import { NumbersOnlyDirective } from 'src/app/mynumber-only.directive';
import { DocumentChecklistComponent } from './document-checklist/document-checklist.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecialCharacterDirective } from 'src/app/restrictchar.directive';


@NgModule({
  declarations: [
     LoanInformComponent,LoanSideBarComponent,LeadInformBarComponent,PersonalDetailsComponent,
      DeDupeVerficationComponent,
      EmploymentDetailsComponent,
      IncomeDetailsComponent,
      BankDetailsComponent,
      LiabilityAssetComponent,
      ReferenceDetailsComponent,
      PropertyDetailsComponent,
      LoginFeeComponent,
      DocumentChecklistComponent,
      NumbersOnlyDirective,
      SpecialCharacterDirective
  ],
  imports: [
    CommonModule,
    BaseapplicationNewRoutingModule,
    FormsModule,ReactiveFormsModule,MaterialModule,HttpClientModule
  ],
  exports:[LeadInformBarComponent,NumbersOnlyDirective]
})
export class BaseapplicationNewModule { }
