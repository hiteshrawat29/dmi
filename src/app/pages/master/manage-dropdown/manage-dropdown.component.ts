import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

 


@Component({
  selector: 'app-manage-dropdown',
  templateUrl: './manage-dropdown.component.html',
  styleUrls: ['./manage-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ManageDropdownComponent implements OnInit {

  displayedColumns: string[] = ['sno','lead','application','mytask','sections'];
  mytask = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.mytask.paginator = this.paginator;
    this.mytask.sort = this.sort;
  }
    //For filter the materail table
public doFilter = (value: string) => {
  this.mytask.filter = value.trim().toLocaleLowerCase();
}
}

//static data
const ELEMENT_DATA=[
  {sno:1 ,type:'Account Type',value:'Saving',status:'Active',action:'Underwriting'},
  {sno:2 ,type:'Account Type',value:'Saving',status:'In-Active',action:'Underwriting'},
  
]

