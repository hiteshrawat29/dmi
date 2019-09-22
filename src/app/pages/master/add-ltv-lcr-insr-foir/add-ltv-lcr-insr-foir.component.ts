import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any; 

@Component({
  selector: 'app-add-ltv-lcr-insr-foir',
  templateUrl: './add-ltv-lcr-insr-foir.component.html',
  styleUrls: ['./add-ltv-lcr-insr-foir.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddLTVLCRINSRFOIRComponent implements OnInit {

  
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_ltv_lcr_insr_foir
 add_ltv_lcr_insr_foir : FormGroup;
 submittedltv_lcr_insr_foir = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_ltv_lcr_insr_foir
     
     this.add_ltv_lcr_insr_foir = this._fb.group({
      ltv_lcr_insr_foir_Norms_Type: ['' , Validators.required],
      ltv_lcr_insr_foir_From_Date: ['' , Validators.required],
      ltv_lcr_insr_foir_To_Date: ['' , Validators.required],
      ltv_lcr_insr_foir_Minimum_Amount: ['' , Validators.required],
      ltv_lcr_insr_foir_Maximum_Amount: ['' , Validators.required],
      ltv_lcr_insr_foir_Product_name: ['' , Validators.required],
      ltv_lcr_insr_foir_Percentage: ['' , Validators.required],
      ltv_lcr_insr_foir_Profile: ['' , Validators.required],
      ltv_lcr_insr_foir_Profile_segment: ['' , Validators.required],
      ltv_lcr_insr_foir_Branch: ['' , Validators.required],   
      add_ltv_lcr_insr_foir_Status: ['' , Validators.required],     
     })

 }

 // add_ltv_lcr_insr_foir
 get add_ltv_lcr_insr_foir_control(){ return this.add_ltv_lcr_insr_foir.controls; }

 onSubmitltv_lcr_insr_foir() {

   // loadn Information Submit
     this.submittedltv_lcr_insr_foir = true;

     // stop here if form is invalid
     if (this.add_ltv_lcr_insr_foir.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_ltv_lcr_insr_foir.value))
 }
 

}
