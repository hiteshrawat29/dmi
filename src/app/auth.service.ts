import { Injectable } from "@angular/core";
import {Router, Route, CanLoad} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService implements CanLoad {
  

  constructor(private router: Router) {}

  //for preventing routing based on token in localStorage
  canLoad(route: Route): boolean {

   var token= localStorage.getItem('token');
   if(token){
  return true;
  }
  else{
    this.router.navigate(['/login'])
    return false
  }
  }}
