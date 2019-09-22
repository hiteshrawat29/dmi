import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-add-plr',
  templateUrl: './add-plr.component.html',
  styleUrls: ['./add-plr.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddPlrComponent implements OnInit {

 
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_PLR
 add_PLR : FormGroup;
 submittedPLR = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_PLR
     this.add_PLR = this._fb.group({
      PLR_PLR_Name: ['' , Validators.required],
      PLR_Min_Amount: ['' , Validators.required],
      PLR_Min_tenure: ['' , Validators.required],
      PLR_Max_Amount: ['' , Validators.required],
      PLR_Max_Tenure: ['' , Validators.required],
      PLR_From_Date: ['' , Validators.required],
      PLR_To_Date: ['' , Validators.required],
      add_PLR_Status:[],
 
     })

 }

 // add_PLR
 get add_PLR_control(){ return this.add_PLR.controls; }

 onSubmitPLR() {

   // loadn Information Submit
     this.submittedPLR = true;

     // stop here if form is invalid
     if (this.add_PLR.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_PLR.value))
 }
 
}
