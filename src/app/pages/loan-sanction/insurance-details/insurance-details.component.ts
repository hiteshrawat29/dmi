import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class InsuranceDetailsComponent implements OnInit {

  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Loan_Appraisal
  insurance : FormGroup;
  submitted31 = false;
  General_Agency_Name:any;
  health_Agency_Name:any;
  life_Agency_Name:any;
  Policy_Address:any;
  Insurance_in_the_name_of:any;
  Insurance_Nominee:any;
  nominee_Gender:any;
  nominee_Martial_Status:any;
  nominee_Relation_with_Nominee:any;
  nominee_State:any;
  appointee_Gender:any;
  appointee_Martial_Status:any;
  appointee_Relation_with_appointee:any;
  appointee_State:any;

constructor(public _fb: FormBuilder) { }

ngOnInit() {
  // Loan_Appraisal

  this.insurance = this._fb.group({
    General_Agency_Name: [''  ],  
    General_Tanor: [''  ],  
    General_Premium: [''  ],
    General_Sum_Assured: ['' ],

    health_Agency_Name: ['' ],  
    health_Tanor: ['' ],  
    health_Premium: ['' ],
    health_Sum_Assured: [''  ],


    life_Agency_Name: ['' ],  
    life_Tanor: ['' ],  
    life_Premium: [''],
    life_Sum_Assured: [''],
    Policy_Address:['' ],
    Insurance_in_the_name_of:['' ],
    Insurancerer_Name_if_other:['' ],
    
    
    nominee_Name:[''  , Validators.required],
    nominee_Fathers_name:[''  , Validators.required],
    nominee_Gender:[''  , Validators.required],
    nominee_DOB:[''  , Validators.required],
    nominee_Age:[''  , Validators.required],
    nominee_Martial_Status :[''  , Validators.required],
    nominee_Relation_with_Nominee:[''  , Validators.required],
    nominee_Address:[''  , Validators.required],
    nominee_Landmark:[''  , Validators.required],
    nominee_Pin_Code:[''  , Validators.required],
    nominee_City:[''  , Validators.required],
    nominee_District:[''  , Validators.required],
    nominee_State:[''  , Validators.required],
    Insurance_Nominee:[''  , Validators.required],


    appointee_Name:[''  , Validators.required],
    appointee_Fathers_name:[''  , Validators.required],
    appointee_Gender:[''  , Validators.required],
    appointee_DOB:[''  , Validators.required],
    appointee_Age:[''  , Validators.required],
    appointee_Martial_Status :[''  , Validators.required],
    appointee_Relation_with_appointee:[''  , Validators.required],
    appointee_Address:[''  , Validators.required],
    appointee_Landmark:[''  , Validators.required],
    appointee_Pin_Code:[''  , Validators.required],
    appointee_City:[''  , Validators.required],
    appointee_District:[''  , Validators.required],
    appointee_State:[''  , Validators.required],

    

     


  })
  

}

 // Loan_Appraisal

 get insurance_control(){ return this.insurance.controls; }

 onSubmit31() {

   // loadn Information Submit
     this.submitted31 = true;

     // stop here if form is invalid
     if (this.insurance.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.insurance.value))
 }

}
