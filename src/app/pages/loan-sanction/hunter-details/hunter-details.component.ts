import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 

@Component({
  selector: 'app-hunter-details',
  templateUrl: './hunter-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HunterDetailsComponent implements OnInit {
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // hunter_form
  hunter_form : FormGroup;
  submitted25 = false;
  LS_Hu_Hunter_Result:any;
  LS__Hu_Hunter_Final_Status:any;
  
  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

     // hunter_form

     this.hunter_form = this._fb.group({ 
      LS_Hu_Hunter_Result: [''  , Validators.required],
      LS_Hu_Task_Assigned_Date: [''  , Validators.required ],
      LS_Hu_Task_Closure_Date: [''  , Validators.required ],
      LS__Hu_Hunter_Final_Status: [''  , Validators.required ],
      LS__Hu_Hunter_Final_Remarks: ['' , Validators.required ],  
     
      
  
    })


  }

  // Guarantor_form

  get hunter_control(){ return this.hunter_form.controls; }

  onSubmit25() {

    // loadn Information Submit
      this.submitted25 = true;

      // stop here if form is invalid
      if (this.hunter_form.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.hunter_form.value))
  }
  

}
