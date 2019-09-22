import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'  
declare var $: any;
 

@Component({
  selector: 'app-technical-report',
  templateUrl: './technical-report.component.html',
  encapsulation: ViewEncapsulation.None 
})
export class TechnicalReportComponent implements OnInit {
   // error list
   requireerror: any = ['This is required'];
   minerror: any = ['Min. least 10 characters'];
   minphone: any = ['Min. least 7 characters'];
   min100error: any = ['Min. least 50 characters'];
   emailerror: any = ['Email must be a valid email address'];

   // Technical Report
Technical_Report : FormGroup;
submitted28 = false;

// Subsequent_Report 
Subsequent_Report : FormGroup;
submitted29 = false;
Status_final:any;
Property_Classification:any;
Stage_of_1:any;
Property_is_identified:any;
Valuation_of_Collateral:any;
Address_and_Area:any;
Te_Pr_State:any;
Te_Pr_Location_Categorization:any;
Te_De_Hall:any;
Te_De_Is_Property_Demarcated:any;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {

    // Technical_Firing_report
    this.Technical_Report = this._fb.group({
      Te_Te_Applicant_Name: ['', Validators.required],
      Te_Te_Property_Type: ['', Validators.required],
      Te_Te_Visited_By: ['', Validators.required],
      Te_Te_Product: ['', Validators.required],
      Te_Te_Report_Date: ['', Validators.required],
      Te_Te_Date_of_Visit: ['', Validators.required],
      Te_Pr_House_Flat_Premises_No: [''],
      Te_Pr_Wing_Name_No: ['' ],
      Te_Pr_Colony__Project_Name: ['', Validators.required],
      Te_Pr_Plot_Property_Dag_NO: ['', Validators.required],
      Te_Pr_Khasra_Survey_No: [''],
      Te_Pr_Gali_No_Road_Name: ['', Validators.required],
      Te_Pr_Sector_Phase_Ward: [''],
      Te_Pr_Distance_from_Landmark: ['', Validators.required],
      Te_Pr_Village_Location: ['', Validators.required],
      Te_Pr_Mauzza_police_Station: ['', Validators.required],
      Te_Pr_Landmark: [''],
      Te_Pr_City_Tehsil_Taluka_Town: ['', Validators.required],
      Te_Pr_District: ['', Validators.required],
      Te_Pr_State: ['', Validators.required],
      Te_Pr_Pin_Code: [''], 
      Te_Pr_Location_Categorization: ['', Validators.required],
      Te_Pr_Distance_from_Nearest_DMI_branch: ['', Validators.required],
      Te_Pr_Distance_from_Nearest_city_centre: ['', Validators.required],
      Te_Pr_Distance_from_Landmark2: ['', Validators.required],
      Te_Pr_List_of_Documents_submitted: ['', Validators.required],
      Te_Pr_Property_owner_as_per_documents: ['', Validators.required],
      Te_Pr_Is_it_selfoccupied_property_by_Applicant: ['', Validators.required],
      Te_Pr_If_No_who_owns_the_property: ['', Validators.required],
      Te_Pr_Name_of_person_met: ['', Validators.required],
      Te_Pr_Contact_no_of_person_met: ['', Validators.required],
      Te_Pr_Relation_with_applicant: ['', Validators.required],
      Te_Pr_Contact_no_of_Applicant: ['', Validators.required],
      Te_Fo_East_As_per_Site: [''],
      Te_Fo_East_As_per_Sale_deed: [''],
      Te_Fo_East_Geo_Cordinates: ['', Validators.required],
      Te_Fo_West_As_per_Site: [''],
      Te_Fo_WestAs_per_Sale_deed: [''],
      Te_Fo_West_Geo_Cordinates: ['', Validators.required],
      Te_Fo_North_As_per_Site: ['',],
      Te_Fo_NorthAs_per_Sale_deed: [''],
      Te_Fo_South_As_per_Site: [''],
      Te_Fo_South_As_per_Sale_deed: [''],
      Te_De_No_of_Kitchen: [''],
      Te_De_No_of_Rooms: [''],
      Te_De_Roof_type: [''],
      Te_De_Hall: [''],
      Te_De_No_of_Toilets: [''],
      Te_De_Structure_soundness_Quality: [''],
      Te_De_Is_Property_Demarcated: ['', Validators.required],
      Te_De_Front_Road_Width: [''],
      Te_De_No_of_Flat_on_each_Floor: [''],
      Te_De_Height_of_Building: [''],
      Te_Du_Authority_Limit: ['', Validators.required],
      Te_Du_Age_of_Property: ['', Validators.required],
      Te_Du_Residual_age_of_the_Property: ['', Validators.required],
      Te_Du_Demolition_Risk: ['', Validators.required],
      Te_Du_Flood_Affected_Area: ['', Validators.required],
      Te_Du_Land_Slide_Affected_Area: ['', Validators.required],
      Te_Du_Development_within_500_Mtr_Radius: ['', Validators.required],
      Te_Va_Area_In_sqft: ['', Validators.required],
      Te_Va_Rate_Per_sq_ft__for_Exisiting_Area: ['', Validators.required],
      Te_Va_Rate_Per_sq_ft__for_proposed_Area: [''], 
      Te_Va_Total_Value: [''],
      Te_Va_Land_Area: ['', Validators.required],
      Te_Va_Carpet_Area: [''],
      Te_Va_Built_up_Area__Existing: ['' ],
      Te_Va_Built_up_Area__proposed: ['' ],
      Te_Va_Super_Built_up_Area: ['' ],
      Te_Va_Amenities_Value: ['' ],
      Te_Va_Total_Fair_Market_Value: ['' ],
      Te_Va_Property_Value_As_per_Circle_Rate: ['', Validators.required],
      Te_Va_Distress_Sale_Value: [''],
      Te_Va_Insurable_Value: ['' ],
      Te_Va_Stage_of_Construction: ['', Validators.required],
      Te_Va_Building: ['', Validators.required],
      Te_Va_Unit_Being_Funded: ['', Validators.required],
      Te_Va_Special_Remarks: ['', Validators.required],
      Te_Va_Report_status: ['', Validators.required],      
      Address_and_Area: ['', Validators.required],
      Valuation_of_Collateral : ['', Validators.required],
      Property_is_identified: ['', Validators.required],
      Stage_of_1: ['', Validators.required],
      Any_Adverse: ['', Validators.required],
      Property_Classification: ['', Validators.required],
      Status_final: ['', Validators.required],
      Status_Remarks_01: ['', Validators.required],

     
        

    })

    // Technical_Firing_report
    this.Subsequent_Report = this._fb.group({
      Te_Su_Sanctioned_Loan_for_construction: ['', Validators.required],
      Te_Su_Prior_Disbursemnet_amount: ['', Validators.required],
      Te_Su_Construction_material: ['', Validators.required],
      Te_Su_No_of_floors_being_constructed: ['', Validators.required],
      Te_Su_Has_the_earlier_disbursemnet: ['', Validators.required],
      Te_Su_Brief_description_of_work_already_done: ['', Validators.required],
      Te_Su_Recommended_next_disbursemnet: ['', Validators.required],
      Te_Su_What_is_current_stage_of_construction_in: ['', Validators.required], 
      Te_Su_What_work_should_be: ['', Validators.required],
      Te_Su_Remarks: ['', Validators.required],
      Te_Su_Any_Construction_on: [''], 
       

    }) 



  }
  
   // Technical_Report
   get Technical_Report_control(){ return this.Technical_Report.controls; }

   onSubmit28() {
 
     // loadn Information Submit
       this.submitted28 = true;
 
       // stop here if form is invalid
       if (this.Technical_Report.invalid) {
           return;
       } 
 
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Technical_Report.value))
   }
 

    // Subsequent_Report
    get Subsequent_Report_control(){ return this.Subsequent_Report.controls; }

    onSubmit29() {
  
      // loadn Information Submit
        this.submitted29 = true;
  
        // stop here if form is invalid
        if (this.Subsequent_Report.invalid) {
            return;
        } 
  
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Subsequent_Report.value))
    }


}
