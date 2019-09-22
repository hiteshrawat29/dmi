import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;
 
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  encapsulation: ViewEncapsulation.None 
})
export class AddUserComponent implements OnInit {
 
  
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   minpass: any = ['Password Must be Min. 6 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

     // add_user
  add_user : FormGroup;
  submitteduser = false;


  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

      // add_user
      this.add_user = this._fb.group({
        add_user_user_type: ['' , Validators.required],
        Employee_Name: ['' , Validators.required],
        add_user_name: ['' , Validators.required],
        add_user_role: ['' , Validators.required],
        add_user_branch: ['' , Validators.required], 
        add_userPassword: ['', [Validators.required, Validators.minLength(6)]],
        add_usercnfPassword: ['', [Validators.required, Validators.minLength(6)]],  
        add_user_Status: [''],
        Can_Approve_Document_Check_List: [''],
        Approve_Underwriter: [''],
        Recommend_Underwriter: [''],
        Min_Loan_Amount_Recommend_Underwriter: [''],
        Max_Loan_Amount_Recommend_Underwriter: [''],
        Can_Approve_Dedupe_Verification: [''],
        Can_Approve_Manual_Payment_Advice: [''],
        Can_Cancel_Sanction_Letter: [''],
        Can_Approve_Loan_Reschedulement: [''],
        Can_Approve_Lan_Foreclosure: [''],
        Can_Approve_Loan_Requirement: [''],
        Can_Approve_Charge_Waiver: [''],
        Can_Approved_Sale_Channel: [''],
        Approve_Meno: [''],
        Recommend_Meno: [''],
        Can_Edit_Free_After_Sanction: [''],
        Min_Loan_Amount_Recommend_Memo: [''],
        Max_Loan_Amount_Recommend_Memo: [''],
        Min_Loan_Amount_Approve_Memo: [''],
        Max_Loan_Amount_Approve_Memo: [''],
        Can_Open_Technical_Verfical: [''],
        Can_Export_Certificate_in_All_Format: [''],
        Can_View_Pending_Cases_Technical: [''],
        Can_Approve_Technical_Valuation: [''],
        Can_Transfer_Fee_In_File_Report: [''],
        Can_Send_SMS_In_File_Report: [''],
        
  
      })

  }

  // add_user
  get add_user_control(){ return this.add_user.controls; }

  onSubmituser() {

    // loadn Information Submit
      this.submitteduser = true;

      // stop here if form is invalid
      if (this.add_user.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_user.value))
  }


}
