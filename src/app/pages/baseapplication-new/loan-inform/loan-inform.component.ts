import { Component, OnInit} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { BaseApplicationApiService } from '../baseapplication-api';


@Component({
  selector: 'app-loan-inform',
  templateUrl: './loan-inform.component.html',
  styleUrls: ['./loan-inform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoanInformComponent implements OnInit {
 

 // error list
 requireerror: any = ['This is required'];
 minerror: any = ['Min. least 10 characters'];
 minphone: any = ['Min. least 7 characters'];
 min100error: any = ['Min. least 50 characters'];
 emailerror: any = ['Email must be a valid email address'];
 minTenureError:any=['Minimum tenure value '];
 maxTenureError:any=['Maximum tenure value '];
 minLoanError:any=['Minimum loan amount value is '];
 maxLoanError:any=['Maximum loan amount value is ']


  // leadInformation

 leadInformation:any= FormGroup;
 submitted = false;
 maxAmount:any;
 minAmount:any;
 maxTenure:any;
 minTenure:any;
 purpose:any=[];
 purpose1:any=[];
 product:any=[];
 product1:any=[];
 scheme:any=[];
 interest:any=[];
 sourcingChannel:any=[];
 channelPartner:any=[];
 loanType:any=[];
 branch:any=[];
 amountminError:any;
 tenorError:any;

  constructor(public _fb: FormBuilder, private baseapi:BaseApplicationApiService) { }

  ngOnInit() {
this.dropdowns();
this.loanPrduct();
this.getLoanInfo();
this.getLeadInfo();
  //  this.permissions();
    this.leadInformation = this._fb.group({
      leadBranch: ['', Validators.required],
      LINameFirstName: ['', Validators.required],
      LINameMidleName: [''],
      LILastName: [''],
      LIcontactnumber: ['', [Validators.required, Validators.minLength(10)]],            
      LITypeofLoan: ['' , Validators.required],
      LILocation: ['' , Validators.required],
      LIEmail: ['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,4}$")],
      LILoanProduct: [[], Validators.required], 
      LILoanPurpose: ['', Validators.required], 
      LILoanScheme: ['', Validators.required], 
      LILoanAmountRequest: ['', [Validators.required,(control: AbstractControl) => Validators.min(this.minAmount)(control),(control: AbstractControl) => Validators.max(this.maxAmount)(control)]],
      LITenor: ['',[Validators.required,(control: AbstractControl) => Validators.min(this.minTenure)(control),(control: AbstractControl) => Validators.max(this.maxTenure)(control)]],
      LIInterestType: ['', Validators.required],
      LIaffordable_EMI: ['', Validators.required], 
      LISourcingChannelPartner: ['', Validators.required],
      LIChannelPartnerName: ['', Validators.required],
      LISalesOfficerEmpID: [''],
      LISalesOfficerEmpName: [''],
      LICreditOfficerEmpid: ['' , Validators.required],
      LICreditOfficerName: ['' , Validators.required],
      Rules_Based_status: ['' , Validators.required], 
      /*password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]  */

    })
    this.leadInformation.controls['LINameFirstName'].disable();
    this.leadInformation.controls['LINameMidleName'].disable();
    this.leadInformation.controls['LILastName'].disable();
    this.leadInformation.controls['LIcontactnumber'].disable();
    this.leadInformation.controls['LITypeofLoan'].disable();
    this.leadInformation.controls['LILocation'].disable();
    this.leadInformation.controls['LIEmail'].disable();
    this.leadInformation.controls['leadBranch'].disable();
  //  this.leadInformation.controls['LISalesOfficerEmpID'].disable();
  //  this.leadInformation.controls['LISalesOfficerEmpName'].disable();
  //  this.leadInformation.controls['LICreditOfficerEmpid'].disable();
  //  this.leadInformation.controls['LICreditOfficerName'].disable();
  }

  
  // loadn Information Submit
  get f() { return this.leadInformation.controls; }

  onSubmit() {
  // loan Information Submit
      this.submitted = true;
 //  stop here if form is invalid
   
 
    this.updateLoanInfo();
    }


updateLoanInfo(){
  const leadInfo=this.leadInformation.value;
  this.baseapi.loanInfo({leadID: 4,
  draftDetailID: 39,userID: null,storageType: "LOAN_INFORMATION",loanApplicationObj:
  {loanApplicationID:2121,leadID:1,loanProductTypeDetailID:leadInfo.LILoanProduct,
    loanPurposeTypeDetailID:leadInfo.LILoanPurpose,loanSchemeTypeDetailID:leadInfo.LILoanScheme,
    loanAmountRequest:leadInfo.LILoanAmountRequest,tenure:leadInfo.LITenor,interestTypeTypeDetailID:leadInfo.LIInterestType,
    affordableEMI:leadInfo.LIaffordable_EMI, sourcingChannelPartnerTypeDetailID:leadInfo.LISourcingChannelPartner,
    channelPartnerNameTypeDetailID:leadInfo.LIChannelPartnerName,salesOfficerEmpID:leadInfo.LISalesOfficerEmpID,
    salesOfficerEmpName:leadInfo.LISalesOfficerEmpName,
    creditOfficerEmpID:leadInfo.LICreditOfficerEmpid,creditOfficerEmpName:leadInfo.LICreditOfficerName}}    
  )
    .subscribe((err)=>
      {
        console.log(err)
      }        
    )  
}

      //filling the form by getting the data from api 
 getLoanInfo(){
 this.baseapi.getInfo()
  .subscribe((res)=>
{ //constant
  const info=res.responseObj.loanApplicationObj;
  this.leadInformation.controls['LILoanProduct'].setValue(info.loanProductTypeDetailID);
  this.leadInformation.controls['LILoanPurpose'].setValue(info.loanPurposeTypeDetailID);
  this.leadInformation.controls['LILoanScheme'].setValue(info.loanSchemeTypeDetailID);
   this.leadInformation.controls['LILoanAmountRequest'].setValue(info.loanAmountRequest);
   this.leadInformation.controls['LITenor'].setValue(info.tenure);
   this.leadInformation.controls['LIInterestType'].setValue(info.interestTypeTypeDetailID);
   this.leadInformation.controls['LIaffordable_EMI'].setValue(info.affordableEMI);
   this.leadInformation.controls['LISourcingChannelPartner'].setValue(info.sourcingChannelPartnerTypeDetailID);
   this.leadInformation.controls['LIChannelPartnerName'].setValue(info.channelPartnerNameTypeDetailID);
   this.leadInformation.controls['LISalesOfficerEmpID'].setValue(info.salesOfficerEmpID);
   this.leadInformation.controls['LISalesOfficerEmpName'].setValue(info.salesOfficerEmpName);
   this.leadInformation.controls['LICreditOfficerEmpid'].setValue(info.creditOfficerEmpID);
   this.leadInformation.controls['LICreditOfficerName'].setValue(info.creditOfficerEmpName);
  if(this.leadInformation.value.LISourcingChannelPartner==53){
    this.leadInformation.controls['LIChannelPartnerName'].setValue('');
    this.leadInformation.controls['LIChannelPartnerName'].disable();
  }
  if(this.leadInformation.value.LILoanProduct==1){
   this.purpose=this.product1[0].loanPurposeList;
   this.maxAmount=this.product1[0].maxAmount;
   this.minAmount=this.product1[0].minAmount;
   this.maxTenure=this.product1[0].maxTenure;
   this.minTenure=this.product1[0].minTenure;
  }
  else{
    this.purpose=this.purpose1[0].loanPurposeList;
    this.maxAmount=this.purpose1[0].maxAmount;
    this.minAmount=this.purpose1[0].minAmount;
    this.maxTenure=this.purpose1[0].maxTenure;
    this.minTenure=this.purpose1[0].minTenure;
  }
  
  },
  err=>console.log(err)
      ); 
      }
  
      //dropdowns
  dropdowns(){
    this.baseapi.masterDropdowns()
    .subscribe(res =>{
   
      // this.purpose=res.responseObj.LoanPurpose;
      // this.product=res.responseObj.LoanProduct;
      this.scheme=res.responseObj.LoanScheme;
      this.interest=res.responseObj.LoanInformationInterestType;
      this.sourcingChannel=res.responseObj.SourcingChannelPartner;
      this.channelPartner=res.responseObj.ChannelPartnerName;
      this.loanType=res.responseObj.LoanType;
      this.branch=res.responseObj.Branch;
     
      // console.log(res.responseObj.ChannelPartnerName)
    },
    err=>console.log(err))
  }

  //dropdowns for pupose and product
  loanPrduct(){
    this.baseapi.loanProduct()
    .subscribe((res)=>{
      let prod:any={};
      this.product=res.responseObj;
      this.product.forEach((item) => {
         prod= item;
        if(prod.productID === 1){
         this.product1.push(prod);
      } else if(prod.productID === 2)
       {
         this.purpose1.push(prod);
       }
 });
 },

    (err)=>console.log(err))
  }

  getLeadInfo(){
    this.baseapi.getLeadInfo()
    .subscribe(res=>
      {
    this.leadInformation.controls['leadBranch'].setValue(res.responseObj[0].branchID),
    this.leadInformation.controls['LINameFirstName'].setValue(res.responseObj[0].applicantFirstName),
    this.leadInformation.controls['LINameMidleName'].setValue(res.responseObj[0].applicantMiddleName),
    this.leadInformation.controls['LILastName'].setValue(res.responseObj[0].applicantLastName),
    this.leadInformation.controls['LIcontactnumber'].setValue(res.responseObj[0].applicantContactNumber),
    this.leadInformation.controls['LITypeofLoan'].setValue(res.responseObj[0].loanTypeDetailID),
    this.leadInformation.controls['LIEmail'].setValue(res.responseObj[0].applicantEmail)
    
    // this.leadInformation.controls['LILocation'].setValue(res.responseObj[0].)
 },
 
    err=>console.log(err))
  }
  onChange($event){
    if(this.leadInformation.value.LISourcingChannelPartner==53){
      this.leadInformation.controls['LIChannelPartnerName'].setValue('');
      this.leadInformation.controls['LIChannelPartnerName'].disable();
    }
    else{
      this.leadInformation.controls['LIChannelPartnerName'].enable();
    }
 
  }
     
  onProductChange($event){
  if(this.leadInformation.value.LILoanProduct==1){
    this.purpose=this.product1[0].loanPurposeList;
    this.maxAmount=this.product1[0].maxAmount;
    this.minAmount=this.product1[0].minAmount;
    this.maxTenure=this.product1[0].maxTenure;
    this.minTenure=this.product1[0].minTenure;
  }
  else if(this.leadInformation.value.LILoanProduct==2){
    this.purpose=this.purpose1[0].loanPurposeList;
    this.maxAmount=this.purpose1[0].maxAmount;
    this.minAmount=this.purpose1[0].minAmount;
    this.maxTenure=this.purpose1[0].maxTenure;
    this.minTenure=this.purpose1[0].minTenure;
  }
  }
  // permissions(){
  //   let userDetail:any=[]=JSON.parse(sessionStorage.getItem('PriveldgeList'));
  //   let roles:any={};
  //   let infoPermisson:any=[];
  //   let loanIn:any=[]=userDetail.rolePrivilegesList;
  //   // console.log(loanIn)
  //   // console.log(userDetail.rolePrivilegesList)

  //   loanIn.forEach((item) => {
  //            roles = item;
  //            if(roles.subModuleName=="Loan Information"){
  //             infoPermisson.push(roles);}
              
  //    });
  //    localStorage.setItem('loanInfo',JSON.stringify(infoPermisson))
  // }
  }