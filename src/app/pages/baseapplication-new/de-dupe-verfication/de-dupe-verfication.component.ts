import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-de-dupe-verfication',
  templateUrl: './de-dupe-verfication.component.html',
  encapsulation: ViewEncapsulation.None 
})
export class DeDupeVerficationComponent implements OnInit {

  closeResult: string;

   


  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // De-Dupe Verification

De_Dupe_Verification: FormGroup;
submitted3 = false;
showMsg: boolean = false;
 

  constructor(public _fb: FormBuilder, private modalService: NgbModal) { }

  

  ngOnInit() {

    // Personal_form
    this.De_Dupe_Verification = this._fb.group({
      Ve_Result: ['', Validators.required],
      Ve_Remark: ['', [Validators.required, Validators.minLength(50)]],
       
    })


  }
  

  // De_Dupe_Verification
  get dedup_contact(){ return this.De_Dupe_Verification.controls; }

  onSubmit3() {

    // loadn Information Submit
      this.submitted3 = true;

      // stop here if form is invalid
      if (this.De_Dupe_Verification.invalid) {
          return;
      }

      this.showMsg= true;

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.De_Dupe_Verification.value))
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
