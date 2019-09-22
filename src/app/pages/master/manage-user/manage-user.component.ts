import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html', 
})
export class ManageUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
