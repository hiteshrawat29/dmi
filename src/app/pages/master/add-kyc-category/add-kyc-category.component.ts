import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any; 

@Component({
  selector: 'app-add-kyc-category',
  templateUrl: './add-kyc-category.component.html',
  styleUrls: ['./add-kyc-category.component.css'] ,
  encapsulation: ViewEncapsulation.None 
})
export class AddKycCategoryComponent implements OnInit {

  
  
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_kyc_category
 add_kyc_category : FormGroup;
 submittedkyc_category = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_kyc_category
     
     this.add_kyc_category = this._fb.group({
      kyc_category_Norms_Type: ['' , Validators.required],
      kyc_category_From_Date: ['' , Validators.required],
      kyc_category_To_Date: ['' , Validators.required],
      kyc_category_Minimum_Amount: ['' , Validators.required],
      kyc_category_Maximum_Amount: ['' , Validators.required],
      kyc_category_Product_name: ['' , Validators.required],
      kyc_category_Percentage: ['' , Validators.required],
      kyc_category_Profile: ['' , Validators.required],
      kyc_category_Profile_segment: ['' , Validators.required],
      kyc_category_Branch: ['' , Validators.required],   
      add_kyc_category_Status: ['' , Validators.required],     
     })

 }

 // add_kyc_category
 get add_kyc_category_control(){ return this.add_kyc_category.controls; }

 onSubmitkyc_category() {

   // loadn Information Submit
     this.submittedkyc_category = true;

     // stop here if form is invalid
     if (this.add_kyc_category.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_kyc_category.value))
 }
 

 

}
