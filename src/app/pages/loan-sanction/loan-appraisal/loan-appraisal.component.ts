import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-loan-appraisal',
  templateUrl: './loan-appraisal.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class LoanAppraisalComponent implements OnInit {
    // error list
    requireerror: any = ['This is required'];
    minerror: any = ['Min. least 10 characters'];
    minphone: any = ['Min. least 7 characters'];
    min100error: any = ['Min. least 50 characters'];
    emailerror: any = ['Email must be a valid email address'];

    // Loan_Appraisal
    Loan_Appraisal : FormGroup;
    submitted17 = false;
    LS_Lo_Sanction_Condition:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
    // Loan_Appraisal

    this.Loan_Appraisal = this._fb.group({
      LS_Lo_Eligibile_Loan_Amount: [''  , Validators.required],  
      LS_Lo_ROI: [''  , Validators.required],  
      LS_Lo_Tenure__in_Months_: [''  , Validators.required],
      LS_Lo_Sanction_Loan_Amount: [''  , Validators.required],
      LS_Lo_Sanction_Loan_Amount_insu: [''  , Validators.required],
      LS_Lo_Sanction_Loan_balance_fee: [''  , Validators.required],
      ls_RO_Base_Rate: [''  , Validators.required],
      ls_RO_Product_Spread: [''  , Validators.required],
      ls_RO_Profile_Spread: [''  , Validators.required],
      ls_RO_Profile_Segment_Speed: [''  , Validators.required],
      ls_RO_Property_Type_Spread: [''  , Validators.required],
      ls_RO_Property_Transaction_Spread: [''  , Validators.required],
      ls_RO_Scheme_Spread: [''  , Validators.required],
      ls_RO_Deviation_Spread: [''  , Validators.required],
      ls_RO_Deviation_given: [''  , Validators.required],
      ls_RO_Remarks: [''  , Validators.required],
      ls_RO_Final_ROI: [''  , Validators.required],
      ls_EM_EMI: [''  , Validators.required],
      ls_EM_EMI_with_Insurance: [''  , Validators.required],
      ls_EM_Remark: [''  , Validators.required],
      ls_IN_INSR_as_per_Norms: [''  , Validators.required],
      ls_IN_INSR_Waiver: [''  , Validators.required],
      ls_IN_INSR: [''  , Validators.required],
      ls_IN_INSR_with_Insurance: [''  , Validators.required],
      ls_IN_Remark : [''  , Validators.required],
      ls_FO_FOIR_as_per_Norms: [''  , Validators.required],
      ls_FO_FOIR_Waiver: [''  , Validators.required],
      ls_FO_FOIR: [''  , Validators.required],
      ls_FO_FOIR_with_Insurance: [''  , Validators.required],
      ls_FO_Remark : [''  , Validators.required],
      ls_LT_LTV_as_per_Norms: [''  , Validators.required],
      ls_LT_LTV_Waiver: [''  , Validators.required],
      ls_LT_LTV: [''  , Validators.required],
      ls_LT_LTV_with_Insurance: [''  , Validators.required],
      ls_LT_Combined_LTV_Link_Loan: [''  , Validators.required],
      ls_LT_Remark : [''  , Validators.required],
      ls_LC_LCR_as_per_Norms: [''  , Validators.required],
      ls_LC_LCR: [''  , Validators.required],
      ls_LC_Remark: [''  , Validators.required],
      ls_LC_LCR_with_Insurance: [''  , Validators.required],

      

       


    })
    

  }

   // Loan_Appraisal

   get Loan_App_control(){ return this.Loan_Appraisal.controls; }

   onSubmit17() {
 
     // loadn Information Submit
       this.submitted17 = true;
 
       // stop here if form is invalid
       if (this.Loan_Appraisal.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Loan_Appraisal.value))
   }

   

}
