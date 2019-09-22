import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 



@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class EmploymentDetailsComponent implements OnInit {
// error list
requireerror: any = ['This is required'];
minerror: any = ['Min. least 10 characters'];
minphone: any = ['Min. least 7 characters'];
min100error: any = ['Min. least 50 characters'];
emailerror: any = ['Email must be a valid email address']; 

// Employment 

Employment_information : FormGroup;
submitted4 = false;
Ca_Profile_Segment:any;
Ca_Sub_Profile:any
Ca_Sector:any;
Ca_Industry:any;
Ca_State:any;
As_Constitution:any;
As_Industry:any;
As_State:any;

  constructor(public _fb: FormBuilder) {   }

  ngOnInit() {
    // Personal_form
    this.Employment_information = this._fb.group({
      Ca_Profile_Segment: ['', Validators.required],
      Ca_Sub_Profile: ['', Validators.required],
      Ca_Company_Name: ['', Validators.required],            
      Ca_Sector: ['', Validators.required],
      Ca_Industry: ['', Validators.required],
      Ca_Employee_ID: [''],
      Ca_Designation: ['', Validators.required],
      Ca_Date_of_Joining: ['', Validators.required],
      Ca_Total_Experience: ['', Validators.required],
      Ca_Retirement_Age: ['', Validators.required],
      Ca_Official_mail_ID: ['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,4}$")],
      Ca_Office_Address: ['', Validators.required],
      Ca_Landmark: ['', Validators.required],
      Ca_Pin_Code: ['', Validators.required],
      Ca_City: ['', Validators.required],
      Ca_District: ['', Validators.required],
      Ca_State: ['', Validators.required],
      Ca_Landline_No: ['', Validators.minLength(10)],
      As_Business_Name: ['', Validators.required],  
      As_Constitution: ['', Validators.required],
      As_Industry: ['', Validators.required],
      As_Date_of_Incorporation: ['', Validators.required],
      As_Business_Vinatge_in_Year: ['', Validators.required],
      As_GST_VAT_Registration: ['', Validators.required],
      As_Business_Address: ['', Validators.required],
      As_Landmark: ['', Validators.required],
      As_Pin_Code: ['', Validators.required],
      As_City: ['', Validators.required],
      As_District: ['', Validators.required],
      As_State: ['', Validators.required],
      As_Landline_No: ['', Validators.minLength(10)],
      
           
    })
  }

  // Employment_information
  get Employment_control(){ return this.Employment_information.controls; }

  onSubmit4() {

    // loadn Information Submit
      this.submitted4 = true;

      // stop here if form is invalid
      if (this.Employment_information.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Employment_information.value))
  }

}
