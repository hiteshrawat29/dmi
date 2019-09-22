import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ProductComponent implements OnInit {

  
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_Product
 add_Product : FormGroup;
 submittedProduct = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_Product
     this.add_Product = this._fb.group({
      pro_Product_Name: ['' , Validators.required],
      pro_Min_Amount: ['' , Validators.required],
      pro_Min_tenure: ['' , Validators.required],
      pro_Max_Amount: ['' , Validators.required],
      pro_Max_Tenure: ['' , Validators.required],
      pro_From_Date: ['' , Validators.required],
      pro_To_Date: ['' , Validators.required],
      add_Product_Status:[],
 
     })

 }

 // add_Product
 get add_Product_control(){ return this.add_Product.controls; }

 onSubmitProduct() {

   // loadn Information Submit
     this.submittedProduct = true;

     // stop here if form is invalid
     if (this.add_Product.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_Product.value))
 }

 

}
