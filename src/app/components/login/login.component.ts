import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  myRecaptcha = new FormControl(false);
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Bank Details
  main_login : FormGroup;
  submitted27 = false;
  Ba_company:any={
    companyId: 1,
    companySlug: "comp1"
  }
  message:any;

  constructor(public _fb: FormBuilder, private apiservice:ApiService,private router:Router) {}

  ngOnInit() {
     // Bank_Details
     this.main_login = this._fb.group({
      Ba_Username: ['' , Validators.required],
      Ba_password: ['' , Validators.required],
      

    })

  }

  // Bank_Details
  get main_login_control(){ return this.main_login.controls; }

  onSubmit27() {

    // loadn Information Submit
      this.submitted27 = true;


      // this.router.navigate(['/mytask'])

    //  stop here if form is invalid
      if (this.main_login.invalid) {
          return;
      } 

    //   // Login Api
      this.apiservice.login({username: this.main_login.value.Ba_Username,password: this.main_login.value.Ba_password, company:this.Ba_company}) 
      .subscribe(
        res=>{
          console.log(res);
        if(res){
            this.router.navigate(['/mytask/app-queue']);
            localStorage.setItem('token',JSON.stringify(res.responseObj.token));
            sessionStorage.setItem('PriveldgeList',JSON.stringify(res.responseObj.userDetails));
            localStorage.setItem('Priveldge',JSON.stringify(res.responseObj.userDetails.rolePrivilegesList));
        }},
          err => {
           this.message=err.error.responseMsg;
           
           console.log(err);
          }
        
      )}
 
    }

