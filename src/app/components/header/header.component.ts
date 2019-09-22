import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent  {
  tokenRemove:any;

  constructor(private router:Router) {}

  logout(){

  this.tokenRemove=localStorage.removeItem('token')
  if(!(this.tokenRemove)){
    return this.router.navigate(['/login'])
    }}
 
}
