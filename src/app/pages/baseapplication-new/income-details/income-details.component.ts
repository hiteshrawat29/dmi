import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import { BaseApplicationApiService } from '../baseapplication-api';


@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  encapsulation: ViewEncapsulation.None, 
})
export class IncomeDetailsComponent implements OnInit {
   

  // error list
  requireerror: any = ['This is required'];
  minerror: any = ['Min. least 10 characters'];
  minphone: any = ['Min. least 7 characters'];
  min100error: any = ['Min. least 50 characters'];
  emailerror: any = ['Email must be a valid email address'];

  // Income 
  income_information : FormGroup;
  submitted5 = false;

   // Income 
   secondry_information : FormGroup;
   submitted33 = false;
   
  constructor(public _fb: FormBuilder,private baseapi:BaseApplicationApiService) { }

  ngOnInit() {
    this.getItr();
    this.getSalary();
     // income_information
     this.income_information = this._fb.group({
      Ca_Basic: [''],
      Ca_Provident_Fund: [''],
      Ca_HRA: [''],
      Ca_GPF: [''],
      Ca_DA: [''],
      Ca_VPF: [''],
      Ca_Conveyance: [''],
      Ca_Income_Tax: [''],
      Ca_Medical_Allowance: [''],
      Ca_Professional_Tax: [''],
      Ca_Special_Allowance: [''],
      Ca_Employer_Loan_Adance: [''],
      Ca_Travelling_Allowance: [''],
      Ca_In_Other_Deduction: [''],
      Ca_De_Other_Deduction: [''],
      Ca_Other_Allowance: [''],
      Ca_Total_Deduction: [''],
      Ca_Additional:[''],
      Ca_LTA: [''],
      Ca_Gross_Monthly_Income: ['', Validators.required],             

      la_Financial_Year: [],
      Se_Financial_Year: [],
      th_Financial_Year: [],

      la_Turnover: [''],
      la_Net_Profit_Annual_income: [''],
      la_Date_of_ITR_Filling: [''],
      la_Depreciation: [''],
      la_other_Income: [''],
      la_Household_Expense: [''],
      la_NET_INCOME: [''],
      Se_Turnover: [''],
      Se_Net_Profit_Annual_income: [''],
      Se_Date_of_ITR_Filling: [''],
      Se_Depreciation: [''],
      Se_other_Income: [''],
      Se_Household_Expense: [''],
      Se_NET_INCOME: [''],
      th_Date_of_ITR_Filling: [''],
      th_Turnover: [''],
      th_Net_Profit_Annual_income: [''],
      th_Depreciation: [''],
      th_other_Income: [''],
      th_Household_Expense: [''], 
       
    }) 

    // income_information
    this.secondry_information = this._fb.group({
      sd_Income_Type: ['' , Validators.required],
      sd_Frequency: ['' , Validators.required],
      sd_Amount: ['' , Validators.required],
      sd_Considered: ['' , Validators.required],
      sd_Amount_Consider: ['' , Validators.required], 
      
       
    }) 

  }
  
  // income_information
  get income_control(){ return this.income_information.controls; }

  onSubmit5() {

    // income_information Submit
      this.submitted5 = true;

      // stop here if form is invalid
      // if (this.income_information.invalid) {
      //     return;
      // } 
      this.updateItr();
     this.updateSalary();
  }


  // income_information
  get income_secondry_control(){ return this.secondry_information.controls; }

  onSubmit33() {

    // income_information Submit
      this.submitted33 = true;

      // stop here if form is invalid
      // if (this.secondry_information.invalid) {
      //     return;
      // } 
      this.updateItr();
 

  }

 updateSalary(){
   const salary=this.income_information.value;

    this.baseapi.salaryIncome({loanApplicationObj: {applicantIncomeID: null,
        basicIncome:salary.Ca_Basic,hraIncome:salary.Ca_HRA,
        daIncome:salary.Ca_DA,conveyanceIncome:salary.Ca_Conveyance,
        medicalAllowanceIncome:salary.Ca_Medical_Allowance,specialAllowanceIncome:salary.Ca_Special_Allowance,
        travellingAllowanceIncome:salary.Ca_Travelling_Allowance,otherAllowanceIncome:salary.Ca_Other_Allowance,
        ltaIncome:salary.Ca_LTA,additionalIncome: null,
        grossMonthlyIncome:salary.Ca_Gross_Monthly_Income,providentFundDeducation:salary.Ca_Provident_Fund,
        gpfDeducation:salary.Ca_GPF,vpfDeducation:salary.Ca_VPF,
        incomeTaxDeducation:salary.Ca_Income_Tax,
        professionalDeducation: null, employerLoanDeducation: null,otherDeducation: null, totalDeducation: null,
        esiDeducation: null,netIncomeDeducation: null,
        monthOneSalaryCreditDeduction: null,  monthTwoSalaryCreditDeduction: null,
        monthThreeSalaryCreditDeduction: null, monthFourSalaryCreditDeduction: null, monthFiveSalaryCreditDeduction: null,
        regularITRSenp: null,particularSenp: null,itrSenp: null, turnoverYearOneSenp: null,
        turnoverYearTwoSenp: null,grossIncomeSenp: null,netProfitYearOneSenp: null,
        netProfitYearTwoSenp: null, depreciationYearOneSenp: null,
        depreciationYearTwoSenp: null,otherIncomeSenp: null,
        netIncomeSenp: null,applicantID: null,industryTypeDetailID: null,loanApplicationID: null
    },leadID:4,draftDetailID:null,userID:null,storageTypeID:null,
    })
    .subscribe(res => console.log(res),
    err=>console.log(err))

  }

  updateItr()
{
  const incomeInf=this.income_information.value;
  this.baseapi.itrIncome({loanApplicationObj:[
    {applicantIncomeItrID:null,financialYear:incomeInf.la_Financial_Year,
      turnover:incomeInf.la_Turnover,
      netProfitOrAnnualIncome:incomeInf.la_Net_Profit_Annual_income,
      dateOfItr:incomeInf.la_Date_of_ITR_Filling,depreciation:incomeInf.la_Depreciation,
      otherIncome:incomeInf.la_other_Income,householdExpense:incomeInf.la_Household_Expense,
      isActive: null,applicantID: null,loanApplicationID: null},
      {applicantIncomeItrID:null,
        financialYear:incomeInf.Se_Financial_Year,turnover:incomeInf.Se_Turnover,
        netProfitOrAnnualIncome:incomeInf.Se_Net_Profit_Annual_income,dateOfItr:incomeInf.Se_Date_of_ITR_Filling
        ,depreciation:incomeInf.Se_Depreciation,
        otherIncome:incomeInf.Se_other_Income,householdExpense:incomeInf.Se_Household_Expense,isActive: null,
        applicantID: null,loanApplicationID: null},
        {applicantIncomeItrID:null,financialYear:incomeInf.th_Financial_Year,turnover:incomeInf.th_Turnover,
          netProfitOrAnnualIncome:incomeInf.th_Net_Profit_Annual_income,dateOfItr:incomeInf.th_Date_of_ITR_Filling,
          depreciation:incomeInf.th_Depreciation,
          otherIncome:incomeInf.th_other_Income,householdExpense:incomeInf.th_Household_Expense,
          isActive: null,applicantID: null,loanApplicationID: null}
        ],leadID:5,draftDetailID:36,userID:null})
          .subscribe(res=>
          console.log(res),
  err=>console.log(err))
}

getItr(){
  this.baseapi.getITR()
  
  .subscribe(res => {
    const getItr0=res.responseObj.loanApplicationObj[0];
    const getItr1=res.responseObj.loanApplicationObj[1];
    const getItr2=res.responseObj.loanApplicationObj[2];
    this.income_information.controls['la_Financial_Year'].setValue(getItr0.financialYear);
    this.income_information.controls['Se_Financial_Year'].setValue(getItr1.financialYear);
    this.income_information.controls['th_Financial_Year'].setValue(getItr2.financialYear);
    this.income_information.controls['la_Turnover'].setValue(getItr0.turnover);
    this.income_information.controls['Se_Turnover'].setValue(getItr1.turnover);
    this.income_information.controls['th_Turnover'].setValue(getItr2.turnover);
    this.income_information.controls['la_Net_Profit_Annual_income'].setValue(getItr0.netProfitOrAnnualIncome);
    this.income_information.controls['Se_Net_Profit_Annual_income'].setValue(getItr1.netProfitOrAnnualIncome);
    this.income_information.controls['th_Net_Profit_Annual_income'].setValue(getItr2.netProfitOrAnnualIncome);
    this.income_information.controls['la_Date_of_ITR_Filling'].setValue(getItr0.dateOfItr);
    this.income_information.controls['Se_Date_of_ITR_Filling'].setValue(getItr1.dateOfItr);
    this.income_information.controls['th_Date_of_ITR_Filling'].setValue(getItr2.dateOfItr);
    this.income_information.controls['la_Depreciation'].setValue(getItr0.depreciation);
    this.income_information.controls['Se_Depreciation'].setValue(getItr1.depreciation);
    this.income_information.controls['th_Depreciation'].setValue(getItr2.depreciation);
    this.income_information.controls['la_other_Income'].setValue(getItr0.otherIncome);
    this.income_information.controls['Se_other_Income'].setValue(getItr1.otherIncome);
    this.income_information.controls['th_other_Income'].setValue(getItr2.otherIncome);
    this.income_information.controls['la_Household_Expense'].setValue(getItr0.householdExpense);
    this.income_information.controls['Se_Household_Expense'].setValue(getItr1.householdExpense);
    this.income_information.controls['th_Household_Expense'].setValue(getItr2.householdExpense);},
  err=>console.log(err))
}

getSalary(){
 this.baseapi.getSalary()
 .subscribe(res => {
   const salaryInc=res.responseObj.loanApplicationObj;
  this.income_information.controls['Ca_Basic'].setValue(salaryInc.basicIncome);
  this.income_information.controls['Ca_HRA'].setValue(salaryInc.hraIncome);
  this.income_information.controls['Ca_GPF'].setValue(salaryInc.financialYear);
  this.income_information.controls['Ca_DA'].setValue(salaryInc.daIncome);
  this.income_information.controls['Ca_Conveyance'].setValue(salaryInc.conveyanceIncome);
  this.income_information.controls['Ca_Medical_Allowance'].setValue(salaryInc.medicalAllowanceIncome);
  this.income_information.controls['Ca_Special_Allowance'].setValue(salaryInc.specialAllowanceIncome);
  this.income_information.controls['Ca_Travelling_Allowance'].setValue(salaryInc.travellingAllowanceIncome);
  this.income_information.controls['Ca_De_Other_Deduction'].setValue(salaryInc.otherDeducation);
  this.income_information.controls['Ca_Other_Allowance'].setValue(salaryInc.otherAllowanceIncome);
  this.income_information.controls['Ca_LTA'].setValue(salaryInc.ltaIncome);
 })
}
}
