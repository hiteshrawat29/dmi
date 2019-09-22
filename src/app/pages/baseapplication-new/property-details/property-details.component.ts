import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class PropertyDetailsComponent implements OnInit {

   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];


   // property_Details
property_Details : FormGroup;
submitted12 = false;
Pr_Property_Selected:any;
Pr_Unit_Type:any;
Pr_State:any;
Pr_Ownership:any;
Pr_Already_Owned_Property:any;
Pr_Is_First_Property


  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    this.property_Details = this._fb.group({
      Pr_Property_Selected: ['' , Validators.required ], 
      Pr_Unit_Type: ['' , Validators.required ], 
      Pr_Property_Address: ['' , Validators.required ], 
      Pr_Landmark: ['' , Validators.required ], 
      Pr_Pin_Code: ['' , Validators.required ], 
      Pr_Agreement_Value: ['' , Validators.required ], 
      Pr_City: ['' , Validators.required ], 
      Pr_District: ['' , Validators.required ], 
      Pr_State: ['' , Validators.required ], 
      Pr_Ownership: ['' , Validators.required ], 
      Pr_Already_Owned_Property: ['' , Validators.required ],
      Property_Nature_of_Transaction_Category: ['', Validators.required ],  
      Pr_Is_First_Property: ['' , Validators.required ], 
      Pr_Property_Area: ['' , Validators.required ], 
      Pr_MV_of_Property: ['' , Validators.required ], 
      Pr_OCR_Value: ['' , Validators.required ], 
      Pr_Distance_From_Branch: ['' , Validators.required ], 
      Pr_Distance_From_Existing_Residence: ['' , Validators.required ], 

     
       
    })

  }

  // property_Details Submit
  get property_control(){ return this.property_Details.controls; }

  onSubmit12() {

    // loadn Information Submit
      this.submitted12 = true;

      // stop here if form is invalid
      if (this.property_Details.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.property_Details.value))
  }

}
