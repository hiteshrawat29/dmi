import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalRoutingModule } from './technical-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import {MatSelectModule, MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
import { TechnicalSideBarComponent } from './technical-side-bar/technical-side-bar.component'; 
import { TechnicalFiringComponent } from './technical-firing/technical-firing.component';
import { TechnicalReportComponent } from './technical-report/technical-report.component';
import { BaseapplicationNewModule } from '../baseapplication-new/baseapplication-new.module';

@NgModule({
  declarations: [
     TechnicalSideBarComponent, TechnicalFiringComponent, TechnicalReportComponent
  ],
  imports: [
    CommonModule,
    TechnicalRoutingModule,FormsModule,ReactiveFormsModule,
    MaterialModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatSelectModule,
    BaseapplicationNewModule
  ]
})
export class TechnicalModule { }
