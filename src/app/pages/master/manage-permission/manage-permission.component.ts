import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manage-permission',
  templateUrl: './manage-permission.component.html',
  styleUrls: ['./manage-permission.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManagePermissionComponent implements OnInit {
  closeResult: string; 

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

    
  }

  open(popuppermissin) {
    this.modalService.open(popuppermissin).result.then((result) => {
     
    });
  }

  

}
