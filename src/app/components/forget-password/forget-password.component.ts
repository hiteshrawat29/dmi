import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgetPasswordComponent implements OnInit {
  
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];


   // Bank Details
   forget_form : FormGroup;
   submitted28 = false;

  constructor(public _fb: FormBuilder,private api:ApiService) { }

  ngOnInit() {

     // Bank_Details
     this.forget_form = this._fb.group({
      forget_user: ['' , Validators.required],
      forget_contury: ['' , Validators.required],
      
      

    })

  }

  // Bank_Details
  get forget_control(){ return this.forget_form.controls; }

  forgotPswrd() {

    // loadn Information Submit
      this.submitted28 = true;

      // stop here if form is invalid
      // if (this.forget_form.invalid) {
      //     return;
      // } 
// this.forgotPassword();
      
    }

    //Forgot Password API
    // forgotPassword(){
    //   this.api.forgotPassowrd({
    //       userID:null,
    //       userName: this.forget_form.value.forget_user,
    //       oldPassword:null,
    //       newPassword:null,
    //       verificationLink:null
  
    //   }).subscribe(res=>{
    //     console.log(res),
    //     err=>{
    //       console.log(err)
    //     }
    //   })
    // }

}
