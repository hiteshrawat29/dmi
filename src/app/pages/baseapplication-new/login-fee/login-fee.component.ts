import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-login-fee',
  templateUrl: './login-fee.component.html',
  encapsulation: ViewEncapsulation.None

})
export class LoginFeeComponent implements OnInit {
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

   // property_Details
Login_Fee : FormGroup;
submitted13 = false;
Lo_Payment_Mode:any;
Lo_Status:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    this.Login_Fee = this._fb.group({
      Lo_Payment_Mode: ['' , Validators.required ],  
      Lo_Issued_By: ['' , Validators.required ], 
      Lo_Amount: ['' , Validators.required ], 
      Lo_Drawn_On: ['' , Validators.required ], 
      Lo_Drawn_Branch: ['' , Validators.required ], 
      Lo_Cheque_DD_NEFT_Ref_No: ['' , Validators.required ],
      Lo_Cheque_DD_NEFT_Ref_Date: ['' , Validators.required ], 
      Lo_Account_No: ['' , Validators.required ], 
      Lo_Deposit_With: ['' , Validators.required ], 
      Lo_Deposit_Date: ['' , Validators.required ], 
      Lo_Fees_Amount: ['' , Validators.required ], 
      Lo_Tax_Amount: ['' , Validators.required ], 
      Lo_Status: ['' , Validators.required ], 

      
       
    })


  }

  // Login Submit
  get Login_control(){ return this.Login_Fee.controls; }

  onSubmit13() {

    // Login Submit
      this.submitted13 = true;

      // stop here if form is invalid
      if (this.Login_Fee.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Login_Fee.value))
  }

}
