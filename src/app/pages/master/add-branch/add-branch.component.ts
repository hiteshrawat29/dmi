import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AddBranchComponent implements OnInit {

  
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_branch
 add_branch : FormGroup;
 submittedbranch = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_branch
     this.add_branch = this._fb.group({
       
 
       add_branch_Branch_Name: ['' , Validators.required],
        add_branch_Region: ['' , Validators.required],
        add_branch_Branch_Incharge_Name: ['' , Validators.required],
        add_branch_Branch_Incharge_Email: ['' , [Validators.required, Validators.email]], 
        add_branch_Telephone_No: ['', [Validators.required, Validators.minLength(10)]],  
        add_branch_Branch_Code: ['' , Validators.required],
        add_branch_Batch_Generation_Code: ['' , Validators.required],
        add_branch_Cersai_Code: ['' , Validators.required],
        add_branch_Nav_Code: ['' , Validators.required], 
        add_branch_Address: [''],
        add_branch_Landmark: [''],
        add_branch_Pin_Code: ['' ],
        add_branch_City: ['' ],
        add_branch_District: [''],
        add_branch_State: ['' , Validators.required],
        add_branch_Landline_No: ['', Validators.minLength(10)], 
        add_branch_Status: [''],   

               
      
 
     })

 }

 // add_branch
 get add_branch_control(){ return this.add_branch.controls; }

 onSubmitbranch() {

   // loadn Information Submit
     this.submittedbranch = true;

     // stop here if form is invalid
     if (this.add_branch.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_branch.value))
 }


}
