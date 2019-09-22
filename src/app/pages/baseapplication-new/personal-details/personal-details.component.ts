import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import { BaseApplicationApiService } from '../baseapplication-api';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html', 
  encapsulation: ViewEncapsulation.None
})
export class PersonalDetailsComponent implements OnInit {
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];
   otpMessage:any;

   // Personal_form

  Personal_form: FormGroup;
  submitted1 = false;
checked= false;
  // Basic Information

  basic_information: FormGroup;
  submitted2 = false;
  otpVerify=false;
  result:any;
  DOB:any=[];
gender:any=[];
religion:any=[];
caste:any=[];
nationality:any=[];
qualification:any=[];
detQualification:any=[];
maritalStatus:any=[];
residence:any=[];
addProof:any=[];
state:any=[];

  constructor(public _fb: FormBuilder,private baseapi:BaseApplicationApiService) { }

  ngOnInit() {
    this.getDetails();
    // this.dropdowns();
    // this.personalPermissions();
    // Personal_form
    this.Personal_form = this._fb.group({
      LIIdentificationtype: ['', Validators.required],
      LIIdentificationNumber: ['', Validators.required],
      LIIssuedate: ['', Validators.required],
      Liexpirydate: ['', Validators.required],
      LIVerifiedstatus: ['', Validators.required],
    })

    // Baisc Information
    this.basic_information = this._fb.group({
      Ba_Mobile:['',Validators.required],
      Ba_Email:[''],
      Ba_Otp1:['',Validators.required],
      Ba_Otp2:['',Validators.required],
      Ba_Otp3:['',Validators.required],
      Ba_Otp4:['',Validators.required],
      Ba_First_Name: ['', Validators.required],
      Ba_Middle_Name: [''],
      Ba_Last_Name: [''],
      Ba_DOB: ['', Validators.required],
      Ba_Age: ['',],
      Ba_DOB_Proof: ['',  Validators.required],
      Ba_Gender: ['' , Validators.required],
      Ba_Nationality: ['' , Validators.required],
      Ba_Religion: [''],
      Ba_Caste: [''],
      Ba_No_of_Earning_Members: [''],
      Ba_Qualification: ['',  Validators.required],
      Ba_Detail_Qualification: ['',  Validators.required],
      Ba_Marital_Status: ['',  Validators.required],
      Ba_Father_First_Name: ['' , Validators.required],
      Ba_Father_Middle_Name: [''],
      Ba_Father_Last_Name: [''],
      Ba_Spouse_First_Name: ['',   Validators.required],
      Ba_Spouse_Middle_Name: [''],
      Ba_Spouse_Last_Name: [''],
      Ba_Alternate_Contact_No: ['',   Validators.required],
      Ba_No_of_Dependents: [''], 
      Cu_Residence_Type: ['' ,  Validators.required],
      Cu_Address_Proof: ['' ,  Validators.required],
      Cu_Rent_Amount: [''],
      Cu_Address: ['' ,  Validators.required],
      Cu_Landmark: ['' ,  Validators.required],
      Cu_Pin_Code: ['' ,  Validators.required],
      Cu_City: ['' ,  Validators.required],
      Cu_District: ['' ,  Validators.required],
      Cu_State: ['' ,  Validators.required],
      Cu_Staying_In_years: ['' ,  Validators.required], 
      Pe_Residence_Type: ['' ,  Validators.required],
      Pe_Address_Proof: ['' ,  Validators.required],
      Pe_Rent_Amount: ['' ,  Validators.required],
      Pe_Address: ['' ,  Validators.required],
      Pe_Landmark: ['' ,  Validators.required],
      Pe_Pin_Code: ['' ,  Validators.required],
      Pe_City: ['' ,  Validators.required],
      Pe_District: ['' ,  Validators.required],
      Pe_State: ['' ,  Validators.required],
      Pe_Staying_In_years: ['' ,  Validators.required],
      isChecked: false,
    })

  }

  // KYC Submit
  get a(){ return this.Personal_form.controls; }

  kycUpdate() {

    // loadn Information Submit
      this.submitted1 = true;

      // stop here if form is invalid
      if (this.Personal_form.invalid) {
          return;
      }

  }


  // Basic Information
  get basicInform(){ return this.basic_information.controls; }

  onSubmit() {

    // loadn Information Submit
      this.submitted2 = true;
      // stop here if form is invalid
      // if (this.basic_information.invalid) {
      //     return;
      // }
 this.updateDetails();
  }

  getDetails(){
    //get personal details data
   this.baseapi.getPersonal()
    .subscribe(res => {
      //constant
      const pesonalDet=res.responseObj.applicantDetails[0];
      //setting the values 
      this.basic_information.controls['Ba_First_Name'].setValue(pesonalDet.firstName);
      this.basic_information.controls['Ba_Middle_Name'].setValue(pesonalDet.middleName);
      this.basic_information.controls['Ba_Middle_Name'].setValue(pesonalDet.lastName);
      this.basic_information.controls['Ba_Father_First_Name'].setValue(pesonalDet.fatherFirstName);
      this.basic_information.controls['Ba_Father_Middle_Name'].setValue(pesonalDet.fatherMiddleName);
      this.basic_information.controls['Ba_Father_Last_Name'].setValue(pesonalDet.fatherLastName);
      this.basic_information.controls['Ba_Spouse_First_Name'].setValue(pesonalDet.spouseFirstName);
      this.basic_information.controls['Ba_Spouse_Middle_Name'].setValue(pesonalDet.spouseMiddleName);
      this.basic_information.controls['Ba_Spouse_Last_Name'].setValue(pesonalDet.spouseLastName);
      this.basic_information.controls['Ba_Age'].setValue(pesonalDet.age);
      this.basic_information.controls['Ba_DOB'].setValue(pesonalDet.dateOfBirth);
      this.basic_information.controls['Ba_No_of_Earning_Members'].setValue(pesonalDet.numberOfEarningMembers);
      this.basic_information.controls['Ba_No_of_Dependents'].setValue(pesonalDet.numberOfDependents);
      this.basic_information.controls['Ba_Qualification'].setValue(pesonalDet.qualificationTypeDetailID);
      this.basic_information.controls['Ba_Detail_Qualification'].setValue(pesonalDet.detailQualificationTypeDetailID);
      this.basic_information.controls['Ba_Gender'].setValue(pesonalDet.genderTypeDetailID);
      this.basic_information.controls['Ba_Marital_Status'].setValue(pesonalDet.maritialStatusTypeDetailID);
      this.basic_information.controls['Ba_Religion'].setValue(pesonalDet.religionTypeDetailID);
      this.basic_information.controls['Ba_Caste'].setValue(pesonalDet.casteTypeDetailID);
      this.basic_information.controls['Ba_DOB_Proof'].setValue(pesonalDet.dobProofTypeDetailID);
      this.basic_information.controls['Cu_Residence_Type'].setValue(pesonalDet.residenceTypeTypeDetailID);
      this.basic_information.controls['Cu_Address_Proof'].setValue(pesonalDet.addressDetailList[0].addressProof);
      this.basic_information.controls['Cu_Rent_Amount'].setValue(pesonalDet.addressDetailList[0].rentAmount);
      this.basic_information.controls['Cu_Landmark'].setValue(pesonalDet.addressDetailList[0].landmark);
      this.basic_information.controls['Cu_Pin_Code'].setValue(pesonalDet.addressDetailList[0].zip);
      this.basic_information.controls['Cu_City'].setValue(pesonalDet.addressDetailList[0].cityName);
      this.basic_information.controls['Cu_District'].setValue(pesonalDet.addressDetailList[0].districtID);
      this.basic_information.controls['Cu_Address'].setValue(pesonalDet.addressDetailList[0].address1);
    res=> console.log(res)
     err=>console.log(err);

    });
}

updateDetails(){
  //consant 
  const persDetails=this.basic_information.value;

  this.baseapi.personalDet({leadID: 4,draftDetailID: 1, userID: null,storageTypeID: null,
    applicantDetails:[{firstName:persDetails.Ba_First_Name,middleName:persDetails.Ba_Middle_Name,
    lastName:persDetails.Ba_Last_Name,fatherFirstName:persDetails.Ba_Father_First_Name,
    fatherMiddleName:persDetails.Ba_Father_Middle_Name,fatherLastName:persDetails.Ba_Father_Last_Name,
    spouseFirstName:persDetails.Ba_Spouse_First_Name,spouseMiddleName:persDetails.Ba_Spouse_Middle_Name,
    spouseLastName:persDetails.Ba_Spouse_Last_Name,age:this.basic_information.value.Ba_Age,
    dateOfBirth:persDetails.Ba_DOB,numberOfEarningMembers:persDetails.Ba_No_of_Earning_Members,
    numberOfDependents:persDetails.Ba_DOB_Proof,dobProofImagePath:null,
    detailQualificationTypeDetailID:persDetails.Ba_Detail_Qualification,
    qualificationTypeDetailID:persDetails.Ba_Qualification,genderTypeDetailID:persDetails.Ba_Gender,
    maritialStatusTypeDetailID:persDetails.Ba_Marital_Status,
    religionTypeDetailID:persDetails.Ba_Religion,
    casteTypeDetailID:persDetails.Ba_Caste,
    dobProofTypeDetailID:persDetails.Ba_DOB_Proof,entityID:1,
    nationalityTypeDetailID:persDetails.Ba_Nationality,
    presentAccommodationTypeDetailID:1,loanApplicationID:1,
    contactDetail:{contactID:null,mobile:null,email:null,fax:null,enitiyID:1,contactTypeDetailID:null},
    addressDetailList:[{addressID:null,entityID:null,address1:persDetails.Cu_Address,address2:null,
    cityName:persDetails.Cu_City,zip:persDetails.Cu_Pin_Code,
    landmark:persDetails.Cu_Landmark,residenceTypeTypeDetailID:persDetails.Cu_Residence_Type,
    addressProof:persDetails.Cu_Address_Proof,
    rentAmount:persDetails.Cu_Rent_Amount,addressTypeDetailID:null,
    districtID:persDetails.Cu_District
    ,cityID:null}],mainApplicant:null}]})
    .subscribe((res)=>{
      console.log(res)},
      (err)=>
      {
        console.log(err)
})
}
//GENERATE OTP
generateOtp(){
    //consant 
    const persDetails=this.basic_information.value;

  this.baseapi.generateOtp({
    numberVerificationID: null,
    mobile: persDetails.Ba_Mobile,
    otpValue: null,
    otpCounter: null,
    isVerified: null
  }).subscribe(res=>console.log(res),
  err=>console.log(err))
}
//VERIFY OTP
verifyOtp(){
    //consant 
    const persDetails=this.basic_information.value;

  this.otpVerify=true;
  this.result=persDetails.Ba_Otp1+persDetails.Ba_Otp2+persDetails.Ba_Otp3+persDetails.Ba_Otp4;
  this.baseapi.verifyOtp({
      numberVerificationID: null,
      mobile: persDetails.Ba_Mobile,
      otpValue: this.result,
      otpCounter: null,
      isVerified: null
}).subscribe((res)=>
  {
    if(res){
    this.otpMessage=res.responseMsg;
  }})
err=>console.log(err)
}

checkValue(){
  //constant
  const persDetails=this.basic_information.value;

  if(this.basic_information.value.isChecked==true){
    this.basic_information.controls.Pe_Address.setValue(persDetails.Cu_Address);
    this.basic_information.controls.Pe_Address_Proof.setValue(persDetails.Cu_Address_Proof);
    this.basic_information.controls.Pe_City.setValue(persDetails.Cu_City);
    this.basic_information.controls.Pe_District.setValue(persDetails.Cu_District);
    this.basic_information.controls.Pe_Landmark.setValue(persDetails.Cu_Landmark);
    this.basic_information.controls.Pe_Pin_Code.setValue(persDetails.Cu_Pin_Code);
    this.basic_information.controls.Pe_Rent_Amount.setValue(persDetails.Cu_Rent_Amount);
    this.basic_information.controls.Pe_Residence_Type.setValue(persDetails.Cu_Residence_Type);
    this.basic_information.controls.Pe_State.setValue(persDetails.Cu_State);
    this.basic_information.controls.Pe_Staying_In_years.setValue(persDetails.Cu_Staying_In_years);
    }
  }
  // dropdowns(){
  //   this.baseapi.masterDropdowns()
  //   .subscribe(res =>{
  //     this.DOB=res.responseObj;
  //     this.gender=res.responseObj;
  //     this.religion=res.responseObj;
  //     this.caste=res.responseObj;
  //     this.nationality=res.responseObj;
  //     this.qualification=res.responseObj;
  //     this.detQualification=res.responseObj;
  //     this.maritalStatus=res.responseObj;
  //     this.residence=res.responseObj;
  //     this.addProof=res.responseObj;
  //     this.state=res.responseObj;

  //     console.log(res.responseObj)
  //   },
  //   err=>console.log(err))
  // }
  
  // personalPermissions(){
  //   let personalDetail:any=[]=JSON.parse(sessionStorage.getItem('PriveldgeList'));
  //   let roles:any={};
  //   let personalPermisson:any=[];
  //   let loanIn:any=[]=personalDetail.rolePrivilegesList;
  //   // console.log(loanIn)
  //   // console.log(userDetail.rolePrivilegesList)

  //   loanIn.forEach((item) => {
  //            roles = item;
  //            if(roles.subModuleName=="Personal"){
  //             personalPermisson.push(roles);}
              
  //    });
  //    localStorage.setItem('Personal',JSON.stringify(personalPermisson))
  // }
  }