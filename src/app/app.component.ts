import { Component, ViewChild, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None


     
})
export class AppComponent  implements OnInit{
  title = 'dmi';  
  
  constructor(public router: Router){}
  ngOnInit() {
    
  }
	 
}


