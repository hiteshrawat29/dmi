import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-document-checklist',
  templateUrl: './document-checklist.component.html',
  encapsulation: ViewEncapsulation.None 
})
export class DocumentChecklistComponent implements OnInit {
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Bank Details
  document_checklist : FormGroup;
  submitted25 = false;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    // Bank_Details
    this.document_checklist = this._fb.group({
      PF_Ch_1: ['' ],
PF_Ch_2: ['' ],
PF_Ch_3: ['' ],
PF_Ch_4: ['' ],
PF_Ch_5: ['' ],
PF_Ch_6: ['' ],
Signe_1: ['' ],
Signe_2: ['' ],
Signe_3: ['' ],
Signe_4: ['' ],
Signe_5: ['' ],
Signe_6: ['' ],
Compl_1: ['' ],
Compl_2: ['' ],
Compl_3: ['' ],
Compl_4: ['' ],
Compl_5: ['' ],
Compl_6: ['' ],
AgeP_1: ['' ],
AgeP_2: ['' ],
AgeP_3: ['' ],
AgeP_4: ['' ],
AgeP_5: ['' ],
AgeP_6: ['' ],
Curre_1: ['' ],
Curre_2: ['' ],
Curre_3: ['' ],
Curre_4: ['' ],
Curre_5: ['' ],
Curre_6: ['' ],
Ident_1: ['' ],
Ident_2: ['' ],
Ident_3: ['' ],
Ident_4: ['' ],
Ident_5: ['' ],
Ident_6: ['' ],
Signa_1: ['' ],
Signa_2: ['' ],
Signa_3: ['' ],
Signa_4: ['' ],
Signa_5: ['' ],
Signa_6: ['' ],
Salar_1: ['' ],
Salar_2: ['' ],
Salar_3: ['' ],
Salar_4: ['' ],
Salar_5: ['' ],
Salar_6: ['' ],
SENP_1: ['' ],
SENP_2: ['' ],
SENP_3: ['' ],
SENP_4: ['' ],
SENP_5: ['' ],
SENP_6: ['' ],
Form_1: ['' ],
Form_2: ['' ],
Form_3: ['' ],
Form_4: ['' ],
Form_5: ['' ],
Form_6: ['' ],
Prope_1: ['' ],
Prope_2: ['' ],
Prope_3: ['' ],
Prope_4: ['' ],
Prope_5: ['' ],
Prope_6: ['' ],
remarks1: ['' ],
remarks2: ['' ],
remarks3: ['' ],
remarks4: ['' ],
remarks5: ['' ],
remarks6: ['' ],
remarks7: ['' ],
remarks8: ['' ],
remarks9: ['' ],
remarks10: ['' ],
remarks11: ['' ],


      
     

    })

  }

  // Bank_Details
  get pf_cheque_control(){ return this.document_checklist.controls; }

  onSubmit25() {

    // loadn Information Submit
      this.submitted25 = true;

      // stop here if form is invalid
      if (this.document_checklist.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.document_checklist.value))
  }


}
