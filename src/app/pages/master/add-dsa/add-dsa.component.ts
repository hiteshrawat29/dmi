import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;
 

@Component({
  selector: 'app-add-dsa',
  templateUrl: './add-dsa.component.html',
  styleUrls: ['./add-dsa.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddDsaComponent implements OnInit {

 
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_employee
 add_dsa : FormGroup;
 submitteddsa = false;

    // add_employee
    add_dsa_approval : FormGroup;
    submitteddsa_apv = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_employee
     this.add_dsa = this._fb.group({
      dsa_Channel_Type: ['' , Validators.required],
      dsa_Location_Covered: ['' , Validators.required],
      dsa_Base_Location: ['' , Validators.required],
      dsa_Refered_By: ['' , Validators.required],
      dsa_Refered_Resource_Emp_ID: ['' , Validators.required],
      dsa_Contract_Start_Date: ['' , Validators.required],
      dsa_Contract_End_Date: ['' , Validators.required],
      dsa_Company__Firm_Name: ['' , Validators.required],
      dsa_Type_of_Organisation: ['' , Validators.required],
      dsa_Company__Website: ['' , Validators.required],
      dsa_Address: ['' , Validators.required],
      dsa_Landmark: ['' , Validators.required],
      dsa_Pin_Code: ['' , Validators.required],
      dsa_City: ['' , Validators.required],
      dsa_District: ['' , Validators.required],
      dsa_State: ['' , Validators.required],
      dsa_Key_Person_Name: ['' , Validators.required],
      dsa_Key_Person_Mobile_no: ['' , Validators.required],
      dsa_Telephone_no_with_Std_Code: ['' , Validators.required],
      dsa_Email_ID: ['' , [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,4}$")]  ],
      dsa_Office_Type: ['' , Validators.required],
      dsa_No_of_Employee: ['' , Validators.required],
      dsa_Ref1Name: ['' , Validators.required],
      dsa_Ref1Organisation_Name: ['' , Validators.required],
      dsa_Ref1Designation: ['' , Validators.required],
      dsa_Ref1Contact_Number: ['' , Validators.required],
      dsa_Ref1Relationship: ['' , Validators.required],
      dsa_Ref2Name: ['' , Validators.required],
      dsa_Ref2Organisation_Name: ['' , Validators.required],
      dsa_Ref2Designation: ['' , Validators.required],
      dsa_Ref2Contact_Number: ['' , Validators.required],
      dsa_Ref2Relationship: ['' , Validators.required],
      dsa_Account_Name: ['' , Validators.required],
      dsa_Bank_Name: ['' , Validators.required],
      dsa_Account_Number: ['' , Validators.required],
      dsa_IFSC_Code: ['' , Validators.required],
      dsa_name_other: ['' , Validators.required],
      dsa_Branch_Address: ['' , Validators.required],
      dsa_GSTIN_ID: ['' , Validators.required],
      dsa_PanNo: ['' , Validators.required],
       


     })


     // add_employee
     this.add_dsa_approval = this._fb.group({
      
      dsa_apv_kyc_detail_verified: ['' , Validators.required],
      dsa_apv_reports_verified: ['' , Validators.required],
      dsa_apv_fi_verified: ['' , Validators.required],
      dsa_apv_cibil_verified: ['' , Validators.required],
      dsa_apv_fcu_verified: ['' , Validators.required],
      dsa_apv_agreemnent_verified: ['' , Validators.required],
      dsa_apv_payout_annexure_verified: ['' , Validators.required],
      dsa_apv_dsa_code: ['' , Validators.required],
      dsa_apv_approval_status: ['' , Validators.required],
      dsa_apv_remark: ['' , Validators.required],
      dsa_apv_final_remark: ['' , Validators.required],
         
     })


 }

 // add_dsa
 get add_dsa_control(){ return this.add_dsa.controls; }

 onSubmitdsa() {

   // loadn Information Submit
     this.submitteddsa = true;

     // stop here if form is invalid
     if (this.add_dsa.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_dsa.value))
 }

 // add_dsa
 get dsa_approval_control(){ return this.add_dsa_approval.controls; }

 onSubmitdsa_apv() {

   // loadn Information Submit
     this.submitteddsa_apv = true;

     // stop here if form is invalid
     if (this.add_dsa_approval.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_dsa_approval.value))
 }



}
