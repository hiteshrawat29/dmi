import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { environment } from 'src/environments/environment';
import { APIConstant } from './constants/apiConstants';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  })
};

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private url = environment.apiUrl ;

  constructor(private http: HttpClient) {}

  //Post request 
  login(model:any): Observable<any> {
    return this.http.post( `${this.url}${APIConstant.LOGIN_API}`,model, httpOptions);
  }

  //ForgotPassword
  forgotPassowrd(forgotParams:any){
    return this.http.post<any>(`${this.url}${APIConstant.FORGOTPASSWORD}`,forgotParams);
  }

}
