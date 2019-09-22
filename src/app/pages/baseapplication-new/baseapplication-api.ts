import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { APIConstant } from 'src/app/constants/apiConstants';

@Injectable({
  providedIn: "root"
})

export class BaseApplicationApiService {

  private url = environment.apiUrl ;

  constructor(private http: HttpClient) {}

//POST REQUEST
//LOAN INFORMATION
  loanInfo(loanParams:any):Observable<any>{
    return this.http.post(`${this.url}${APIConstant.LOANINFO}`,loanParams)
  }

//Personal Details

personalDet(detailParams:any):Observable<any>{
return this.http.post(`${this.url}${APIConstant.PERSONALDETAILS}`,detailParams)
}

//ITR income details
itrIncome(itrParams:any):Observable<any>{
  return this.http.post(`${this.url}${APIConstant.UPDATEITR}`,itrParams)
}

//Salary income details
salaryIncome(incParams:any):Observable<any>{
  return this.http.post(`${this.url}${APIConstant.UPDATESALARYINC}`,incParams)
}

//Liability and asset
liAndAsset(assetParams:any):Observable<any>{
  return this.http.post(`${this.url}${APIConstant.LIANDASSET}`,assetParams)
}

//GENERATE OTP

generateOtp(otpParams:any):Observable<any>{
return this.http.post(`${this.url}${APIConstant.GENERATEOTP}`,otpParams)
}

//VERIFY OTP

verifyOtp(verifyParams:any):Observable<any>{
  return this.http.post(`${this.url}${APIConstant.VERIFYOTP}`,verifyParams)
}

//GET REQUEST

  //LOAN INFORMATION
  getInfo(){
    return this.http.get<any>(`${this.url}${APIConstant.GETLOAN_INFO}`)
  }

  //GET Lead Information
  getLeadInfo(){
    return this.http.get<any>(`${this.url}${APIConstant.GETLEADINFO}`)
  }
  //Get Personal Details
  getPersonal(){
    return this.http.get<any>(`${this.url}${APIConstant.GETPERSONAL_DET}`)
  }
  
  //Get itr income
  getITR(){
    return this.http.get<any>(`${this.url}${APIConstant.GETITRINCOME}`)
  }

  //Get salary income
  getSalary(){
    return this.http.get<any>(`${this.url}${APIConstant.GETSALARYINCOME}`)
  }

  //Get Liability and asset
  getLiabAndAsset(){
    return this.http.get<any>(`${this.url}${APIConstant.GETLIABANDASSET}`)
  }

  //Dropdowns
  masterDropdowns(){
    return this.http.get<any>(`${this.url}${APIConstant.MASTERS}`)
  }

  //LOAN PRODUCT AND PURPOSE DROPDOWN
  loanProduct(){
    return this.http.get<any>(`${this.url}${APIConstant.LOANPRODUCT}`)
  }

}
