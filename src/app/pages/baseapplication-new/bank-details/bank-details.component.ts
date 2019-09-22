import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BankDetailsComponent implements OnInit {
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Bank Details
  Bank_Details : FormGroup;
  submitted6 = false;

  // transtion_Details
transtion_Details : FormGroup;
submitted7 = false;
Ba_Bank_Name:any;
Ba_Account_Type:any;
Ba_Salary_Credit:any;
Tr_Month:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    // Bank_Details
    this.Bank_Details = this._fb.group({
      Ba_Bank_Name: ['' , Validators.required],
      Ba_Account_No: ['' , Validators.required],
      Ba_Account_Holder_Name: ['' , Validators.required],
      Ba_Account_Type: ['' , Validators.required],
      Ba_Salary_Credit: ['' , Validators.required],
      No_Of_Salary_credited_in__past_6_monthes: ['' , Validators.required],
     

    })

    // Transtion_Details
    this.transtion_Details = this._fb.group({
      Tr_Month: ['' , Validators.required],
      Tr_Average_credit_Balance: ['' , Validators.required],
      Tr_ATM_Withdrawal: ['' , Validators.required],
      Tr_Credit_Card_Payment: ['' , Validators.required],
      Tr_Bulk_Entry_Amount: ['' , Validators.required],
      Tr_Balances_On_10th: ['' ],
      Tr_Balances_On_20th: ['' ],
      Tr_Balances_On_30th: [''],
      Tr_IW_Cheque_return: ['' , Validators.required],
      Tr_OW_Cheque_return: ['' , Validators.required], 

    })


  }

  // Bank_Details
  get bank_control(){ return this.Bank_Details.controls; }

  onSubmit6() {

    // loadn Information Submit
      this.submitted6 = true;

      // stop here if form is invalid
      if (this.Bank_Details.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Bank_Details.value))
  }

   // transtion_Details
   get transtion_control(){ return this.transtion_Details.controls; }

   onSubmit7() {
 
     // loadn Information Submit
       this.submitted7 = true;
 
       // stop here if form is invalid
       if (this.transtion_Details.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.transtion_Details.value))
   }

}
