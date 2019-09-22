import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 
// variable Show and hide 
`Sub_Profile`; 


@Component({
  selector: 'app-guarantor-details',
  templateUrl: './guarantor-details.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class GuarantorDetailsComponent implements OnInit {
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

   // Guarantor_form
  Guarantor_form : FormGroup;
  submitted24 = false;
  LS_Gu_DOB:any;
  LS_Gu_Nationality:any;
  LS_Gu_Religion:any;
  LS_Gu_Qualification:any;
  LS_Gu_Residence_Type:any;
  LS_Gu_Address_Proof:any;
  LS_Gu_State:any;
  LS_Gu_Gender:any;
  LS_Gu_DOB_Proof:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
    // Guarantor_form

    this.Guarantor_form = this._fb.group({
      LS_Gu_First_Name: [''  , Validators.required],
      LS_Gu_Middle_Name: [''],
      LS_Gu_Last_Name: [''],
      LS_Gu_DOB: [''  , Validators.required],
      LS_Gu_Age: [''  , Validators.required],
      LS_Gu_DOB_Proof: ['' , Validators.required],
      LS_Gu_Contact_No: [''  , Validators.required],
      LS_Gu_Email_ID: [''  , Validators.email],
      LS_Gu_Gender: [''  , Validators.required],
      LS_Gu_Nationality: [''  , Validators.required],
      LS_Gu_Religion: [''  , Validators.required],
      LS_Gu_Qualification: [''  , Validators.required],
      LS_Gu_Relation_with_applicant: [''  , Validators.required],
      LS_Gu_Residence_Type: [''  , Validators.required],
      LS_Gu_Address_Proof: [''  , Validators.required],
      LS_Gu_Address: [''  , Validators.required],
      LS_Gu_Landmark: [''  , Validators.required],
      LS_Gu_Pin_Code: [''  , Validators.required],
      LS_Gu_City: [''  , Validators.required],
      LS_Gu_District: [''  , Validators.required],
      LS_Gu_State: [''  , Validators.required], 
      
  
    })


  }

  // Guarantor_form

  get Guarantor_control(){ return this.Guarantor_form.controls; }

  onSubmit24() {

    // loadn Information Submit
      this.submitted24 = true;

      // stop here if form is invalid
      if (this.Guarantor_form.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Guarantor_form.value))
  }
  

}
