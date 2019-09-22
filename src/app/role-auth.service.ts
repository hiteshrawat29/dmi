import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthService implements CanActivate {

  constructor() { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const userDetail=JSON.parse(sessionStorage.getItem('PriveldgeList'));
     if(userDetail.roleList[0].roleName==='LOAN OFFICER'){
return true;
     }
     
     else{
       console.log("Not a admin");
       return false
     }
   
  }
  
}
