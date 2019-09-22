import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-technical-firing',
  templateUrl: './technical-firing.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TechnicalFiringComponent implements OnInit {
  
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

   // RCU_Verification
    Technical_Firing : FormGroup;
    submitted26 = false;

    // Technical_Firing_report
    Technical_Firing_report : FormGroup;
    submitted27 = false;
    Te_Te_Agency_Name:any;

  constructor(public _fb: FormBuilder , private modalService: NgbModal) { }

  ngOnInit() {

    // RCU_Verification_status
    this.Technical_Firing = this._fb.group({
      Te_Te_Agency_Name: ['', Validators.required],
      
    }) 
    
    
    // Technical_Firing_report
    this.Technical_Firing_report = this._fb.group({
      Te_Te_Agency_report: ['', Validators.required],
       

    }) 

  }

  // RCU_Verification
  get Firing_control(){ return this.Technical_Firing.controls; }

  onSubmit26() {

    // loadn Information Submit
      this.submitted26 = true;

      // stop here if form is invalid
      if (this.Technical_Firing.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Technical_Firing.value))
  }
 

  // Technical_Firing_report
  get Firing_report_control(){ return this.Technical_Firing_report.controls; }

  onSubmit27() {

    // loadn Information Submit
      this.submitted27 = true;

      // stop here if form is invalid
      if (this.Technical_Firing_report.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Technical_Firing_report.value))
  }


  open5(Technical_Firin) {
    this.modalService.open(Technical_Firin, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
    });
  }
  

  
}
