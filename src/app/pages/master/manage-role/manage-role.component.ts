import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;


@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ManageRoleComponent implements OnInit {
  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  minpass: any = ['Password Must be Min. 6 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

    // add_role
 add_role : FormGroup;
 submittedrole = false;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
    // add_role
    this.add_role = this._fb.group({
      add_role_name: ['' , Validators.required],
      role_copy_from: [''],
     
              
     

    })
  }

  // add_role
  get add_role_control(){ return this.add_role.controls; }

  onSubmitrole() {

    // loadn Information Submit
      this.submittedrole = true;

      // stop here if form is invalid
      if (this.add_role.invalid) {
          return;
      } 

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.add_role.value))
  }


}
