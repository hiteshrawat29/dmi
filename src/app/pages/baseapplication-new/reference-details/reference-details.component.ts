import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReferenceDetailsComponent implements OnInit {
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Reference_Details
Reference_Details : FormGroup;
submitted11 = false;
Re_Relation:any;
Re_Occupation:any;
Re_State:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
    this.Reference_Details = this._fb.group({
      Re_Name: ['' , Validators.required ], 
      Re_Contact_No: ['' , [Validators.required, Validators.minLength(10)]],
      Re_Relation: ['' , Validators.required],
      Re_Known_Since: ['' , Validators.required],
      Re_Occupation: ['' , Validators.required],
      Re_Address: ['' , Validators.required] ,
      Re_Landmark: ['' , Validators.required],
      Re_Pin_Code: ['' , Validators.required],
      Re_City: ['' , Validators.required],
      Re_District: ['' , Validators.required ],
      Re_State: ['' , Validators.required ],
      Re_Landline_No: ['' , Validators.minLength(10)],
       
    })

  }
 // Reference_Details Detail
 get reference_control(){ return this.Reference_Details.controls; }

 onSubmit11() {

   // loadn Information Submit
     this.submitted11 = true;

     // stop here if form is invalid
     if (this.Reference_Details.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Reference_Details.value))
 }

 
}
