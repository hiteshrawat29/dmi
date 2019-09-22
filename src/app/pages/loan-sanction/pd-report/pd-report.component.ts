import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 
 

@Component({
  selector: 'app-pd-report',
  templateUrl: './pd-report.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class PdReportComponent implements OnInit {
  
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];
  
 // PD_report
  PD_report : FormGroup;
  submitted16 = false;


  // PD_report
  Other_Loan_Detail : FormGroup;
  submitted28 = false;


   // PD_report
   pd_Asset_Detail : FormGroup;
   submitted29 = false;
 
    // PD_report
    PD_personal_info : FormGroup;
    submitted30 = false;
    LS_PD_Loan_Purpose:any;
    LS_PD_CR_Residence_Type:any;
    LS_PD_CR_Address_Proof:any;
    LS_PD_CR_State:any;
    LS_PD_Constitution:any;
    LS_PD_Loan_Type:any;
    LS_PD_Obligate__Y_N:any;
    LS_PD_Asset_Detail:any;
    LS_PD_Documented_Proof:any;
    LS_PD_Staying_with_Applicant:any;
    LS_PD_Officer_Name:any;
    LS_PD_PD_Status:any;
    LS_PD_Residence_Type:any;
    LS_PD_Address_Proof:any;
    LS_PD_State:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    // PD Report 

    this.PD_report = this._fb.group({
      LS_PD_App_ID: [''], 
      LS_PD_Applicant_Name: [''],
      LS_PD_DOB: [''],
      LS_PD_SA_Contact_No: ['', Validators.minLength(10)],
      LS_PD_Qualification: [''],
      LS_PD_Co_app_Name: [''],
      LS_PD_Loan_Amt_Requested: [''],
      LS_PD_Loan_Purpose: [''],
      LS_PD_ROI: [''],
      LS_PD_CR_Residence_Type: [''],
      LS_PD_CR_Address_Proof: [''],
      LS_PD_CR_Rent_Amount: [''],
      LS_PD_CR_Address: [''],
      LS_PD_CR_Landmark: [''],
      LS_PD_CR_Pin_Code: [''],
      LS_PD_CR_District: [''],
      LS_PD_CR_City: [''],
      LS_PD_CR_State: [''],
      LS_PD_CR_Staying__In_years: [''],
      LS_PD_Residence_Type: [''],
      LS_PD_Address_Proof: [''],
      LS_PD_Rent_Amount: [''],
      LS_PD_Address: [''],
      LS_PD_Landmark: [''], 
      LS_PD_Pin_Code: [''],
      LS_PD_City: [''],
      LS_PD_District: [''],
      LS_PD_State: [''],
      LS_PD_Staying__In_years: [''],
      LS_PD_CE_Company_Name: ['' , Validators.required],
      LS_PD_CE_Designation: ['' , Validators.required],
      LS_PD_CE_Joining_Date: ['' , Validators.required],
      LS_PD_Constitution: ['' , Validators.required],
      LS_PD_Monthly_Gross_Income: ['' , Validators.required],
      LS_PD_Company_Name: [''],
      LS_PD_Designation: [''],
      LS_PD_Joining_Date: [''],
      LS_PD_Last_Date: [''],
      
      
     
      
      
      LS_PD_Officer_Name: [''  , Validators.required],
      LS_PD_PD_Status: [''  , Validators.required],
      LS_PD_PD_Date: [''  , Validators.required],
       
    })

    this.Other_Loan_Detail = this._fb.group({
      LS_PD_Loan_Type: [''  , Validators.required],
      LS_PD_Financier_Name: [''  , Validators.required],
      LS_PD_Loan_Amount: [''  , Validators.required],
      LS_PD_Tenure: [''  , Validators.required] ,
      LS_PD_Balance_Tenure: [''  , Validators.required],
      LS_PD_EMI_Amount: [''  , Validators.required],
      LS_PD_Repayment_Bank: [''  , Validators.required],
      LS_PD_Obligate__Y_N: [''  , Validators.required],
        
    })

    this.pd_Asset_Detail = this._fb.group({
      
      LS_PD_Asset_Detail: [''],
      LS_PD_Ownership: [''],
      LS_PD_Value: [''],
      LS_PD_Documented_Proof: [''],
    })

    this.PD_personal_info = this._fb.group({
      LS_PD_Dependent_Name: [''],
      LS_PD_Relation_with_Applicant: [''],
      LS_PD_Contact_No: [''],
      LS_PD_Staying_with_Applicant: [''],
      
    })





  }

  // PD Report Status

  get pd_control(){ return this.PD_report.controls; }

  onSubmit16() {

    // loadn Information Submit
      this.submitted16 = true;

      // stop here if form is invalid
      if (this.PD_report.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.PD_report.value))
  }

  // PD Report Status

  get pd_other_loan_control(){ return this.Other_Loan_Detail.controls; }

  onSubmit28() {

    // loadn Information Submit
      this.submitted28 = true;

      // stop here if form is invalid
      if (this.Other_Loan_Detail.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Other_Loan_Detail.value))
  }


  // PD Report Status

  get pd_asset_detail_control(){ return this.pd_Asset_Detail.controls; }

  onSubmit29() {

    // loadn Information Submit
      this.submitted29 = true;

      // stop here if form is invalid
      if (this.pd_Asset_Detail.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pd_Asset_Detail.value))
  }

  // PD Report Status

  get pd_personal_info_control(){ return this.PD_personal_info.controls; }

  onSubmit30() {

    // loadn Information Submit
      this.submitted30 = true;

      // stop here if form is invalid
      if (this.PD_personal_info.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.PD_personal_info.value))
  }


  

}
