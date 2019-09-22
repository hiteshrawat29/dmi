import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-underwriting-details',
  templateUrl: './underwriting-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UnderwritingDetailsComponent implements OnInit {

  closeResult: string;

// error list
requireerror: any = ['This is required'];
minerror: any = ['Min. least 10 characters'];
minphone: any = ['Min. least 7 characters'];
min100error: any = ['Min. least 50 characters'];
emailerror: any = ['Email must be a valid email address'];


// RCU_Verification_status
Underwriting : FormGroup;
submitted18 = false;


// Underwriting Status Updates
Underwriting_status : FormGroup;
submitted19 = false;


// Underwriting_recommend
Underwriting_recommend : FormGroup;
submitted20 = false;


// Underwriting Status Review
Underwriting_review : FormGroup;
submitted21 = false;

// Underwriting Status Approve
Underwriting_approve : FormGroup;
submitted22 = false;

// Underwriting Status Approve
Underwriting_secline : FormGroup;
submitted23 = false;
LS_Un_Deviation_Head:any;
LS_Un_Deviation:any;
LS_Un_Approval_Authority:any;
LS_Un_Mitigating_Factor:any;

  constructor(public _fb: FormBuilder , private modalService: NgbModal) { }

  ngOnInit() {

    // Underwriting

    this.Underwriting = this._fb.group({
      LS_Un_Deviation_Head: [''  , Validators.required],  
      LS_Un_Deviation: [''  , Validators.required],
      LS_Un_Approval_Authority: [''  , Validators.required],
      LS_Un_Mitigating_Factor: [''  , Validators.required],
       
       


    })


    // Underwriting_status 

    this.Underwriting_status = this._fb.group({
      LS_Un_Status: [''  , Validators.required],  
      LS_Un_Justifcation: [''  , [Validators.required, Validators.minLength(50)]],  
  
    })

    // Underwriting_recommend 

    this.Underwriting_recommend = this._fb.group({
      un_recnd_assigned: [''  , Validators.required],  
      un_recnd_remark: [''  , [Validators.required, Validators.minLength(50)]],
      
  
    })


    // Underwriting_review 

    this.Underwriting_review = this._fb.group({
      Underwriting_review_align_top: [''  , Validators.required],  
      Underwriting_review_review: [''  , [Validators.required, Validators.minLength(50)]],
      
  
    })

    // Underwriting_approve

    this.Underwriting_approve = this._fb.group({
      Underwriting_apprv_review: [''  , [Validators.required, Validators.minLength(50)]],  
      
  
    })

    // Underwriting_approve

    this.Underwriting_secline = this._fb.group({
      Underwriting_secline_remark: [''  , [Validators.required, Validators.minLength(50)]],  
      
  
    })

  }

  // Underwriting

  get underwriting_control(){ return this.Underwriting.controls; }

  onSubmit18() {

    // loadn Information Submit
      this.submitted18 = true;

      // stop here if form is invalid
      if (this.Underwriting.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting.value))
  }

   // Underwriting_status

   get underwriting_sts_control(){ return this.Underwriting_status.controls; }

   onSubmit19() {
 
     // loadn Information Submit
       this.submitted19 = true;
 
       // stop here if form is invalid
       if (this.Underwriting_status.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting_status.value))
   }


   // Underwriting_status

   get underwriting_rcd_control(){ return this.Underwriting_recommend.controls; }

   onSubmit20() {
 
     // loadn Information Submit
       this.submitted20 = true;
 
       // stop here if form is invalid
       if (this.Underwriting_recommend.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting_recommend.value))
   }

   // Underwriting_review

   get underwriting_rview_control(){ return this.Underwriting_review.controls; }

   onSubmit21() {
 
     // loadn Information Submit
       this.submitted21 = true;
 
       // stop here if form is invalid
       if (this.Underwriting_review.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting_review.value))
   }


   // Underwriting_approve

   get underwriting_approv_control(){ return this.Underwriting_approve.controls; }

   onSubmit22() {
 
     // loadn Information Submit
       this.submitted22 = true;
 
       // stop here if form is invalid
       if (this.Underwriting_approve.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting_approve.value))
   }


   // Underwriting_decline

   get underwriting_decline_control(){ return this.Underwriting_secline.controls; }

   onSubmit23() {
 
     // loadn Information Submit
       this.submitted23 = true;
 
       // stop here if form is invalid
       if (this.Underwriting_secline.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Underwriting_secline.value))
   }


   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
    });
  }

  open1(Recommend) {
    this.modalService.open(Recommend, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    });
  }

  open2(Review) {
    this.modalService.open(Review, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    });
  }

  open3(Approve) {
    this.modalService.open(Approve, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    });
  }


  open4(Decline) {
    this.modalService.open(Decline, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    });
  }

 



}
