import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';  
import { MatPaginator, MatTableDataSource,MatSort } from '@angular/material';


@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MytaskComponent implements OnInit{ 
  displayedColumns: string[] = ['sno','application','subject','pending','type','status','assignee','accountable','create','action','further'];
  mytask = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.mytask.paginator = this.paginator;
    this.mytask.sort = this.sort;
  }
  //for filter 
  public doFilter = (value: string) => {
    this.mytask.filter = value.trim().toLocaleLowerCase();
  }
}
//static data
const ELEMENT_DATA=[
  {sno:1,application:'1151221510',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:2,application:'1151221511',subject:'Need to verified DOB',pending:'Debit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:3,application:'1151221512',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:4,application:'1151221513',subject:'Need to verified DOB',pending:'Debit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:5,application:'1151221514',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:6,application:'1151221515',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},  
  {sno:7,application:'1151221516',subject:'Need to verified DOB',pending:'Debit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:8,application:'1151221517',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},  
  {sno:9,application:'1151221518',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:10,application:'1151221519',subject:'Need to verified DOB',pending:'Debit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''}, 
  {sno:11,application:'1151221520',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''},
  {sno:12,application:'1151221521',subject:'Need to verified DOB',pending:'Credit',type:'Document Missing',status:'Pending',assignee:'Rajesh Mahta',accountable:'Ganan Walia',create:'12th Jun 2019',action:'',further:''}
]

