import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import { BaseApplicationApiService } from '../baseapplication-api';


@Component({
  selector: 'app-liability-asset',
  templateUrl: './liability-asset.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class LiabilityAssetComponent implements OnInit {
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];
   
// transtion_Details
Existing_Obligation : FormGroup;
submitted8 = false;

// transtion_Details
Credit_Card_Details : FormGroup;
submitted9 = false;

// loanOwn:any=[];
// obligate:any=[];
// loanType:any=[];
// repayBank:any=[];
// BankName:any=[];
// obligatte:any=[];
// assetDetail:any=[];
// loansubTypeAssetOwn:any=[];
// ownership:any=[];
// docProof:any=[];


// Asset Detail
Asset_Detail : FormGroup;
submitted10 = false;
oblig:any=[];
obligate:any={};
credit:any={};
aset:any={};
asset:any=[];
creditCard:any=[];

  constructor(public _fb: FormBuilder,private baseapi:BaseApplicationApiService) { }

  ngOnInit() {
    this.getAsset();
    // Bank_Details
    this.Existing_Obligation = this._fb.group({
      Ex_Loan_Ownership: ['' , Validators.required],
      Ex_Obligate: ['' , Validators.required],
      Ex_Loan_Type: ['' , Validators.required],
      Ex_Financer_Name: ['' , Validators.required],
      Ex_Loan_Ac_No: ['' , Validators.required],
      Ex_Loan_Amont: ['' , Validators.required],
      Ex_Tenure: ['' , Validators.required],
      Ex_Balance_Tenure: ['' , Validators.required],
      Ex_EMI_Amount: ['' , Validators.required],
      Ex_Repayment_Bank: ['' , Validators.required],
      Ex_No_of_bounces_in_last_6_month: ['' , Validators.required],
    

    })

    this.Credit_Card_Details = this._fb.group({
      Cr_Bank_Name: ['' , Validators.required],
      Cr_Card_Limit: ['' , Validators.required],
      Cr_Current_Utilization: ['' , Validators.required],
      Cr_Last_payment_Date: ['' , Validators.required],
      Cr_Obligate: ['' , Validators.required],
      

    })

    
    this.Asset_Detail = this._fb.group({
      As_Asset_Detail: ['' , Validators.required], 
      As_Sub_Type_of_Asset: ['' , Validators.required],
      As_Ownership: ['' , Validators.required],
      As_Value: ['' , Validators.required],
      As_Documented_Proof: ['' , Validators.required],
       
    })
  }

  // Obligation_control
  get Obligation_control(){ return this.Existing_Obligation.controls; }

resetObligate(){
  this.submitted8=false;
  this.Existing_Obligation.valid==true;
  this.Existing_Obligation.reset();
}
  onObligate() {

    // loadn Information Submit
      this.submitted8 = true;

      // stop here if form is invalid
        if (this.Existing_Obligation.invalid) {
           return;
        }

    this.obligate=this.Existing_Obligation.value;
    this.oblig=this.oblig.concat(this.obligate);
    
    // console.log(this.Existing_Obligation)
    // console.log(this.oblig);
// this.updateLiAndAsset();
  }


  // transtion_Details
  get cc_control(){ return this.Credit_Card_Details.controls; }

  onCredit() {

    // loadn Information Submit
      this.submitted9 = true;

      // stop here if form is invalid
      if (this.Credit_Card_Details.invalid) {
          return;
      } 
      this.credit=this.Credit_Card_Details.value;
      this.creditCard=this.creditCard.concat(this.credit);

  }

  // Asset Detail
  get asset_control(){ return this.Asset_Detail.controls; }

  save(){
    
    this.updateLiAndAsset();
  }

  onAsset() {

    // loan Information Submit
      this.submitted10 = true;

      // stop here if form is invalid
      if (this.Asset_Detail.invalid) {
          return;
      } 
      this.aset=this.Asset_Detail.value;
      //  console.log(this.asset);
  }

  updateLiAndAsset(){
    //constants
    const obligation=this.Existing_Obligation.value;
    const creditCard=this.Credit_Card_Details.value;
    const asset=this.Asset_Detail.value;
    this.baseapi.liAndAsset({
      loanApplicationObj: [
        { loanApplicationID: null, applicantID: null, obligationList: [
            {
              existingObligationID: null,financerName:obligation.Ex_Financer_Name,
              loanAmount:obligation.Ex_Loan_Amont, tenure:obligation.Ex_Tenure,
              balanceTenure:obligation.Ex_Balance_Tenure,emiAmount:obligation.Ex_EMI_Amount,
              numberOfBouncesInLastSixMonth:obligation.Ex_No_of_bounces_in_last_6_month, loanOwnershipTypeDetailID:obligation.Ex_Loan_Ownership,
              obligateTypeDetailID:obligation.Ex_Obligate,loanTypeTypeDetailID:obligation.Ex_Loan_Type,
              repaymentBankTypeDetailID:obligation.Ex_Repayment_Bank,borrowerNameTypeDetailID: null
            }
          ],
          creditCardList: [
            {
              creditCardDetailID:null,bankNameTypeDetailID:creditCard.Cr_Bank_Name,
              cardLimit:creditCard.Cr_Card_Limit,currentUtilization:creditCard.Cr_Current_Utilization,
              lastPaymentDate:creditCard.Cr_Last_payment_Date,obligateTypeDetail:creditCard.Cr_Obligate
            }
          ],
          assetList: [
            {
              assetDetailsID: null,subTypeOfAssetTypeDetailID:asset.As_Sub_Type_of_Asset,
              assetDetailsTypeDetailID:asset.As_Asset_Detail,ownership:asset.As_Ownership,
              assetValue:asset.As_Value,documentedProof:asset.As_Documented_Proof
            }
          ]
        }
      ],
      leadID: null,
      draftDetailID: null,
      userID: null,
      storageType: null
    }
    ).subscribe(res=>console.log(res))
  }

  getAsset(){
    this.baseapi.getLiabAndAsset()
     .subscribe( res=>
      {  //Creating Constants
        const obligation=res.responseObj.loanApplicationObj[0].obligationList[0];
        const credit=res.responseObj.loanApplicationObj[0].creditCardList[0];
        const asset=res.responseObj.loanApplicationObj[0].assetList[0];

        this.Existing_Obligation.controls['Ex_Loan_Ownership'].setValue(obligation.loanOwnershipTypeDetailID),
      this.Existing_Obligation.controls['Ex_Loan_Amont'].setValue(obligation.loanAmount),
      this.Existing_Obligation.controls['Ex_Financer_Name'].setValue(obligation.financerName),
      this.Existing_Obligation.controls['Ex_Tenure'].setValue(obligation.tenure),
      this.Existing_Obligation.controls['Ex_Balance_Tenure'].setValue(obligation.balanceTenure),
      this.Existing_Obligation.controls['Ex_EMI_Amount'].setValue(obligation.emiAmount),
      this.Existing_Obligation.controls['Ex_No_of_bounces_in_last_6_month'].setValue(obligation.numberOfBouncesInLastSixMonth),
      this.Existing_Obligation.controls['Ex_Obligate'].setValue(obligation.obligateTypeDetailID),
      this.Existing_Obligation.controls['Ex_Repayment_Bank'].setValue(obligation.repaymentBankTypeDetailID),
      this.Existing_Obligation.controls['Ex_Loan_Type'].setValue(obligation.loanTypeTypeDetailID),
      this.Credit_Card_Details.controls['Cr_Bank_Name'].setValue(credit.bankNameTypeDetailID),
      this.Credit_Card_Details.controls['Cr_Card_Limit'].setValue(credit.cardLimit),
      this.Credit_Card_Details.controls['Cr_Current_Utilization'].setValue(credit.currentUtilization),
      this.Credit_Card_Details.controls['Cr_Last_payment_Date'].setValue(credit.lastPaymentDate),
      this.Credit_Card_Details.controls['Cr_Obligate'].setValue(credit.obligateTypeDetail),
       this.Asset_Detail.controls['As_Sub_Type_of_Asset'].setValue(asset.subTypeOfAssetTypeDetailID),
      this.Asset_Detail.controls['As_Asset_Detail'].setValue(asset.assetDetailsTypeDetailID),
      this.Asset_Detail.controls['As_Ownership'].setValue(asset.ownership),
      this.Asset_Detail.controls['As_Value'].setValue(asset.assetValue),
      this.Asset_Detail.controls['As_Documented_Proof'].setValue(asset.documentedProof);
    } )
  }

deleteObligate(obligate){
 this.oblig.splice(this.oblig.indexOf(obligate),1);
}
deleteCredit(credit){
  this.creditCard.splice(this.creditCard.indexOf(credit),1);
 }
 deleteAsset(aset){
  this.asset.splice(this.asset.indexOf(aset),1);
 }
  // dropdowns(){
  //   this.baseapi.masterDropdowns()
  //   .subscribe(res =>{
  //     this.loanOwn=res.responseObj;
  //     this.obligate=res.responseObj;
  //     this.loanType=res.responseObj;
  //     this.BankName=res.responseObj;
  //     this.obligatte=res.responseObj;
  //     this.loansubTypeAssetOwn=res.responseObj;
  //     this.ownership=res.responseObj;
  //     this.docProof=res.responseObj;

  //     console.log(res)
  //   },
  //   err=>console.log(err))
  // }
  
  }
  
