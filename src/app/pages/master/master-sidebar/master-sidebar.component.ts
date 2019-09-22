import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';

import Swal from 'sweetalert2'  
declare var $: any;

@Component({
  selector: 'app-master-sidebar',
  templateUrl: './master-sidebar.component.html',
  styleUrls: ['./master-sidebar.component.css']
})
export class MasterSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   /* $('.sidebar').slimScroll({
      height: '700'
    });
    */

  }

  

}
