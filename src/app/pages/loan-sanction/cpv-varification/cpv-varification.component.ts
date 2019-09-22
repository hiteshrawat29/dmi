import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-cpv-varification',
  templateUrl: './cpv-varification.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CpvVarificationComponent implements OnInit {

  closeResult: string;

   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

   // RCU_Verification
  RCU_Verification : FormGroup;
  submitted14 = false;

  // RCU_Verification_status
RCU_Verification_status : FormGroup;
submitted15 = false;
LS_CP_Type_of_verification:any;
LS_CP_Agency_Name:any;
LS_CP_CPV_RCU_Results:any;

  constructor(public _fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {

    // RCU_Verification_status 
    this.RCU_Verification = this._fb.group({
      LS_CP_Type_of_verification: ['', Validators.required],
      LS_CP_Agency_Name: ['', Validators.required],
      

    })  

    // RCU_Verification_status

    this.RCU_Verification_status = this._fb.group({
      LS_CP_CPV_RCU_Results: ['', Validators.required],
      LS_CP_CPV_RCU_Remarks: ['', Validators.required],
      LS_CP_Report_Received_Date: ['', Validators.required],
      

    }) 



  }

   // RCU_Verification
   get RCU_Ver_control(){ return this.RCU_Verification.controls; }

   onSubmit14() {
 
     // loadn Information Submit
       this.submitted14 = true;
 
       // stop here if form is invalid
       if (this.RCU_Verification.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RCU_Verification.value))
   }

    // RCU_Verification Status

  get RCU_status_control(){ return this.RCU_Verification_status.controls; }

  onSubmit15() {

    // loadn Information Submit
      this.submitted15 = true;

      // stop here if form is invalid
      if (this.RCU_Verification_status.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RCU_Verification_status.value))
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  

}
