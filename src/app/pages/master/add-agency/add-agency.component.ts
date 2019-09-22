import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;
 

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddAgencyComponent implements OnInit {

  

 
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_employee
 add_agency : FormGroup;
 submittedagency = false;

    // add_employee
    add_agency_approval : FormGroup;
    submittedagency_apv = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_employee
     this.add_agency = this._fb.group({
      agency_Channel_Type: ['' , Validators.required],
      agency_Constitution: ['' , Validators.required],
      agency_Location_Covered: ['' , Validators.required],
      agency_Base_Location: ['' , Validators.required],
      agency_Refered_By: ['' , Validators.required],
      agency_Refered_Resource_Emp_ID: ['' , Validators.required],
      agency_Contract_Start_Date: ['' , Validators.required],
      agency_Contract_End_Date: ['' , Validators.required],
      agency_Company__Firm_Name: ['' , Validators.required],
      agency_Type_of_Organisation: ['' , Validators.required],
      agency_Company__Website: ['' , Validators.required],
      agency_Address: ['' , Validators.required],
      agency_Landmark: ['' , Validators.required],
      agency_Pin_Code: ['' , Validators.required],
      agency_City: ['' , Validators.required],
      agency_District: ['' , Validators.required],
      agency_State: ['' , Validators.required],
      agency_Key_Person_Name: ['' , Validators.required],
      agency_Key_Person_Mobile_no: ['' , Validators.required],
      agency_Telephone_no_with_Std_Code: ['' , Validators.required],
      agency_Email_ID: ['' , [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,4}$")]  ],
      agency_Office_Type: ['' , Validators.required],
      agency_No_of_Employee: ['' , Validators.required],
      agency_Ref1Name: ['' , Validators.required],
      agency_Ref1Organisation_Name: ['' , Validators.required],
      agency_Ref1Designation: ['' , Validators.required],
      agency_Ref1Contact_Number: ['' , Validators.required],
      agency_Ref1Relationship: ['' , Validators.required],
      agency_Ref2Name: ['' , Validators.required],
      agency_Ref2Organisation_Name: ['' , Validators.required],
      agency_Ref2Designation: ['' , Validators.required],
      agency_Ref2Contact_Number: ['' , Validators.required],
      agency_Ref2Relationship: ['' , Validators.required],
      agency_Account_Name: ['' , Validators.required],
      agency_Bank_Name: ['' , Validators.required],
      agency_Account_Number: ['' , Validators.required],
      agency_IFSC_Code: ['' , Validators.required],
      agency_name_other: ['' , Validators.required],
      agency_Branch_Address: ['' , Validators.required],
      agency_GSTIN_ID: ['' , Validators.required],
      agency_PanNo: ['' , Validators.required],
       


     })


     // add_employee
     this.add_agency_approval = this._fb.group({
      
      agency_apv_kyc_detail_verified: ['' , Validators.required],
      agency_apv_reports_verified: ['' , Validators.required],
      agency_apv_fi_verified: ['' , Validators.required],
      agency_apv_cibil_verified: ['' , Validators.required],
      agency_apv_fcu_verified: ['' , Validators.required],
      agency_apv_agreemnent_verified: ['' , Validators.required],
      agency_apv_payout_annexure_verified: ['' , Validators.required],
      agency_apv_agency_code: ['' , Validators.required],
      agency_apv_approval_status: ['' , Validators.required],
      agency_apv_remark: ['' , Validators.required],
      agency_apv_final_remark: ['' , Validators.required],
         
     })


 }

 // add_agency
 get add_agency_control(){ return this.add_agency.controls; }

 onSubmitagency() {

   // loadn Information Submit
     this.submittedagency = true;

     // stop here if form is invalid
     if (this.add_agency.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_agency.value))
 }

 // add_agency
 get agency_approval_control(){ return this.add_agency_approval.controls; }

 onSubmitagency_apv() {

   // loadn Information Submit
     this.submittedagency_apv = true;

     // stop here if form is invalid
     if (this.add_agency_approval.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_agency_approval.value))
 }



}
