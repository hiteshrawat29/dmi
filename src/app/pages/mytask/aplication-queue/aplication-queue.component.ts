import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';

@Component({
  selector: 'app-aplication-queue',
  templateUrl: './aplication-queue.component.html', 
})
export class AplicationQueueComponent implements OnInit {

  displayedColumns: string[] = ['sno','lead','application','mytask','sections','cname','loan','rloan','eloan','submission','status','pending','further'];
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
  {sno:1 ,lead:'2515',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:2 ,lead:'2516',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:3 ,lead:'2517',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:4 ,lead:'2518',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:5 ,lead:'2519',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:6 ,lead:'2520',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
  {sno:7 ,lead:'2521',application:'1151221510',mytask:'Complete Underwriting  needs',sections:'Underwriting',cname:'Mr. Sachin Makhija',loan:'Home loan',rloan:'100,000',eloan:' 50,000',submission:'12th Jun 2019 ',status:'Pending',pending:'Nilesh',further:''},
]


