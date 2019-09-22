import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html', 
  encapsulation: ViewEncapsulation.None 
})
export class AddEmployeeComponent implements OnInit { 
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_employee
 add_employee : FormGroup;
 submitteduser = false;


 constructor(public _fb: FormBuilder) { }

 ngOnInit() {

     // add_employee
     this.add_employee = this._fb.group({
       Employee_Name: ['' , Validators.required],
       add_employee_Email: ['' , [Validators.required, Validators.email]],
       add_employeeMobile_Number : ['', [Validators.required, Validators.minLength(10)]],  
       add_employeePassword: ['', [Validators.required, Validators.minLength(6)]],
       add_employeeEmployee_Code: ['' , Validators.required],
       add_employeeAgency_Name: ['' , Validators.required],
       add_employeeDeptartment: ['' , Validators.required],
       add_employeeBranch: ['' , Validators.required],
       add_employeeDesignation_Lavel: ['' , Validators.required],
       add_employeeDesignation: ['' , Validators.required],
       add_employee_Date_of_Joining: ['' , Validators.required],
       add_employee_Date_of_relieving: ['' , Validators.required],
       add_employee_Date_of_Birth: ['' , Validators.required],
       add_employee_Pan_No: ['' , Validators.required],
       add_employee_Bank_Name: ['' , Validators.required],
       add_employee_IFSC_Code: ['' , Validators.required],
       add_employee_Assign_Role: ['' , Validators.required],
       add_employee_base_location: ['' , Validators.required],
       add_employee_Remark: ['' ],
       add_employee_Status: [''],
               
      
 
     })

 }

 // add_employee
 get add_employee_control(){ return this.add_employee.controls; }

 onSubmituser() {

   // loadn Information Submit
     this.submitteduser = true;

     // stop here if form is invalid
     if (this.add_employee.invalid) {
         return;
     } 

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_employee.value))
 }



}
